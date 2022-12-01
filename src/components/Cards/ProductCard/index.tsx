import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../../api_calls/product";
import { Product } from "../../../models/product_model";
import FavButton from "../../Buttons/FavouritButton";
import { RectangleButton } from "../../Buttons/RectangleButton";

import "./styles.css";

type Props = {
    product: Product;
};

const ProductCard: FC<Props> = ({ product }) => {
    const navigate = useNavigate();

    const showProductInfo = async () => {
        const prod = await getProduct(product._id);
        console.log(`product card: ${prod._id}`);
        // console.log(prod);
        navigate("/product", { state: { product: prod } });
    };
    return (
        <div className="product_card_group">
            <div className="product_card_inner">
                <img className="product_card_image" src={product.picture} />
                <div className="product_card_body">
                    <div className="product_card_top_body">
                        <div className="product_card_body_text">
                            <h1 className="product_card_body_text_title">{product.name}</h1>
                            <h1 className="product_card_body_text_owner">{`by Ashad Nadeem`}</h1>
                        </div>
                        <FavButton productID={product._id} />
                    </div>
                    <h1 className="product_card_body_text_price">{"$ " + product.price}</h1>
                </div>
            </div>
            <div className="product_card_view_button">
                <RectangleButton text={"View"} onPress={showProductInfo} />
            </div>
        </div>
    );
}

export default ProductCard;