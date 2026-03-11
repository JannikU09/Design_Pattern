import "./navBar.css";
import { Button } from "../../atoms/button/button";

// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';

export const NavBar = () => {

    return (
        <div className="navBar">

            <Button Icon={ArrowBackIcon} color="white" bgColor="#115688" size={20} />
            <h4 style={{ color: "white" }}>PHOTO</h4>
            <Button Icon={ReplayIcon} color="white" bgColor="#115688" size={20} />
        </div>
    )
}
