import React, { FC } from "react";

import "./styles.css";

type Props = {
}

const OrSeperator: FC<Props> = ({}) => {
    return(
        <div className="seperator_or" >
            <div className="seperator_line"/>
            <p className="seperator_or_text">OR</p>
            <div className="seperator_line"/>
        </div>
    );
}

export default OrSeperator;