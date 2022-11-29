import React, { FC} from "react"
import { RectangleArrowButton } from "../../components/Buttons/RectangleButton";
import { DefaultHeader } from "../../components/Headers/DefaultHeader";
import SearchBar from "../../components/SearchBar";
import './styles.css';

const AboutScreen: FC = () => {
    const desc:String = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
    return (
        <>
            <div className="about_page_group">
                <div className="about_page_elipses_1"></div>
                <div className="about_page_elipses_2"></div>
                <div className="about_page_header">
                    <DefaultHeader inverted={true}/>
                </div>
                <div className="about_page_content">
                    <h1 className="about_page_greet_text">What is Retro Vegas?</h1>
                    <div className="about_page_description">
                        <h1 className="about_page_para">{desc}</h1>
                        <h1 className="about_page_para">{desc}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutScreen;