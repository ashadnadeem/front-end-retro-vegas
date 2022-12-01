import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RectangleArrowButton } from "../../Buttons/RectangleButton";
import GroupSocialButons from "../../Buttons/SocialButtons";
import OrSeperator from "../../Seperators/OrSeperator";
import PageHeader from "../../Text/PageHeader";
import TextLink from "../../Text/TextLink";
import InputField from "../../TextFields";
import "./styles.css";
import { registerCall } from "../../../api_calls/auth";
import { Alert, Snackbar } from "@mui/material";
import { getCustomer } from "../../../api_calls/customer";
import { getStore } from "../../../api_calls/store";

type Props = {
}

const RegisterForm: FC<Props> = ({ }) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNum, setPhoneNum] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [response, setResponse] = React.useState("");
    const navigate = useNavigate();


    //Social Login function
    const socialLogin = () => {
        console.log("Social Login coming soon");
    }

    const register = async () => {
        const response = await registerCall(email, password, name, phoneNum);
        if (response != "") {
            setEmail("");
            setPassword("");
            setName("");
            setPhoneNum("");
            setResponse(response);
        } else {
            // load customer data
            await getCustomer();
            // load store data
            await getStore();
            navigate('/');
        }
    }

    return (
        <div className="register_form_group">
            <Snackbar open={response != ''} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: "100%" }}>
                    {response}
                </Alert>
            </Snackbar>
            <PageHeader text="Register" />
            <div className="register_form_textfields">
                <InputField title="Name" placeHolder="" text={name} setText={setName} />
                <InputField title="Email" placeHolder="" text={email} setText={setEmail} />
                <InputField title="Phone Number" placeHolder="" text={phoneNum} setText={setPhoneNum} />
                <InputField title="Password" placeHolder="" text={password} type='password' setText={setPassword} />
            </div>
            <br></br>
            <RectangleArrowButton text="Register" onPress={register} />
            <TextLink text="Already have an account? " hyperText="Login" onClick={() => { navigate('/login'); }} />
            <OrSeperator />
            <GroupSocialButons text="Sign in with" google={socialLogin} facebook={socialLogin} instagram={socialLogin} />
        </div>
    );
}

export default RegisterForm;