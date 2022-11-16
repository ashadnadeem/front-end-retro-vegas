import React, { FC} from "react"
import LoginForm from "../../components/Forms/LoginForm";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import Sidebar from "../../components/Images/Sidebar";
import InputField from "../../components/TextFields";
import './styles.css';

const HomePageScreen: FC = () => {
    return (
        <>
            <div className="page">
                <DefaultHeader />
                {/* <img className="sidebar" src={require('../../assets/background.png')} /> */}
            </div>
        </>
    );
}

export default HomePageScreen;