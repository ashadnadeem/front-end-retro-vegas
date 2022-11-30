import React, { FC } from "react";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import { Product } from "../../models/product_model";
import './styles.css';

const ProductDesc: FC<Product> = (prod) => {
    return (
        <>
            <div className="desc_page">
                <div className="desc_content">
                    <h1 className="desc_title"> {prod.name} </h1>
                    <div className="desc_description"> {prod.description}</div>
                    <div className="desc_collection"> Collection: Collectibles </div>
                    <div className="desc_price"> $ {prod.price} </div>
                    <div className="desc_description2">Highest Bid: $ 9.99</div>
                    <div className="desc_button">
                        <WhiteRectangleArrowButton text="Add to Cart" onPress={() => { }} ></WhiteRectangleArrowButton>
                    </div>
                    <div className="desc_button">
                        <RectangleArrowButton text="Bid on it" invert={false} onPress={() => { }} ></RectangleArrowButton>
                    </div>
                </div>
            </div>
        </>

    );
}
export default ProductDesc;