import axios from "axios";
import BaseURL from "./url";

export const getStore = async () => {
    // get store id from local storage
    console.log('p');
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

export const updateStore = async (name: string) => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const storeId = user.store_ID;
    const store = JSON.parse(localStorage.getItem('store'));

    const response = await axios.put(`${BaseURL}/store/${storeId}`, {
        userID: store.userID,
        products: store.products,
        name: name,
        rating: store.rating,
        trustedSeller: store.trustedSeller,
        orders: store.orders,
    }, config);

    console.log(response.data.header);
    if (response.data.header.error == 0) {
        await getStore();
        return true;
    } else {
        console.log('y')
        return false;
    }
}
