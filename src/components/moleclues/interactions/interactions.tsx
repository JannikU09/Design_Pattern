import "./interactions.css";
import { Button } from "../../atoms/button/button";

//Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const Interactions = () => {
    return (
        <div className="interactions">
            <Button Icon={FavoriteBorderOutlinedIcon} color="#a5a7aa" bgColor="white" size={30} />
            <Button Icon={ChatBubbleOutlineOutlinedIcon} color="#a5a7aa" bgColor="white" size={30} />
            <Button Icon={MoreHorizOutlinedIcon} color="#a5a7aa" bgColor="white" size={30} />
        </div>
    )
}