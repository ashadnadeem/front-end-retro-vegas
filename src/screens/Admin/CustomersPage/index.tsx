import React, { FC} from "react"
import BackButton from "../../../components/Buttons/BackButton";
import AdminCustomerContainer from "../../../components/Containers/AdminCustomerContainer";
import { AdminHeader } from "../../../components/Headers/AdminHeader";
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
                        <AdminCustomerContainer/>
                        <AdminCustomerContainer/>
                    </div>    
                </div>
            </div>
        </>
    );
}

export default AdminCustomersScreen;