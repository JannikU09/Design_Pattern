import "./interactions.css";
import { Button } from "../../atoms/button/button";

//Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const Interactions = () => {
    return (
        <div className="interactions">
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td style={{ width: "20%" }}>
                            <Button icon={<FavoriteBorderOutlinedIcon />} variant="tertiary" size={30} />
                        </td>
                        <td style={{ width: "20%" }}>
                            <Button icon={<ChatBubbleOutlineOutlinedIcon />} variant="tertiary" size={30} />
                        </td>
                        <td style={{ width: "60%" }} align="right">
                            <Button icon={<MoreHorizOutlinedIcon />} variant="tertiary" size={30} />
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    )
}