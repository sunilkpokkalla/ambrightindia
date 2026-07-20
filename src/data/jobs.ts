export type Job = {
  title: string
  slug: string
  type: string
  location: string
  salary?: string
  closingOn?: string
  description?: string[]
}

export const ALL_JOBS: Job[] = [
  {
    title: 'Senior Java Developer',
    slug: 'senior-java-developer',
    type: 'Contract',
    location: 'Dallas–Fort Worth, TX (Hybrid)',
    description: [
      'We are seeking an experienced Senior Java Developer to join our team. The ideal candidate will have strong expertise in building scalable enterprise applications using Java, Spring Boot, and microservices architecture.',
      'Requirements include 5+ years of Java development experience, proficiency with relational databases (PostgreSQL/Oracle), and experience with cloud platforms.'
    ]
  },
  {
    title: 'Cloud Engineer (AWS)',
    slug: 'cloud-engineer-aws',
    type: 'Contract-to-hire',
    location: 'Remote (US)',
    description: [
      'We are looking for a Cloud Engineer specializing in AWS to design, deploy, and manage scalable, highly available, and fault-tolerant systems.',
      'Key responsibilities include migrating on-premise applications to AWS, implementing cost-control strategies, and ensuring cloud security best practices are followed. Experience with Terraform and CI/CD pipelines is highly desired.'
    ]
  },
  {
    title: 'Data Analyst',
    slug: 'data-analyst',
    type: 'Direct hire',
    location: 'McKinney, TX',
    description: [
      'Join our analytics team to transform raw data into actionable business insights. You will work closely with stakeholders to develop reports, dashboards, and complex SQL queries.',
      'Must have strong experience with SQL, Tableau or Power BI, and excellent communication skills. A background in business intelligence or statistical analysis is a major plus.'
    ]
  },
  {
    title: 'DevOps Engineer',
    slug: 'devops-engineer',
    type: 'Contract',
    location: 'Remote (US)',
    description: [
      'We are seeking a DevOps Engineer to streamline our software delivery processes. You will be responsible for automating deployments, managing infrastructure as code, and monitoring system performance.',
      'Required skills include Docker, Kubernetes, Jenkins/GitLab CI, and scripting in Python or Bash.'
    ]
  },
  {
    title: 'Junior Software Quality Assurance Engineer',
    slug: 'junior-software-quality-assurance-engineer',
    type: 'Full Time (40 hrs/wk, 9-5)',
    location: 'McKinney, TX (and unanticipated sites)',
    salary: '$110,198 per year',
    closingOn: 'Aug 22, 2026',
    description: [
      'Junior Software Quality Assurance Engineer (Multiple Positions with National Placement out of Collin County, TX). Must have bachelors degree and 6 months of experience. Degree and experience must be in either Computers, Engineering, Information Systems or IT related field. Foreign equivalent Any suitable combination of education, training or experience is acceptable.',
      'Will develop and execute software tests to identify software problems and their causes. The candidate must have experience using at least five (5) of the following: Power BI; Azure; SSRS; SSIS; Tableau; SQL; Python; ETL; and/or Agile. Able to relocate to multiple unanticipated sites when required. 9-5, 40 hrs/wk.'
    ]
  }
]

export function getJob(path: string) {
  const slug = path.replace('/jobs/', '').replace(/\/$/, '')
  return ALL_JOBS.find((j) => j.slug === slug)
}
