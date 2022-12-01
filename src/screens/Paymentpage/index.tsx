import { Divider } from "@mui/material";
import React, { FC} from "react"
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import CartProduct from "../../components/Cards/CartProduct";
import CheckoutCartProduct from "../../components/Cards/CheckoutCartProduct";
import CheckoutCart from "../../components/Containers/CheckoutCart";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import LoginForm from "../../components/Forms/LoginForm";
import PaymentForm from "../../components/Forms/PaymentForm";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import InputField from "../../components/TextFields";
import './styles.css';

const PaymentScreen: FC = () => {
    return (
        <>
            <div className="checkout_page">
                <div className="checkout_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="checkout_page_back_icon">
                    <BackButton />
                </div>

                <div className="checkout_page_content">
                    <PaymentForm/>
                    <CheckoutCart/>
                </div>
            </div>
        </>
    );
}

export default PaymentScreen;