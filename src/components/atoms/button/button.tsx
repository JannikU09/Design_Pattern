/* eslint-disable @typescript-eslint/no-explicit-any */

import "./button.css";

export const Button = ({
    Icon,
    size,
    variant,
    color,
    bgColor,
}: {
    Icon: any;
    size: number;
    variant: string;
    color?: string;
    bgColor?: string;
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
            <Icon />
        </button>
    )
}
