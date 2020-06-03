import axiosClient from './Base';

const sendHighScore = (userName: string, userScore: number) => {

    var params = new URLSearchParams();
    params.append('player', userName);
    params.append('score', `${Math.floor(userScore/1000)}`);

    return axiosClient.post('/tictactoe-dev', params)
}

const getHighScore = () => {

    return axiosClient.get('/tictactoe-dev', {
        params: {
            json: true
        }
    })
}

const TicTacApis = {
    sendHighScore,
    getHighScore
}

export default TicTacApis;