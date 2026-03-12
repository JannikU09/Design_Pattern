import { UserName } from "../../atoms/userName/userName";
import { ProfileImg } from "../profileImg/profileImg";
import "./userInfo.css";
import "../../atoms/userName/userName.css";

export const UserInfo = () => {
    return (
        <div className="userInfo">
            <ProfileImg src="https://picsum.photos/45/?random=1" />
            <UserName name="innFactory" />
            <p style={{ color: "#a5a7aa" }}>2h</p>
        </div>
    )
}