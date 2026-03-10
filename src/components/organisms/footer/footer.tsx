import "./footer.css";
import { Button } from "../../atoms/button/button";

//Icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';

export const Footer = () => {
    return (
        <div className="footer">
            <Button Icon={HomeIcon} color="#a5a7aa" bgColor="#25272a" size={40} />
            <Button Icon={SearchIcon} color="#a5a7aa" bgColor="#24272a" size={40} />
            <Button Icon={InstagramIcon} color="white" bgColor="#115688" size={40} />
            <Button Icon={ChatBubbleIcon} color="#a5a7aa" bgColor="#24272a" size={40} />
            <Button Icon={PersonIcon} color="white" bgColor="#161819" size={40} />
        </div>
    )
}
