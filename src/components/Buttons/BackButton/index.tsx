import React, { FC } from "react";
import "./syles.css";

type Props = {
    onPress(): void;
}

const BackButton: FC<Props> = ({ onPress }) => {
    return(
        <img src={require('../../../assets/icons/back_arrow.png')} alt= "back" 
            className= "back" onClick={onPress}/>
    );
}

export default BackButton;