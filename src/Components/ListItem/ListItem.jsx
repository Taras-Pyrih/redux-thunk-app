import { Link } from "react-router-dom";

export const ListItem = props => {

  return (
    <li className="listItem">
      <Link to={`/userList/${props.profile.id}`}>{props.profile.username}</Link>
    </li>
  );
};