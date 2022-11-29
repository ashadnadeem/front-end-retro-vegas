import axios from "axios";
import BaseURL from "./url";

export const getCategories = async () => {
    console.log("getCategories called");
    const response = await axios.get(`${BaseURL}/category/all`, {});
    console.log(response.data.header.error);
    if (response.data.header.error == 0) {
        localStorage.setItem('categories', JSON.stringify(response.data.body.categories));
        return '';
    } else {
        return response.data.header.errorMessage;
    }
}