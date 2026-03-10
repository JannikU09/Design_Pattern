import "./headline.css";

export const Headline = ({
    text,
}: {
    text: string;
}) => {

    return (
        <p className="text1">
            {text}
        </p>
    )
}