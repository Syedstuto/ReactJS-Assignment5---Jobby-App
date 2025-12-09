// constants.js
export const profileApiUrl = 'https://apis.ccbp.in/profile'
export const jobsApiUrl = 'https://apis.ccbp.in/jobs'
export const jobDetailsApiUrl = id => `https://apis.ccbp.in/jobs/${id}`

// Provided lists used in the project (tests expect these to be used)
export const employmentTypesList = [
  {employmentTypeId: 'FULLTIME', label: 'Full Time'},
  {employmentTypeId: 'PARTTIME', label: 'Part Time'},
  {employmentTypeId: 'FREELANCE', label: 'Freelance'},
  {employmentTypeId: 'INTERNSHIP', label: 'Internship'},
]

export const salaryRangesList = [
  {salaryRangeId: '100000', label: '10 LPA and above'},
  {salaryRangeId: '200000', label: '20 LPA and above'},
  {salaryRangeId: '300000', label: '30 LPA and above'},
  {salaryRangeId: '400000', label: '40 LPA and above'},
]
