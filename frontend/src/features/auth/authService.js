import axios from 'axios'

const API_URL = '/api/users/'

// Reg user
const registerUserService = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const loginUserService = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logoutUserService = () => localStorage.removeItem('user')

const authService = {
    registerUserService,
    logoutUserService,
    loginUserService
}

export default authService