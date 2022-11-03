import React, { FC } from "react";


import "./syles.css";

type Props = {
    onPress(): void;
}

const BackButton: FC<Props> = ({ onPress }) => {
    return(
        <button className='backIcon' onClick={onPress} >
            <img src={require('../../assets/icons/back-arrow.png')} />
        </button>
    );
}

export default BackButton;