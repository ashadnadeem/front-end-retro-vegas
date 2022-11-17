import React, { FC} from "react"
import BackButton from "../../../components/Buttons/BackButton";
import { RectangleButton } from "../../../components/Buttons/RectangleButton";
import { AdminHeader } from "../../../components/Headers/AdminHeader";
import NamedText from "../../../components/Text/NamedText";
import PageHeader from "../../../components/Text/PageHeader";

import './styles.css';

const AdminCustomersScreen: FC = () => {
    return (
        <>
            <div className="page">
                <AdminHeader/>
                <div className="content">
                    <BackButton onPress={function (): void {} }/>
                    <div className="customer-data">
                        <PageHeader text={"Customers"}/>
                        <div className="one-customer-data">
                            <div className="left-data">
                                <label className="name">Maheen Sabahat</label>
                                <NamedText name="ID" value="12345"/>
                                <NamedText name="Email" value="maheen@gmail.com"/>
                                <NamedText name="Phone" value="0300 0000000"/>

                            </div>
                            <div>
                                <NamedText name="Status" value="inactive"/>
                                <RectangleButton text="Delete" onPress={function (): void {} }/>
                            </div>
                            
                        </div>
                    </div>    
                </div>
            </div>
        </>
    );
}

export default AdminCustomersScreen;