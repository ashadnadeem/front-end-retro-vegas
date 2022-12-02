import { Alert, Divider, Snackbar, Stack } from "@mui/material";
import axios from "axios";
import React, { FC } from "react"
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../api_calls/customer";
import { updateStore } from "../../api_calls/store";
import BackButton from "../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { AdminHeader } from "../../components/Headers/AdminHeader";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import PageHeader from "../../components/Text/PageHeader";
import InputField from "../../components/TextFields";

import './styles.css';

const ProfileScreen: FC = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState((JSON.parse(localStorage.getItem('user'))).name);
    const [email, setEmail] = React.useState((JSON.parse(localStorage.getItem('user'))).email);
    const [phoneNum, setPhoneNum] = React.useState((JSON.parse(localStorage.getItem('user'))).phoneNo);
    const [address, setAddress] = React.useState((JSON.parse(localStorage.getItem('user'))).address);
    const [storename, setStoreName] = React.useState((JSON.parse(localStorage.getItem('store'))).name);
    const [response, setResponse] = React.useState("");

    const save = async () => {
        const x = await updateUser(email, name, phoneNum, address);
        const y = await updateStore(storename);
        if (x === 401 || y === 401) {
            localStorage.clear();
            navigate('/login');
        } else {
            if (x === true && y === true) {
                setResponse("Updated");
            } else {
                setResponse("Error occured.")
            }
        }
    }

    return (
        <>
            <div className="profile_page">
                <div className="profile_page_header">
                    <DefaultHeader inverted={true} />
                </div>
                <div className="profile_page_back_icon">
                    <BackButton />
                </div>

                <div className="profile_page_content">
                    <Snackbar open={response == "Updated" || response == "Error occured."}
                        autoHideDuration={6000}>
                        <Alert severity={response == "Updated" ? "success" : "error"}
                            sx={{ width: "100%" }}>
                            {response}
                        </Alert>
                    </Snackbar>

                    <PageHeader text={"Profile"} />

                    <Stack
                        direction="row"
                        divider={
                            <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2 }}
                                style={{ color: '#835F2A9E' }}
                            />}
                        spacing={10}
                    >
                        <div className="profile_page_data_container">
                            <text className="profile_page_data_container_text">Customer</text>
                            <InputField title="Name" placeHolder="" text={name} setText={setName} />
                            <InputField title="Email" placeHolder="" text={email} setText={setEmail} />
                            <InputField title="Phone Number" placeHolder="" text={phoneNum} setText={setPhoneNum} />
                            <InputField title="Address" placeHolder="" text={address} setText={setAddress} />
                        </div>
                        <div className="profile_page_data_container">
                            <text className="profile_page_data_container_text">Seller</text>
                            <InputField title="Store Name" placeHolder="" text={storename} setText={setStoreName} />

                        </div>

                    </Stack>

                    <br></br>

                    <div className="checkout_page_button">
                        <RectangleArrowButton text="Save" onPress={save} />
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProfileScreen;