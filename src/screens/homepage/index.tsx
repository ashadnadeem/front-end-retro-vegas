import React, { FC} from "react"
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import './styles.css';

const HomePageScreen: FC = () => {
    return (
        <>
            <div className="page">
                <DefaultHeader />
                <div className="content">

                </div>
            </div>
        </>
    );
}

export default HomePageScreen;