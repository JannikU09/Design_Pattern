import "./img.css";

interface ImgProps {
    src: string;
}

export const Img: React.FC<ImgProps> = ({
    src,
}) => {

    return (
        <img
            src={src}
            id="img"
        />
    )
}
