import "./infoline.css";
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';

export const Infoline = () => {

    const date = new Date();
    const dayName = date.toLocaleDateString('de-DE', { weekday: "short" });
    const day = date.toLocaleDateString('de-DE');

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return (
        <table className="table">
            <tbody>
                <tr>
                    <td align="left" style={{ width: "10%" }}>{hours}:{minutes}</td>
                    <td align="center" style={{ width: "80%" }}>{dayName}, {day}</td>
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