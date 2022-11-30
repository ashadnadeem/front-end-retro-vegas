import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { WhiteRectangleArrowButton } from "../../components/Buttons/WhiteRectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import ProductDesc from "../../components/ProductDescription";
import ProductSection from "../../components/ProductSection/productsection";
import { Product } from "../../models/product_model";
import './styles.css';



const ProductScreen: FC = () => {
    const { state } = useLocation();

    return (
        <>
            <div className="product_page_group">
                <div className="product_page_header">
                    <DefaultHeader inverted={true} /> </div>

                <ProductDesc _id={state.product.id} name={state.product.name} price={state.product.price}
                    picture={state.product.picture} storeID={state.product.storeID} categoryID={state.product.categoryID}
                    description={state.product.description} />

                <ProductSection _id={state.product.id} name={state.product.name} price={state.product.price}
                    picture={state.product.picture} storeID={state.product.storeID} categoryID={state.product.categoryID}
                    description={state.product.description} />
            </div>
        </>

    );
}
export default ProductScreen;