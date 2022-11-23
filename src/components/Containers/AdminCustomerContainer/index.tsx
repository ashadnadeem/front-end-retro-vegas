import React, { FC } from "react";
import { RectangleButton } from "../../Buttons/RectangleButton";
import NamedText from "../../Text/NamedText";

import "./styles.css";

type Props = {
   
}

const AdminCustomerContainer: FC<Props> = ({}) => {
    
    return(
        <div className="one-customer-data">
            <div className="left-data">
                <label className="name">Maheen Sabahat</label>
                <NamedText name="ID" value="12345"/>
                <NamedText name="Email" value="maheen@gmail.com"/>
                <NamedText name="Phone" value="0300 0000000"/>
              </div>
            <div className="right-data">
                <NamedText name="Status" value="inactive"/>
                <RectangleButton text="Delete User" onPress={function (): void {} }/>
            </div>
        </div>
    );
}

export default AdminCustomerContainer;