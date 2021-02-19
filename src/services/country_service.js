import axios from 'axios';

const url = "https://countriesnow.space/api/v0.1/countries";

export const get_countries_service = () => {
    return axios.get(url);
} 

