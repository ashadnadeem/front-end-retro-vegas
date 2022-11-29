import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavButton from "../../Buttons/FavouritButton";
import { RectangleButton } from "../../Buttons/RectangleButton";

import "./styles.css";

type Props = {
    index: number;
    title: string;
    image: string;
}

const ProductCard: FC<Props> = ({index, title, image }) => {
    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(false);
    const markfavourite= () => {
        setIsFav(!isFav);
    };
    const showProductInfo = () => {
        console.log("show product info");
        // navigate to /product with id=5
        navigate("/product", { state: {product_id: index } });
    };
    return(
        <div className="product_card_group">
            <div className="product_card_inner">
                <img className="product_card_image" src={image}/>
                <div className="product_card_body">
                    <div className="product_card_top_body">
                        <div className="product_card_body_text">
                            <h1 className="product_card_body_text_title">{title}</h1>
                            <h1 className="product_card_body_text_owner">{"by " + "Ashad Nadeem"}</h1>
                        </div>
                        <FavButton isFav={isFav} onPress={markfavourite}/>
                    </div>
                    <h1 className="product_card_body_text_price">{"$ " + "9.99"}</h1>
                </div>
            </div>
            <div className="product_card_view_button">
                <RectangleButton text={"View"} onPress={showProductInfo}/>
            </div>
        </div>
    );
}

export default ProductCard;