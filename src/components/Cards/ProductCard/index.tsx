import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../../api_calls/product";
import { Product } from "../../../models/product_model";
import FavButton from "../../Buttons/FavouritButton";
import { RectangleButton } from "../../Buttons/RectangleButton";

import "./styles.css";

type Props = {
    index: number;
    title: string;
    image: string;
}

const ProductCard: FC<Product> = (product) => {
    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(false);
    const markfavourite= () => {
        setIsFav(!isFav);
    };


    const showProductInfo = async() => {
        await getProduct(product._id);
        console.log("products fetched :)");
        navigate("/product", { state: {product: localStorage.getItem(product.name)}});

    };

    return(
        <div className="product_card_group">
            <div className="product_card_inner">
                <img className="product_card_image" src={product.picture}/>
                <div className="product_card_body">
                    <div className="product_card_top_body">
                        <div className="product_card_body_text">
                            <h1 className="product_card_body_text_title">{product.name}</h1>
                            <h1 className="product_card_body_text_owner">{"by " + "Ashad Nadeem"}</h1>
                        </div>
                        <FavButton isFav={isFav} onPress={markfavourite}/>
                    </div>
                    <h1 className="product_card_body_text_price">{"$ " + product.price}</h1>
                </div>
            </div>
            <div className="product_card_view_button">
                <RectangleButton text={"View"} onPress={showProductInfo}/>
            </div>
        </div>
    );
}

export default ProductCard;