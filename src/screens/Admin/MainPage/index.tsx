import React, { FC} from "react"
import StatContainer from "../../../components/Containers/StatsContainer";
import { AdminHeader } from "../../../components/Headers/AdminHeader";

import './styles.css';
const AdminScreen: FC = () => {
    return (
        <>
            <div className="page">
                <AdminHeader/>
                <div className="content">
                    <label className="title">Retro Vegas</label>
                    <div className="statsPanel">
                        <StatContainer image={require("../../assets/icons/users.png")} stats={500} text={"new users"}/>
                        <StatContainer image={require("../../assets/icons/sales.png")} stats={500} text={"new users"}/>
                        <StatContainer image={require("../../assets/icons/auction.png")} stats={500} text={"new users"}/>
                    </div>

                    <div className="buttonsPanel">
                        <div className="button">
                            <label className="button-text">Customers</label>
                            <label className="button-text2">500</label>
                            <label className="button-text3">View All</label>

                        </div>
                        <div className="button">
                            
                        </div>
                        <div className="button">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminScreen;