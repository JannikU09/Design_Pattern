import "./likesline.css";
import { likes } from "../../../utils/likes";
import { Button } from "../../atoms/button/button";
// Icon
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Likesline = () => {
    return (
        <div className="likesline">
            <span>
                <Button Icon={FavoriteIcon} color="#115688" bgColor="white" size={10} />
            </span>
            <span>
                {likes()} Likes
            </span>
        </div>
    )
}