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
            <div className="product_page_group">
                <div className="product_page_header">
                    <DefaultHeader inverted={true} /> </div>
                    <ProductDesc/>
                    <ProductSection/>

            </div>
        </>

    );
}
export default ProductScreen;