import React, { FC} from "react"
import { AdminHeader } from "../../components/Headers/AdminHeader";
import './styles.css';

const AdminScreen: FC = () => {
    return (
        <>
            <div className="page">
                <AdminHeader/>
                <div className="content">
                    <label className="title">Retro Vegas</label>
                    <div className="statsPanel">

                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminScreen;