import "./likesline.css";
import { likes } from "../../../utils/likes";
import { Button } from "../../atoms/button/button";
// Icon
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Likesline = () => {
    return (
        <div className="likesline">
            <span>
                <Button icon={<FavoriteIcon />} variant="tertiary" color="#115688" size={10} />
            </span>
            <span>
                {likes()} Likes
            </span>
        </div>
    )
}