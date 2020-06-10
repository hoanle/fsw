import axiosClient from "./Base";

const getJobList = async (dispatch: any) => {
    dispatch({type: 'LOAD_JOBS_START'})
    let result = await axiosClient.get('/legobitna/Itviec/jobs', {
        params: {
            json: true
        }
    })
    console.log(result.data);
    dispatch({type: 'LOAD_JOBS_SUCCESS', jobs: result.data})
}

const getJobDetail = async (dispatch: any, id: number) => {
    dispatch({type: 'LOAD_JOB_DETAIL_START'})
    let result = await axiosClient.get(`/legobitna/Itviec/jobs/${id}`, {
        params: {
            json: true
        }
    })
    console.log(result.data);
    dispatch({type: 'LOAD_JOB_DETAIL_SUCCESS', job: result.data})
}
const JobApis = {
    getJobList,
    getJobDetail
}

export default JobApis;