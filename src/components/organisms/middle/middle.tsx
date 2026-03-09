import { Img } from "../../atoms/img/img";
import { Interactions } from "../../moleclues/interactions/interactions";
import { Likesline } from "../../moleclues/likesline/likesline";
import { UserInfo } from "../../moleclues/userInfo/userInfo";
import { DescriptionLine } from "../../moleclues/descriptionLine/descriptionLine";
import "./middle.css";

export const Middle = () => {
    return (
        <div className="com">
            <UserInfo />
            <Img src="https://picsum.photos/250/?random=2" />
            <Interactions />
            <Likesline />
            <DescriptionLine />

            {/* <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
            }}>
                <Button Icon={FavoriteIcon} color="#115688" bgColor="white" size={10} />
            </div> */}
        </div>
    )
}