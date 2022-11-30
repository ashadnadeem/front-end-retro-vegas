import axios from "axios";
import BaseURL from "./url";

export const getCategories = async () => {
    const response = await axios.get(`${BaseURL}/category/all`, {});
    console.log(response.data.header.error);
    if (response.data.header.error == 0) {
        localStorage.setItem('categories', JSON.stringify(response.data.body.categories));
        return response.data.body.categories.length;
    } else {
        return response.data.header.errorMessage;
    }
}