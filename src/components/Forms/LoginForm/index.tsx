import React, { FC } from "react";
import { RectangleArrowButton } from "../../Buttons/RectangleButton";
import GroupSocialButons from "../../Buttons/SocialButtons";
import OrSeperator from "../../Seperators/OrSeperator";
import PageHeader from "../../Text/PageHeader";
import TextLink from "../../Text/TextLink";
import InputField from "../../TextFields";
import { loginCall } from "../../../api_calls/auth";

import "./styles.css";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { getCustomer } from "../../../api_calls/customer";
import { getStore } from "../../../api_calls/store";
type Props = {};

const LoginForm: FC<Props> = ({ }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState("");
  const navigate = useNavigate();

  //Social Login function
  const socialLogin = () => {
    console.log("Social Login coming soon");
  };

  const login = async () => {
    const response = await loginCall(email, password);
    if (response != "") {
      setEmail("");
      setPassword("");
      setResponse(response);
    } else {
      // load customer data
      await getCustomer();
      // load store data
      await getStore();
      navigate('/');
    }
  };

  return (
    <div className="login_form_group">
      <Snackbar open={response != ''} onClose = {() => setResponse("")}
                        autoHideDuration={2000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          {response}
        </Alert>
      </Snackbar>
      <PageHeader text="Sign In" />
      <div className="login_form_textfields">
        <InputField
          title="Email"
          placeHolder=""
          text={email}
          setText={setEmail}
        />
        <br></br>
        <InputField
          title="Password"
          placeHolder=""
          text={password}
          type="password"
          setText={setPassword}
        />
      </div>
      <RectangleArrowButton text="Sign In" onPress={login} />
      <TextLink
        text="Don't have an account? "
        hyperText="Sign up"
        onClick={() => {
          navigate('/register');
        }}
      />
      <OrSeperator />
      <GroupSocialButons
        text="Sign in with"
        google={socialLogin}
        facebook={socialLogin}
        instagram={socialLogin}
      />
    </div>
  );
};

export default LoginForm;
