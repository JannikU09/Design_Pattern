/* eslint-disable @typescript-eslint/no-explicit-any */

import "./button.css";

export const Button = ({
    Icon,
    size,
    variant,
    color,
}: {
    Icon: any;
    size: number;
    variant: string;
    color?: string;
}) => {

    return (
        <button
            className={`button ${variant}`}
            id="button"
            style={{
                color: color,
                height: size + "px",
                width: 10 + size + "px",
            }}
        >
            <Icon />
        </button>
    )
}
