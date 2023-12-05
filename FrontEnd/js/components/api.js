const WORK_URL = 'http://localhost:5678/api/works'

export const getWorks = () => fetch(WORK_URL).then(data => data.json())