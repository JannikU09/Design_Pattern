import "./userName.css";

export const UserName = ({
    name,
}: {
    name: string;
}) => {
    return (
        <p className="userName">
            {name}
        </p>
    )
}