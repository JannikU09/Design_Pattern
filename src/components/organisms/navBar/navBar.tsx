import "./navBar.css";
import { Button } from "../../atoms/button/button";
import { Headline } from "../../atoms/headline/headline";

// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';

export const NavBar = () => {

    return (
        <div className="navBar">
            <Button Icon={ArrowBackIcon} color="white" bgColor="#115688" size={30} />
            <Headline text="photo"/>
            <Button Icon={ReplayIcon} color="white" bgColor="#115688" size={30} />
        </div>
    )
}
