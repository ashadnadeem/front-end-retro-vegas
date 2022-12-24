import axios from "axios";
import BaseURL from "./url";


export const getProduct = async (ProductID: String) => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const response = await axios.get(`${BaseURL}/product/${ProductID}`, config);
    if (response.data.header.error === 0) {
        // localStorage.setItem(`${response.data.body.product.name}`, JSON.stringify(response.data.body.product));
        // console.log(`${localStorage.getItem(`${response.data.body.product.name}`)}`);
        // console.log(response.data.body.product.name)
        return response.data.body.product;
    } else {
        return response.data.header.errorMessage;
    }
}


export const getProductOfCategory = async (CategoryId: String, offset: Number) => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };
    const body = {
        "offset": offset
    }
    const response = await axios.post(`${BaseURL}/product/category/${CategoryId}`, body, config);
    console.log(response.data.header.error);
    if (response.data.header.error === 0) {
        console.log(response.data.body.product);
        // localStorage.setItem('productsOfCategory', JSON.stringify(response.data.body.product));
        return response.data.body.product;
    } else {
        return response.data.header.errorMessage;
    }
}


export const searchProduct = async (name: String, offset: Number) => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const body = {
        "query": name,
        "offset": offset
    }

    const response = await axios.post(`${BaseURL}/product/search`, body, config);
    console.log(response.data.header.error);
    if (response.data.header.error === 0) {
        // localStorage.setItem('productsOfCategory', JSON.stringify(response.data.body.product));
        return response.data.body.product;
    } else {
        return response.data.header.errorMessage;
    }
}

export const autoComplete = async (name: String, offset?: Number, auto?: Boolean) => {
    const body = {
        "keyword": name,
        "auto": auto ?? true,
        "offset": offset ?? 0
    }
    const response = await axios.post(`${BaseURL}/elasticProd/search`, body);
    // console.log(response.data.header.error);
    if (response.data.header.error === 0) {
        // console.log(response.data.body.product);
        const result = {
            "suggestions": response.data.body.auto_complete,
            "products": response.data.body.products
        };
        console.log(result.products);
        return result;
    } else {
        return response.data.header.errorMessage;
    }
}

