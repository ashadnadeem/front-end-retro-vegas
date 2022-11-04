import React, { FC } from "react";

import "./styles.css";

type Props = {
    text: string;
    google?: () => void;
    facebook?: () => void;
    instagram?: () => void;
}

type SocialButtonProps = {
    onclick?: () => void;
}

const InstagramButton: FC<SocialButtonProps> = ({onclick}) => {
    return(
        <img className="socialicon" src={require("../../../assets/icons/InstaSocial.png")} alt="Insta" onClick={onclick} />
    );
}

const GoogleButton: FC<SocialButtonProps> = ({onclick}) => {
    return(
        <img className="socialicon" src={require("../../../assets/icons/GoogleSocial.png")} alt="Google" onClick={onclick} />
    );
}

const FacebookButton: FC<SocialButtonProps> = ({onclick}) => {
    return(
        <img className="socialicon" src={require("../../../assets/icons/FacebookSocial.png")} alt="Facebook" onClick={onclick} />
    );
}

const GroupSocialButons: FC<Props> = ({text, google, facebook, instagram}) => {
    return(
        <div className="socialgroup">
            <label className="text">{text}</label>
            <div className="socialicons">
                <FacebookButton onclick={facebook} />
                <GoogleButton onclick={google}/>
                <InstagramButton onclick={instagram}/>
            </div>
        </div>
    );
}

export default GroupSocialButons;


export {InstagramButton, GoogleButton, FacebookButton};