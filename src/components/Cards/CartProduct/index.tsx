import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { getCategory } from "../../../api_calls/category";
import { Product } from "../../../models/product_model";
import BackButton from "../../Buttons/BackButton";
import { DefaultHeader } from "../../Headers/DefaultHeader";
import './styles.css';

type Props = {
    product: Product;
};

const CartProduct: FC<Props> = (prop) => {
    const [category, setCategory] = useState({});
    const categoryFetch = async (id: String) => {
        const category: Object = await getCategory(id);
        setCategory(category);
    };
    useEffect(() => {
        // get category id from product
        const categoryID = prop.product.categoryID;
        // get category from category id through API call
        categoryFetch(categoryID);
    }, []);
    return (
        <>
            <div className="cart_product_content">
                <div>
                    <img className="cart_product_image" src={require('../../../assets/productImage.png')} />
                </div>
                <div>
                    <div className="cart_product_title">{prop.product.name}</div>
                    <div className="cart_product_collection">{`Collection: ${category["name"] ?? ""}`}</div>
                    <div className="cart_product_seller">{"Ashad Nadeem"}</div>
                    <div className="cart_product_price">{`$${prop.product.price}`}</div>
                </div>
            </div>
            {/* <div>
            <img className="cart_product_image2" src={require('../../assets/Line.png')} />     
            </div> */}
        </>
    )

}

export default CartProduct;
