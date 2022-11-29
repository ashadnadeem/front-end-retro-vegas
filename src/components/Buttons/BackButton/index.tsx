import { ArrowBack } from "@mui/icons-material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./syles.css";

type Props = {
    
}

const BackButton: FC<Props> = ({ }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return(
        <div>
            <ArrowBack fontSize="large" className="back_button_icon" onClick={goBack}/>
        </div>
    );
}

export default BackButton;