import axios from "axios";
import BaseURL from "./url";

export const loginCall = async (email: String, password: String) => {
    const response = await axios.post(`${BaseURL}/auth/login`, {
        email: email,
        password: password
    });
    // console.log(response.data.header.error);
    if (response.data.header.error == 0) {
        localStorage.setItem('accessToken', JSON.stringify(response.data.body.accessToken));
        localStorage.setItem('user', JSON.stringify(response.data.body.user));
        return '';
    } else {
        return response.data.header.errorMessage;
    }
}

export const registerCall = async (email: String, password: String, name: String, phoneNo: String) => {
    const response = await axios.post(`${BaseURL}/auth/register`, {
        email: email,
        password: password,
        name: name,
        phoneNo: phoneNo
    })
    // console.log(response.data.header.error);
    if (response.data.header.error == 0) {
        localStorage.setItem('accessToken', JSON.stringify(response.data.body.accessToken));
        localStorage.setItem('user', JSON.stringify(response.data.body.user));
        return '';
    } else {
        return response.data.header.errorMessage;
    }
}

