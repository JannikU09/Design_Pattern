import "./description.css";

export const Description = ({
    text,
}: {
    text: string;
}) => {
    return (
        <p className="description">
            {text}
        </p>
    )
}