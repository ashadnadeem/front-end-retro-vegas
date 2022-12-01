import axios from "axios";
import BaseURL from "./url";

export const getStore = async () => {
    // get store id from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const storeId = user.store_ID;
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));;
    // get store data with customer id from backend using access token
    const response = await axios.get(`${BaseURL}/store/${storeId}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    // console.log(response.data.store);
    if (0 == 0) {
        localStorage.setItem('store', JSON.stringify(response.data.store));
        return true;
    } else {
        return false;
    }
}