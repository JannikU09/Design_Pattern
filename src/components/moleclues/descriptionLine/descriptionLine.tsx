import "./descriptionLine.css";
import "../../atoms/userName/userName.css";

export const DescriptionLine = () => {
    return (
        <div className="descriptionLine">
            <div>
                <p>
                    <span className="userName">innFactory </span>
                    <span>Hello, this is the most interesting text you will ever read.</span>
                </p>
            </div>
        </div>
    )
}
