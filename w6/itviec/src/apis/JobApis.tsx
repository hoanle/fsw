import axiosClient from "./Base";

const getJobList = async () => {
    let result = await axiosClient.get('/legobitna/Itviec/jobs', {
        params: {
            json: true
        }
    })
    console.log(result.data);
    return result.data;
}

const getJobDetail = async (id:number) => {
    let result = await axiosClient.get(`/legobitna/Itviec/jobs/${id}`, {
        params: {
            json: true
        }
    })
    console.log(result.data);
    return result.data;
}
const JobApis = {
    getJobList,
    getJobDetail
}

export default JobApis;