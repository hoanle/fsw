import JobsState from './../types/JobsState';
import Job from '../types/Job';

const initialState: JobsState = {
    loading: false,
    jobs: [],
    originalJobs: [],
    job: null,
    error: ""
}
const jobReducer = (state: JobsState = initialState, action: any) => {
    switch (action.type) {
        case 'LOAD_JOBS_START':
            return {
                ...state,
                loading: true
            };
        case 'LOAD_JOBS_SUCCESS':
            return {
                ...state,
                loading: false,
                originalJobs: action.jobs,
                jobs: action.jobs
            };
        case 'LOAD_JOBS_FAILURE':
            return {
                ...state,
                loading: false,
                jobs: [],
                error: action.errorMessage
            };
        case 'LOAD_JOB_DETAIL_SUCCESS':
            return {
                ...state,
                loading: false,
                job: action.job
            }
        case 'FILTER_JOB':
            let filtered = state.originalJobs.filter((x: Job) => {
                return (
                    x.description.includes(action.keyword)
                    || x.title.includes(action.keyword)
                    || x.tags.filter(t => t.includes(action.keyword)).length > 0
                )
            }).filter((x1: Job) => {
                if (action.city === "All") {
                    return true;
                } else {
                    return x1.city.includes(action.city);
                }
            });
            return {
                ...state,
                jobs: filtered
            }
        default:
            return state;
    }
}

export default jobReducer;