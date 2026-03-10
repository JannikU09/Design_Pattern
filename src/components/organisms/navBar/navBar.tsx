import "./navBar.css";
import { Button } from "../../atoms/button/button";
import { Headline } from "../../atoms/headline/headline";

// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';

export const NavBar = () => {

    return (
        <div className="navBar">
            <table style={{ width: "100%" }}>
                <tbody>
                    <td style={{ width: "15%" }} align="left">
                        <Button Icon={ArrowBackIcon} color="white" bgColor="#115688" size={20} />
                    </td>
                    <td style={{ width: "70%" }} align="center">
                        <Headline text="photo" />
                    </td>
                    <td style={{ width: "15%" }} align="right">
                        <Button Icon={ReplayIcon} color="white" bgColor="#115688" size={20} />
                    </td>
                </tbody>
            </table>
        </div>
    )
}
