import React, { FC} from "react"
import LoginForm from "../../components/Forms/LoginForm";
import Sidebar from "../../components/Images/Sidebar";
import InputField from "../../components/TextFields";
import './styles.css';

const LoginScreen: FC = () => {
    return (
        <>
            <div className="login_page">
                <Sidebar />
                <LoginForm />
            </div>
        </>
    );
}

export default LoginScreen;