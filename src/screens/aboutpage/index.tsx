import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const AboutScreen: FC = () => {
    const desc:String = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
    return (
        <>
            <div className="page">
                <div className="elipses1"></div>
                <div className="elipses2"></div>
                <div className="header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="content">
                    <h1 className="greet_text">What is Retro Vegas?</h1>
                    <div className="description">
                        <h1 className="para">{desc}</h1>
                        <h1 className="para">{desc}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutScreen;