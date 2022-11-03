import React, { FC } from "react";
import {RectangleArrowButton} from "../../Buttons/RectangleButton";
import GroupSocialButons from "../../Buttons/SocialButtons";
import OrSeperator from "../../Seperators/OrSeperator";
import PageHeader from "../../Text/PageHeader";
import TextLink from "../../Text/TextLink";
import InputField from "../../TextFields";

import "./styles.css";
type Props = {
}

const RegisterForm: FC<Props> = ({}) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNum, setPhoneNum] = React.useState("");
    const [password, setPassword] = React.useState("");
    return(
        <div className="register_form">
            <PageHeader text="Register" />
            <div className="form">
                <InputField title="Name" placeHolder="" text={name} setText={setName} />
                <InputField title="Email" placeHolder="" text={email} setText={setEmail} />
                <InputField title="Phone Number" placeHolder="" text={phoneNum} setText={setPhoneNum} />
                <InputField title="Password" placeHolder="" text={password} setText={setPassword} />
            </div>
            <br></br>
            <RectangleArrowButton text="Register" onPress={() => {console.log("print")}} />
            <TextLink text="Already have an account? " hyperText="Login" onClick={() => {console.log("login page")}} />
            <OrSeperator />   
            <GroupSocialButons />       
        </div>
    );
}

export default RegisterForm;