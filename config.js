export default {
    backendEndpoint: process.env.NODE_ENV === 'production' ? 'https://nuque-backend.herokuapp.com/v1': 'http://localhost:3001/v1',
}