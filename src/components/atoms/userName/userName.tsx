import "./userName.css";

export const UserName = ({
    name,
}: {
    name: string;
}) => {
    return (
        <span className="userName">
            {name}
        </span>
    )
}