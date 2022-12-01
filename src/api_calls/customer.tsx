import axios from "axios";
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
        return false;
    }
}