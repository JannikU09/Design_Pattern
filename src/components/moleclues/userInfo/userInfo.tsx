import { UserName } from "../../atoms/userName/userName";
import { ProfileImg } from "../../atoms/profileImg/profileImg";
import "./userInfo.css";

export const UserInfo = () => {
    return (
        <div className="userInfo">
            <ProfileImg src="https://picsum.photos/45/?random=1" />
            &nbsp;
            <UserName name="innFactory" />
            &nbsp;
            <p style={{ color: "#a5a7aa" }}>2h</p>
        </div>
    )
}