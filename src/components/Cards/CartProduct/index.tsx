import { Divider } from "@mui/material";
import React from "react";
import { FC } from "react";
import BackButton from "../../Buttons/BackButton";
import { DefaultHeader } from "../../Headers/DefaultHeader";
import './styles.css';

    const CartProduct: FC= () => {
    return(
        <>
            <div className="cart_product_content">
                <div>
                    <img className="cart_product_image" src={require('../../../assets/productImage.png')} />
                </div>

                <div>
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
            </div>
            {/* <div>
            <img className="cart_product_image2" src={require('../../assets/Line.png')} />     
            </div> */}
        </>
    )
    
}

export default CartProduct;
