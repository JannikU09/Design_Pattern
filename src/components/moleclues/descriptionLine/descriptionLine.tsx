import "./descriptionLine.css";
import { UserName } from "../../atoms/userName/userName";
import { Description } from "../../atoms/description/description";

export const DescriptionLine = () => {
    return (
        <div className="descriptionLine">
            <UserName name="innFactory" />
            &nbsp;
            <Description text="Hello this is a very intersting text." />
        </div>
    )
}