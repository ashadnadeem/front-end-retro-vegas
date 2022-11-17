import React, { FC } from "react";

import "./styles.css";

type Props = {
    image: string;
    stats: number;
    text: string;
}

const StatContainer: FC<Props> = ({image, stats, text}) => {
    
    return(
        <div className="oneStats">
            <img className="stat-icon" src={image} />
            <label className="stat">{stats}</label>
            <label className="stat-text">{text}</label>
        </div>
    );
}

export default StatContainer;