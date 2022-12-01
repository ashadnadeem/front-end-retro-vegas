import React, { useEffect, useState } from "react";
import { FC } from "react";
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import CartProduct from "../../components/Cards/CartProduct";
import './styles.css';
import { useNavigate, useLocation } from "react-router-dom";
import { getProduct } from "../../api_calls/product";
import { Product } from "../../models/product_model";
import { Customer } from "../../models/user_model";

const CartScreen: FC = () => {
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
        return subTotal + "";
    }
    const removeProduct = (productID: String) => {
        const newCart = cart.filter((product: Product) => product._id !== productID);
        setCart(newCart);
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
        <>
            <div className="cart_screen">
                <div className="cart_screen_header">
                    <DefaultHeader inverted={true} />
                </div>
                <div className="cart_screen_content">
                    <div className="cart_screen_back_icon"><BackButton /></div>
                    <div className="cart_screen_title">Your Cart</div>
                    <div className="cart_screen_products">
                        {cart.map((product: Product) => (
                            <div className="cart_screen_product">
                                <CartProduct product={product} updateCart={removeProduct} />
                            </div>
                        ))}
                    </div>
                    <div className="cart_screen_footer">
                        <div>
                            <div className="cart_screen_subtotal">{`Subtotal $` + calculateSubTotal()}</div>
                            <div className="cart_screen_description">Shipping calculated at checkout</div>
                        </div>
                        <div className="cart_screen_button">
                            <RectangleArrowButton text={"Check out"} onPress={Navigate} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default CartScreen;
