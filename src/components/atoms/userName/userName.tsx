import "./userName.css";

interface UserNameProps {
    name: string;
}

export const UserName: React.FC<UserNameProps> = ({
    name,
}) => {
    return (
        <span className="userName">
            {name}
        </span>
    )
}