import "./infoline.css";
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import { time } from "../../../utils/time";

export const Infoline = () => {

    return (
        <div className="infoLine">
            <p
                style={{margin: "auto 5px"}}
            >{time.hour()}:{time.minute()}</p>
            <p>{time.weekday()}, {time.date()}</p>
            <Battery5BarIcon 
                sx={{
                    fontSize: "15px",
                    rotate: "90deg",
                    margin: "auto 5px",
                }}
            />
        </div>
    )
}