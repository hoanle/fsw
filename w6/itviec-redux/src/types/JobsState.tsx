import Job from "./Job";

type JobsState = {
    loading: false, 
    jobs: Job[],
    originalJobs: Job[],
    job: Job | null,
    error: ""
}

export default JobsState;