/* eslint-disable @typescript-eslint/no-explicit-any */

import "./button.css";

export const Button = ({
    Icon,
    color,
    bgColor,
    size,
}: {
    Icon: any;
    color: string;
    bgColor: string;
    size: number;
}) => {

    return (
        <button
            className="button"
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
