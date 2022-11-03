import React, { FC } from "react";

import "./styles.css";

type Props = {
}

const InstagramButton: FC<Props> = ({}) => {
    return(
        <img className="socialicon" src={require("../../../assets/icons/InstaSocial.png")} alt="Insta" />
    );
}

const GoogleButton: FC<Props> = ({}) => {
    return(
        <img className="socialicon" src={require("../../../assets/icons/GoogleSocial.png")} alt="Google" />
    );
}

const FacebookButton: FC<Props> = ({}) => {
    return(
        <img className="socialicon" src={require("../../../assets/icons/FacebookSocial.png")} alt="Facebook" />
    );
}

const GroupSocialButons: FC<Props> = ({}) => {
    return(
        <div className="socialgroup">
            <FacebookButton />
            <GoogleButton />
            <InstagramButton />
        </div>
    );
}

export default GroupSocialButons;


export {InstagramButton, GoogleButton, FacebookButton};