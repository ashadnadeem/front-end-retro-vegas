import React, { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../../api_calls/product";
import { Product } from "../../../models/product_model";
import { Customer } from "../../../models/user_model";
import { RectangleArrowButton } from "../../Buttons/RectangleButton";
import CheckoutCartProduct from "../../Cards/CheckoutCartProduct";
import './styles.css';

const CheckoutCart: FC = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const Navigate = () => {
        navigate('/checkout');
    }
    const calculateSubTotal = () => {
        let subTotal = 0;
        cart.forEach((product: Product) => {
            subTotal += product.price;
        });
        return Math.round(subTotal * 100) / 100;
    }
    const calculateTotal = () => {
        let Total = 10;
        Total += calculateSubTotal();
        return Math.round(Total * 100) / 100;
    }

    useEffect(() => {
        // get cart from local storage
        const customer: Customer = JSON.parse(localStorage.getItem('customer') || '{}');
        const prod_IDs = customer.cart;
        // console.log(`product fetched to cart: ${prod_IDs.length}`);
        // API CALL TO GET PRODUCTS
        prod_IDs.forEach(async (id: string) => {
            // API CALL TO GET PRODUCT
            const product = await getProduct(id);
            setCart((cart) => [...cart, product]);
        });
        console.log(cart);
    }, []);

    return (
        <div className="checkout_cart_group">

            <div className="checkout_cart">
                {cart.map((product: Product) => (
                    <div className="cart_screen_product">
                        <CheckoutCartProduct product={product} />
                    </div>
                ))}
            </div>

            <div className="checkout_summary_text">
                <div className="checkout_summary_total">
                    <text className="checkout_total_text">Subtotal $</text>
                    <text className="checkout_total_text">{calculateSubTotal()}</text>
                </div>

                <div className="checkout_summary_total">
                    <text className="">Shipping</text>
                    <text className="">$10</text>
                </div>

            </div>

            <div className="checkout_summary_text_2">
                <div className="checkout_summary_total">
                    <text className="checkout_total_text">Total</text>
                    <text className="checkout_total_text">{calculateTotal()}</text>
                </div>
            </div>

            <div className="checkout_page_button">
                <RectangleArrowButton text={"Payment"} onPress={() => { }} />
            </div>

        </div>
    );
}

export default CheckoutCart;