
const API_CONNECT = import.meta.env.VITE_BACKEND_URL
// AUTH API
export const AUTH_API_INITIALIZER = `/api/v1/auth`

export const AUTH_API = {
    SEND_OTP: `${AUTH_API_INITIALIZER}/send-otp`,
    REGISTER: `${AUTH_API_INITIALIZER}/register`,
    LOGIN: `${AUTH_API_INITIALIZER}/login`
}