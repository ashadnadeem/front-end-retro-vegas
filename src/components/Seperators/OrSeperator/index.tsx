import React, { FC } from "react";

import "./styles.css";

type Props = {
}

const OrSeperator: FC<Props> = ({}) => {
    return(
        <div className="OrSeperator" >
            <div className="line"/>
            <p className="or-text">OR</p>
            <div className="line"/>
        </div>
    );
}

export default OrSeperator;