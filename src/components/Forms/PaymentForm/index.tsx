import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../Text/PageHeader";
import InputField from "../../TextFields";
import "./styles.css";

type Props = {
}

const PaymentForm: FC<Props> = ({}) => {
    const [card, setCard] = React.useState("");
    const [expiryDate, setExpiryDate] = React.useState("");
    const [expiryYear, setExpiryYear] = React.useState("");
    const [cvc, setCVC] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    const [isCOD, setIsCOD ] = React.useState(true);
    const [isSameAdd, setIsSameAdd ] = React.useState(true);


    
    return(
        <div className="payment_form_group">
            <PageHeader text="Checkout" />
            <text className="payment_form_title">Payment</text>
            <div className="payment_form_textfields">

            <FormControl>
                <FormLabel id="payment_methods"></FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="COD"
                    name="radio-buttons-group">
                    <FormControlLabel value="COD" control={
                        <Radio sx={{color: '#000000', '& .MuiSvgIcon-root': {fontSize: 16, color: '#000000',}}}
                            onChange = {() => setIsCOD(false)}
                        />} 
                            label="Cash on Delivery" />
                    <FormControlLabel value="CC" control={
                        <Radio sx={{color: '#000000', '& .MuiSvgIcon-root': {fontSize: 16, color: '#000000'},}}
                            onChange = {() => setIsCOD(true)}
                         />} 
                            label="Credit Card" />
                </RadioGroup>
            </FormControl>

           {isCOD ? 
                <div>
                    <InputField title="Card Number" placeHolder="" text={card} setText={setCard} />
                    <div className="payment_form_textfields_row">
                        <InputField title="Expiry Date" placeHolder="" text={expiryDate} setText={setExpiryDate} />
                        <InputField title="Year" placeHolder="" text={expiryYear} setText={setExpiryYear} />
                        <InputField title="CVC" placeHolder="" text={postalCode} setText={setCVC} />
                    </div>
                </div>: <></> } 
                

            <text className="payment_form_title">Billing Address</text>
                <FormControl>
                <FormLabel id="payment_methods"></FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="Same"
                    name="radio-buttons-group">
                    <FormControlLabel value="Same" control={
                        <Radio sx={{color: '#000000', '& .MuiSvgIcon-root': {fontSize: 16, color: '#000000',}}}
                            onChange = {() => setIsSameAdd(false)}
                        />} 
                            label="Same as shipping address" />
                    <FormControlLabel value="different" control={
                        <Radio sx={{color: '#000000', '& .MuiSvgIcon-root': {fontSize: 16, color: '#000000'},}}
                            onChange = {() => setIsSameAdd(true)}
                         />} 
                            label="Use a different billing address" />
                </RadioGroup>
            </FormControl>

            {isSameAdd ? 
                <div>
                    <InputField title="Card Number" placeHolder="" text={card} setText={setCard} />
                    <div className="payment_form_textfields_row">
                    <InputField title="City" placeHolder="" text={city} setText={setCity} />
                    <InputField title="Postal Code" placeHolder="" text={postalCode} setText={setPostalCode} />
                    </div>
                </div>: <></> } 
                               
            </div>     
        </div>
    );
}

export default PaymentForm;