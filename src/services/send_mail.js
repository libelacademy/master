import axios from 'axios';

const urlPruebas = "http://localhost/sendmail/send.php";
const url= "https://libel.academy/master-blender/send.php";
const headers = { 'content-type': 'application/json' };

export const sendmail_service = (formData) => {
    return axios.post(url, formData, { headers });
} 
