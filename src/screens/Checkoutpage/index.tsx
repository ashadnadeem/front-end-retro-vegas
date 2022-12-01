import { Divider } from "@mui/material";
import React, { FC} from "react"
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import LoginForm from "../../components/Forms/LoginForm";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import InputField from "../../components/TextFields";
import './styles.css';

const CheckoutScreen: FC = () => {
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
                    <CheckoutForm/>

                    <div className="checkout_cart_group">
                        
                        <div className="checkout_cart">
                        
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

                </div>
            </div>
        </>
    );
}

export default CheckoutScreen;