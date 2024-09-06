import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosCient = axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const createNewResume = async (data) => await axiosCient.post('/ai-resumes', data);

export default {
    createNewResume,
}