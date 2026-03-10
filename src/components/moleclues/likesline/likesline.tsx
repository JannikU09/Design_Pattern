import "./likesline.css";
import { Likes } from "../../atoms/likes/likes";
import { Button } from "../../atoms/button/button";
// Icon
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Likesline = () => {
    return (
        <div className="likesline">
            <Button Icon={FavoriteIcon} color="#115688" bgColor="white" size={10} />
            <Likes /> Likes
        </div>
    )
}