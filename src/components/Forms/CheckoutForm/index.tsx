import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../Text/PageHeader";
import InputField from "../../TextFields";
import "./styles.css";

type Props = {
}

const CheckoutForm: FC<Props> = ({}) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [phoneNum, setPhoneNum] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");

    
    return(
        <div className="checkout_form_group">
            <PageHeader text="Checkout" />
            <text className="checkout_form_title">Shipping Address</text>
            <div className="checkout_form_textfields">
                <InputField title="Name" placeHolder="" text={name} setText={setName} />
                <InputField title="email" placeHolder="" text={email} setText={setEmail} />
                <InputField title="Address" placeHolder="" text={address} setText={setAddress} />
                <div className="checkout_form_textfields_row">
                    <InputField title="City" placeHolder="" text={city} setText={setCity} />
                    <InputField title="Postal Code" placeHolder="" text={postalCode} setText={setPostalCode} />
                </div>                     
                <InputField title="Contact No." placeHolder="" text={phoneNum} setText={setPhoneNum} />
            </div>     
        </div>
    );
}

export default CheckoutForm;