import "./infoline.css";
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import { time } from "../../../utils/time";

export const Infoline = () => {

    return (
        <table className="table">
            <tbody>
                <tr>
                    <td align="left" style={{ width: "10%" }}>{time.hour()}:{time.minute()}</td>
                    <td align="center" style={{ width: "80%" }}>{time.weekday()}, {time.date()}</td>
                    <td align="right" style={{ width: "10%" }}>
                        <Battery5BarIcon
                            sx={{
                                fontSize: "15px",
                                rotate: "90deg",
                            }} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}