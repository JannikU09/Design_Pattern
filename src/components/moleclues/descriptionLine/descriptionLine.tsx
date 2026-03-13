import "./descriptionLine.css";
import "../../atoms/userName/userName.css";
import { UserName } from "../../atoms/userName/userName";
import { Description } from "../../atoms/description/description";

export const DescriptionLine = () => {
    return (
        <div className="descriptionLine">
            <div>
                <p>
                    <UserName name="innFactory" />
                    &nbsp;
                    <Description text="Hello, this is the most interesting text you will ever read." />
                </p>
            </div>
        </div>
    )
}
