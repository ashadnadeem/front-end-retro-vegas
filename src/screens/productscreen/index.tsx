import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import ProductDesc from "../../components/ProductDescription";
import ProductSection from "../../components/ProductSection/productsection";
import { Product } from "../../models/product_model";
import './styles.css';



const ProductScreen: FC = () => {
    // const { state } = useLocation();
    // console.log(state.product);
    const product: Product = useLocation().state.product;
    return (
        <>
            <div className="product_page_group">
                <div className="product_page_header"><DefaultHeader inverted={true} /></div>
                <div className="product_page_backbutton">
                    <BackButton />
                </div>
                <ProductDesc prod={product} />
                <ProductSection prod={product} />
            </div>
        </>

    );
}
export default ProductScreen;