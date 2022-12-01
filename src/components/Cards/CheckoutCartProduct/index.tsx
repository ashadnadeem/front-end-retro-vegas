import React from "react";
import { FC } from "react";
import './styles.css';

const CheckoutCartProduct: FC= () => {
    return(
        <>
            <div className="checkout_cart_product_content">
                <div>
                    <img className="checkout_cart_product_image" src={require('../../../assets/productImage.png')} />
                </div>

                <div>
                    <div className="checkout_cart_product_title">
                        Five Rupee Note
                    </div>

                    <div className="checkout_cart_product_collection">
                        Collection: Collectibles
                    </div>

                    <div className="checkout_cart_product_seller">
                        Ashad Nadeem
                    </div>

                    <div className="checkout_cart_product_price">
                        $9.99
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default CheckoutCartProduct;
