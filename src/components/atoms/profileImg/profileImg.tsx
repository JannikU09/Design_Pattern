import "./profileImg.css";

export const ProfileImg = ({
    src,
}: {
    src: string;
}) => {

    return (
        <img
            className="img"
            src={src}
            id="img"
        />
    )
}
