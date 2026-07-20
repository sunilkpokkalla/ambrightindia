/// <reference types="@cloudflare/workers-types" />

/**
 * POST /api/apply
 * Handles job applications — receives form data with resume file,
 * sends email to contact@ambrighttech.com via MailChannels.
 *
 * MailChannels setup for Cloudflare Workers:
 *   1. Add a DNS TXT record:  _mailchannels.yourdomain.com  TXT  "v=mc1 cfid=your-pages-project.pages.dev"
 *   2. Add SPF record if not present
 *   See: https://support.mailchannels.com/hc/en-us/articles/16918954360845
 */

interface Env {}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = (formData.get('phone') as string) || 'Not provided'
    const role = (formData.get('role') as string) || 'Open application'
    const coverNote = (formData.get('coverNote') as string) || 'No cover note provided.'
    const resume = formData.get('resume') as File | null

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Build email body
    const emailBody = [
      'New Job Application - AmBrightTech',
      '='.repeat(40),
      '',
      'Name:       ' + name,
      'Email:      ' + email,
      'Phone:      ' + phone,
      'Role:       ' + role,
      '',
      'Cover Note:',
      '-'.repeat(20),
      coverNote,
      '',
      '-'.repeat(40),
      'Submitted via ambrighttech.com/job-openings',
      'Resume attached: ' + (resume ? resume.name : 'No file attached'),
    ].join('\n')

    // Prepare MailChannels API payload
    const mailPayload: any = {
      personalizations: [
        {
          to: [{ email: 'contact@ambrighttech.com', name: 'AmBrightTech Recruiting' }],
        },
      ],
      from: {
        email: 'careers@ambrighttech.com',
        name: 'AmBrightTech Careers',
      },
      reply_to: {
        email: email,
        name: name,
      },
      subject: 'Job Application: ' + role + ' - ' + name,
      content: [
        {
          type: 'text/plain',
          value: emailBody,
        },
      ],
    }

    // Attach resume if present
    if (resume) {
      const buffer = await resume.arrayBuffer()
      const bytes = new Uint8Array(buffer)
      let binary = ''
      // Process in chunks to avoid max call stack size and remain fast
      const chunkSize = 8192
      for (let i = 0; i < bytes.length; i += chunkSize) {
        binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunkSize)))
      }
      const base64 = btoa(binary)
      mailPayload.personalizations[0].attachments = [
        {
          filename: resume.name,
          content: base64,
          type: resume.type || 'application/octet-stream',
        },
      ]
    }

    // Send via MailChannels
    const sendRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailPayload),
    })

    if (sendRes.ok || sendRes.status === 202) {
      return new Response(JSON.stringify({ ok: true, message: 'Application submitted' }), {
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      const errText = await sendRes.text()
      console.error('MailChannels error:', sendRes.status, errText)
      return new Response(
        JSON.stringify({ error: 'Email delivery failed', detail: errText }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }
  } catch (err: any) {
    console.error('Apply error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
