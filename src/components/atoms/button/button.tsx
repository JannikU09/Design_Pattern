import "./button.css";

interface ButtonProps {
    icon: React.ReactNode;
    size: number;
    variant: "primary" | "secondary" | "tertiary";
    color?: string;
    bgColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
    icon,
    size,
    variant,
    color,
    bgColor,
}) => {
    return (
        <button
            className={`button ${variant}`}
            id="button"
            style={{
                color: color,
                backgroundColor: bgColor,
                height: size + "px",
                width: 10 + size + "px",
            }}
        >
            {icon}
        </button>
    )
}
