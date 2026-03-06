import { Button } from "../../atoms/button/button";
import { Img } from "../../atoms/img/img";
import { InputFeld } from "../../atoms/inputFeld/inputFeld";
import { Title } from "../../atoms/title/title";
import "./com.css";

export const Com = () => {
    return (
        <div className="com">
            <Title title="Das ist eine Überschrift" size="headline" />
            <Title title="Das ist eine Unterüberschrift" size="subheadline" />
            <Img height={150} width={150}/>
            <InputFeld />
            <Button />
        </div>
    )
}