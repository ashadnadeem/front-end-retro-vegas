import { ArrowBack } from "@mui/icons-material";
import React, { FC } from "react";
import "./syles.css";

type Props = {
    onPress(): void;
}

const BackButton: FC<Props> = ({ onPress }) => {
    return(
        <div>
            <ArrowBack color={"inherit"} className="icon" onClick={onPress}/>
        </div>
    );
}

export default BackButton;