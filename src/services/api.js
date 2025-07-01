import axios from "axios"

const api = axios.create({
        baseURL: 'https://back-end-cdu.onrender.com'
})

export default api