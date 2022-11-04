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

const LoginForm: FC<Props> = ({}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    //Social Login function
    const socialLogin = () => {
        console.log("Social Login coming soon");
    }
    
    return(
        <div className="login_form">
            <PageHeader text="Sign In" />
            <div className="form">
                <InputField title="Email" placeHolder="" text={email} setText={setEmail} />
                <br></br>
                <InputField title="Password" placeHolder="" text={password} setText={setPassword} />
            </div>
            <br></br>
            <RectangleArrowButton text="Sign In" onPress={() => {console.log("print")}} />
            <TextLink text="Don't have an account? " hyperText="Sign up" onClick={() => {console.log("login page")}} />
            <OrSeperator />
            <GroupSocialButons text="Sign in with" google={socialLogin} facebook={socialLogin} instagram={socialLogin} />       
        </div>
    );
}

export default LoginForm;