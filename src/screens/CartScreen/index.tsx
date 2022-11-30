import React from "react";
import { FC } from "react";
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import ProductCard from "../../components/Cards/ProductCard";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import CartProduct from "../CartProduct";
import './styles.css';

    const CartScreen: FC= () => {
    return(
        <>
        <div >
            <div className="cart_Screen_header">
                <DefaultHeader inverted = {true}/>
            </div>
            <div className="cart_screen_content">
                <div className="cart_screen_back_icon">
                    <BackButton/>
                </div>
                <div className="cart_screen_title">
                   Your Cart
                </div>
                <div className="cart_screen_product">
                    <CartProduct/>
                </div>
                <div className="cart_screen_product">
                    <CartProduct/>
                </div>

                <div className="cart_screen_subtotal">
                    Subtotal $18.74
                </div>
                <div className="cart_screen_description">
                    Shipping calculated at checkout
                </div>
                <div className="cart_screen_button">
                    <RectangleArrowButton text={"Check out"} onPress={function (): void {
                            throw new Error("Function not implemented.");
                        } } />              

               </div>
        </div>
        </div>

        </>
    )
    
}

export default CartScreen;
