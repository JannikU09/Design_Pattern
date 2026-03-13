interface DescriptionProps {
    text: string;
}

export const Description: React.FC<DescriptionProps> = ({
    text,
}) => {
    return (
        <span>
            {text}
        </span>
    )
}