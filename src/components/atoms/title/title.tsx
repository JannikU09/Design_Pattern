import "./title.css";

export const Title = ({
    title,
    size,
}: {
    title: string;
    size: string;
}) => {
    const cssClass = size === "headline" ? "headline" : "subheadline";

    return (
        <div className={`title ${cssClass}`}>
            {title}
        </div>
    )
}
