import "./template.css";
import { Middle } from "../organisms/middle/middle";
import { Footer } from "../organisms/footer/footer";
import { NavBar } from "../organisms/navBar/navBar";
import { Infoline } from "../organisms/infoline/infoline";

export const Template = () => {
    return (
        <div className="page">
            <Infoline />
            <NavBar />
            <Middle />
            <Footer />
        </div>
    )
}