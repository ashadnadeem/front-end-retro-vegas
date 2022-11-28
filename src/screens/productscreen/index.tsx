import React, { FC } from "react";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import ProductDesc from "../../components/ProductDescription";
import ProductSection from "../../components/ProductSection/productsection";
import './styles.css';


const ProductScreen: FC = () => {
    return (
        <>
            <div className="page">
                <div className="header">
                    <DefaultHeader inverted={true} /> </div>
                    <ProductDesc/>
                    <ProductSection/>

                {/* <div className="content">
                    <h1 className="title">  Five Rupee Note</h1>
                    <div className="description"> Product desc: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                    <div className="collection"> Collection: Collectibles </div>
                    <div className="price"> $9.99 </div>
                    <div className="description2">Highest Bid: $ 9.99</div>
                    <div className="button">
                        <WhiteRectangleArrowButton text="Add to Cart" onPress={() => { }} ></WhiteRectangleArrowButton>
                    </div>
                    <div className="button">
                        <RectangleArrowButton text="Bid on it" invert={false} onPress={() => { }} ></RectangleArrowButton>
                    </div>
                </div> */}
            </div>
        </>

    );
}
export default ProductScreen;