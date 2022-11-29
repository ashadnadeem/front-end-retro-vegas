import React, { FC} from "react"
import RegisterForm from "../../components/Forms/RegisterForm";
import Sidebar from "../../components/Images/Sidebar";
import InputField from "../../components/TextFields";
import './styles.css';

const RegisterScreen: FC = () => {
    return (
        <>
            <div className="register_page_group">
                <Sidebar />
                <RegisterForm />
            </div>
        </>
    );
}

export default RegisterScreen;