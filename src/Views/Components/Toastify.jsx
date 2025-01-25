import { useEffect } from 'react'
import {toast, ToastContainer} from 'react-toastify';
function Toastify({message,alertType}) {
    useEffect(()=>{
        if(message){
            switch(alertType){
                case "success":
                    toast.success(message);
                    break;

                case "error":
                    toast.error(message);
                    break;

                case "info":
                    toast.info(message);
                    break;

                case "warning":
                    toast.warning(message);
                    break;
                default:
                    toast(message);

            }
        }
    },[message,alertType]);
  return <ToastContainer/>;
}

export default Toastify;
