import "./infoline.css";
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';

export const Infoline = () => {

    const date = new Date();
    const dayName = date.toLocaleDateString('de-DE', {weekday: "short"});
    const day = date.toLocaleDateString('de-DE');

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return (
        <table className="table">
            <td>{hours}:{minutes}</td>
            <td>{dayName}, {day}</td>
            <td>
                <Battery5BarIcon 
                sx={{
                    fontSize:"15px",
                    rotate: "90deg",
                }}/>
            </td>
        </table>
    )
}