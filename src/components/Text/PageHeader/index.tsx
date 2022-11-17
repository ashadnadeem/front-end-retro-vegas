import React, { FC } from "react";


import "./styles.css";

type Props = {
    text: string;
}

const PageHeader: FC<Props> = ({ text }) => {
    return(
        <label className="header">{text}</label>
    );
}

export default PageHeader;