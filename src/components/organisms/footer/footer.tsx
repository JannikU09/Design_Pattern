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
            <Button Icon={HomeIcon} variant="secondary" size={40} />
            <Button Icon={SearchIcon} variant="secondary" size={40} />
            <Button Icon={InstagramIcon} variant="primary" size={40} />
            <Button Icon={ChatBubbleIcon} variant="secondary" size={40} />
            <Button Icon={PersonIcon} variant="secondary" color="white" bgColor="#161819" size={40} />
        </div>
    )
}
