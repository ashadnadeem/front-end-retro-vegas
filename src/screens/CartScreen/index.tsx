import React from "react";
import { FC } from "react";
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import CartProduct from "../../components/Cards/CartProduct";
import './styles.css';
import { useNavigate } from "react-router-dom";

const CartScreen: FC= () => {
 const navigate = useNavigate();

 const Navigate = () => {
    navigate('/checkout');
 }

    return(
        <>
        <div className="cart_screen">
            <div className="cart_screen_header">
                <DefaultHeader inverted = {true}/>
            </div>
            <div className="cart_screen_content">
                <div className="cart_screen_back_icon">
                    <BackButton/>
                </div>
                <div className="cart_screen_title">
                   Your Cart
                </div>

                <div className="cart_screen_products">
                    <div className="cart_screen_product">
                        <CartProduct/>
                    </div>
                    <div className="cart_screen_product">
                        <CartProduct/>
                    </div>
                    <div className="cart_screen_product">
                        <CartProduct/>
                    </div>
                </div>
                

                <div className="cart_screen_subtotal">
                    Subtotal $18.74
                </div>
                <div className="cart_screen_description">
                    Shipping calculated at checkout
                </div>
                <div className="cart_screen_button">
                    <RectangleArrowButton text={"Check out"} onPress={Navigate} />              

               </div>
        </div>
        </div>

        </>
    )
    
}

export default CartScreen;
