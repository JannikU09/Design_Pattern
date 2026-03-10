import "./interactions.css";
import { Button } from "../../atoms/button/button";

//Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const Interactions = () => {
    return (
        <div className="interactions">
            <table style={{width: "100%"}}>
                <tbody>
                    <tr>
                        <td style={{width: "20%"}}>
                            <Button Icon={FavoriteBorderOutlinedIcon} color="#a5a7aa" bgColor="white" size={30} />
                        </td>
                        <td style={{width: "20%"}}>
                            <Button Icon={ChatBubbleOutlineOutlinedIcon} color="#a5a7aa" bgColor="white" size={30} />
                        </td>
                        <td style={{width: "60%"}} align="right">
                            <Button Icon={MoreHorizOutlinedIcon} color="#a5a7aa" bgColor="white" size={30} />
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    )
}