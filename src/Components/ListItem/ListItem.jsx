import { Link } from "react-router-dom";
import './ListItem.scss';

export const ListItem = props => {
  const profile = props.profile;

  return (
    <li className="ListItem">
      <div className="top-row">
        <img src="https://i.pinimg.com/originals/b8/59/bd/b859bd54eeb0a7e25869d4726fde8fdb.jpg" alt="Аватарка"/>
        <div className="top-row__right-side">
          <p>name: <Link className="link" to={`/userList/${profile.id}`}>{profile.name}</Link></p>
          <p>username: <span>{profile.username}</span></p>
          <p>email: <span>{profile.email}</span></p>
        </div>
      </div>
      <div className="bottom-row">
        <p>phone: <span>{profile.phone}</span></p>
        <p>website: <span>{profile.website}</span></p>
      </div>
    </li>
  );
};