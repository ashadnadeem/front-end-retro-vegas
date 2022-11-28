import { FilterAlt } from "@mui/icons-material";
import React, { FC } from "react";

import "./styles.css";

type Props = {
    onPress(): void;
}

const FilterButton: FC<Props> = ({ onPress }) => {
    return(
        <button className={"filterbuttongroup"} onClick={onPress}>
            <FilterAlt className="buttonicon" />
            <label className={"buttontext"}>{"Filter"}</label>
        </button>
    );
}

export default FilterButton;
