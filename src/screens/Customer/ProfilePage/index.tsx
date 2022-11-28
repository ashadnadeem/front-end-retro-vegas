import { Divider, Stack } from "@mui/material";
import axios from "axios";
import React, { FC} from "react"
import BackButton from "../../../components/Buttons/BackButton";
import { RectangleArrowButton } from "../../../components/Buttons/RectangleButton";
import { AdminHeader } from "../../../components/Headers/AdminHeader";
import PageHeader from "../../../components/Text/PageHeader";
import InputField from "../../../components/TextFields";

import './styles.css';

const CustomerProfileScreen: FC = () => {
    const [name, setName] = React.useState((JSON.parse(localStorage.getItem('user'))).name);
    const [email, setEmail] = React.useState((JSON.parse(localStorage.getItem('user'))).email);
    const [phoneNum, setPhoneNum] = React.useState((JSON.parse(localStorage.getItem('user'))).phoneNo);

    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
    };

    const save = () => {
        
        const user = JSON.parse(localStorage.getItem('user'));
        
        axios.put('http://localhost:5000/user/' + user._id, {
            email: email,
            name: name,
            phoneNo: phoneNum,
            password: user.password,
            role: user.role,
            status: user.status,
            address: user.address,
        }, config).then((response) => {
          console.log(response.data);
        });
    }

    return (
        <>
            <div className="page">
                <AdminHeader/>
                <div className="content">
                    <BackButton onPress={function (): void {} }/>
                    <div className="profile-data">
                        <PageHeader text={"Profile"}/>

                        <Stack
                            direction="row"
                            divider={
                                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2 }}
                                style= {{color: '#835F2A9E'}}
                                />}
                            spacing={10}
                        >
                            <div className="container">
                                <InputField title="Name" placeHolder="" text={name} setText={setName} />
                                <InputField title="Email" placeHolder="" text={email} setText={setEmail} />
                                <InputField title="Phone Number" placeHolder="" text={phoneNum} setText={setPhoneNum} />
                            </div>
                            <div className="container">
                                <InputField title="Name" placeHolder="" text={name} setText={setName} />
                                <InputField title="Email" placeHolder="" text={email} setText={setEmail} />
                                <InputField title="Phone Number" placeHolder="" text={phoneNum} setText={setPhoneNum} />
                            </div>
                            
                        </Stack>

                        

                       
                        <br></br>
                        <RectangleArrowButton text="Save" onPress={save} />

                    </div>    
                </div>
            </div>
        </>
    );
}

export default CustomerProfileScreen;