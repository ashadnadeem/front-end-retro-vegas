import { FilterAlt } from "@mui/icons-material";
import React, { FC } from "react";

import "./styles.css";

type Props = {
    onPress(): void;
}

const FilterButton: FC<Props> = ({ onPress }) => {
    return(
        <button className={"filter_button_group"} onClick={onPress}>
            <FilterAlt className="filter_button_icon" />
            <label className={"filter_button_text"}>{"Filter"}</label>
        </button>
    );
}

export default FilterButton;
