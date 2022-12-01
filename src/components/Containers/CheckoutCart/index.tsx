import React, { FC} from "react"
import { RectangleArrowButton } from "../../Buttons/RectangleButton";
import CheckoutCartProduct from "../../Cards/CheckoutCartProduct";
import './styles.css';

const CheckoutCart: FC = () => {
    return (
        <div className="checkout_cart_group">
                        
        <div className="checkout_cart">
            <CheckoutCartProduct/>
            <CheckoutCartProduct/>
            <CheckoutCartProduct/>
        </div>

        <div className="checkout_summary_text">
            <div className="checkout_summary_total">
                <text className="checkout_total_text">Subtotal</text>
                <text className="checkout_total_text">$18.74</text>
            </div>

            <div className="checkout_summary_total">
                <text className="">Subtotal</text>
                <text className="">$18.74</text>
            </div>

        </div>

        <div className="checkout_summary_text_2">
            <div className="checkout_summary_total">
                <text className="checkout_total_text">Total</text>
                <text className="checkout_total_text">$18.74</text>
            </div>
        </div>
        
        <div className="checkout_page_button">
            <RectangleArrowButton text={"Payment"} onPress={() => {}}/>
        </div>
        
    </div>
    );
}

export default CheckoutCart;