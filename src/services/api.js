import axios from '../utils/axios_customize'

export const callContact = (nameh, namet, email, notice) => {
    return axios.post('/api/action/lienhe', {nameh, namet, email, notice})
}