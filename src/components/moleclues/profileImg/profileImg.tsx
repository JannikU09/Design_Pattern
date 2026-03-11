import "./profileImg.css";
import { Img } from "../../atoms/img/img";

export const ProfileImg = ({
    src,
}: {
    src: string;
}) => {

    return (
        <div className="image">
            <Img
                src={src}
            />
        </div>
    )
}
