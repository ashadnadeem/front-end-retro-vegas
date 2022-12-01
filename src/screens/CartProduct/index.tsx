import React from "react";
import { FC } from "react";
import BackButton from "../../components/Buttons/BackButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import './styles.css';

    const CartProduct: FC= () => {
    return(
        <>
            <div className="cart_screencopy_content">
                <div>
                    <img className="cart_product_image" src={require('../../assets/productImage.png')} />
                </div>
                <div className="cart_product_title">
                    Five Rupee Note
                </div>
                <div className="cart_product_collection">
                    Collection: Collectibles
                </div>
                <div className="cart_product_seller">
                    Ashad Nadeem
                </div>
                <div className="cart_product_price">
                    $9.99
                </div>
            </div>
            <div>
            <img className="cart_product_image2" src={require('../../assets/Line.png')} />     
            </div>
        </>
    )
    
}

export default CartProduct;
