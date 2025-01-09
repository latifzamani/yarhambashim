import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AxiosAPI=axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`,
    // withCredentials:true //important for sanctum
});

//Add CSRF Token and AUthorization headers

AxiosAPI.interceptors.request.use((config)=>{
    const csrfToken=document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken){
        config.headers['X-CSRF-TOKEN']=csrfToken;
    }
    config.headers.Authorization=`Bearer ${localStorage.getItem('SMSTOKEN')}`;
    return config;
});

AxiosAPI.interceptors.response.use(
    (response)=>response,
    (error)=>{
        const navigate=useNavigate();
        if(error.response && error.response.status==401){
            navigate('/login');
            return error;
        }
        throw error;
    }
);

export default AxiosAPI;