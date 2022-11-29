import React, { FC } from "react";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import './styles.css';


const ProductDesc: FC = () => {
    return (
        <>
            <div className="desc_page">
                <div className="desc_content">
                    <h1 className="desc_title">  Five Rupee Note</h1>
                    <div className="desc_description"> Product desc: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                    <div className="desc_collection"> Collection: Collectibles </div>
                    <div className="desc_price"> $9.99 </div>
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