import "./img.css";

export const Img = ({
    src,
}: {
    src: string;
}) => {

    return (
        <img
            src={src}
            id="img"
        />
    )
}
