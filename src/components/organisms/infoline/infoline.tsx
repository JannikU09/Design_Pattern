import "./infoline.css";
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import { time } from "../../../utils/time";
import { Button } from "../../atoms/button/button";

export const Infoline = () => {

    return (
        <div className="infoLine">
            <p
                style={{ margin: "auto 5px" }}
            >{time.hour()}:{time.minute()}</p>
            <p>{time.weekday()}, {time.date()}</p>
            <div
                style={{
                    rotate: "90deg",
                    margin: "auto 5px",
                }}
            >
                <Button icon={<Battery5BarIcon />} variant="primary" size={10} />
            </div>
        </div>
    )
}