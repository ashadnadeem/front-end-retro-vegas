import axios from "axios";
import BaseURL from "./url";


export const getProductOfCategory = async (CategoryId: String) => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const response = await axios.get(`${BaseURL}/product/${CategoryId}`, {}, config);
    console.log(response.data.header.error);
    if (response.data.header.error == 0) {
        localStorage.setItem('productsOfCategory', JSON.stringify(response.data.body.product));
        return '';
    } else {
        return response.data.header.errorMessage;
    }
}