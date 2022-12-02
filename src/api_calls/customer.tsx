import axios from "axios";
import { User } from "../models/user_model";
import BaseURL from "./url";

export const getCustomer = async () => {
    // get customer id from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const customerId = user.customer_ID;
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));;
    // get customer data with customer id from backend using access token
    const response = await axios.get(`${BaseURL}/customer/${customerId}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    // console.log(response.data.header.error);
    if (response.data.header.error == 0) {
        localStorage.setItem('customer', JSON.stringify(response.data.body.customer));
        return true;
    } else {
        return response.data.header.errorCode;
    }
}

export const addToCart = async (productId: String) => {
    // get access token from local storage
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));;
    // add product to cart with customer id from backend using access token
    const response = await axios.get(`${BaseURL}/customer/addtocart/${productId}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    // console.log(response.data.header.error);
    localStorage.setItem('customer', JSON.stringify(response.data.body.customer));
    if (response.data.header.error == 0) {
        return true;
    } else {
        return response.data.header.errorCode;
    }
}

export const removeFromCart = async (productId: String) => {
    // get access token from local storage
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));;
    // remove product from cart with customer id from backend using access token
    const response = await axios.get(`${BaseURL}/customer/removefromcart/${productId}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    // console.log(response.data.header.error);
    localStorage.setItem('customer', JSON.stringify(response.data.body.customer));
    if (response.data.header.error == 0) {
        return true;
    } else {
        return response.data.header.errorCode;
    }
}

export const addToFav = async (productId: String) => {
    // get access token from local storage
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));;
    // add product to wishlist with customer id from backend using access token
    const response = await axios.get(`${BaseURL}/customer/addtowishlist/${productId}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    // console.log(response.data.header.error);
    localStorage.setItem('customer', JSON.stringify(response.data.body.customer));
    if (response.data.header.error == 0) {
        return true;
    } else {
        return response.data.header.errorCode;
    }
}

export const removeFromFav = async (productId: String) => {
    // get access token from local storage
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));;
    // add product to wishlist with customer id from backend using access token
    const response = await axios.get(`${BaseURL}/customer/removefromwishlist/${productId}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    // console.log(response.data.header.error);
    localStorage.setItem('customer', JSON.stringify(response.data.body.customer));
    if (response.data.header.error == 0) {
        return true;
    } else {
        return response.data.header.errorCode;
    }
}

export const updateUser = async (email: string, name: string, phoneNo: string, address: String) => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const response = await axios.put(`${BaseURL}/user/${user._id}`, {
        email: email,
        name: name,
        phoneNo: phoneNo,
        address: address
    }, config);

    if (response.data.header.error == 0) {
        await getUser();
        return true;
    } else {
        return response.data.header.errorCode;
    }
}

export const getUser = async () => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const response = await axios.get(`${BaseURL}/user/${user._id}`, config)
    if (response.data.header.error == 0) {
        localStorage.setItem('user', JSON.stringify(response.data.body.user));
        return true;
    } else {
        return false;
    }
}