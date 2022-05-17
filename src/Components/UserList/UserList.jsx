import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userListRequest } from "../../thunkActionCreators/userListRequest.jsx";
import { useSelector } from "react-redux";
import { ListItem } from "../ListItem/ListItem.jsx";
import { v4 as uuidv4 } from "uuid";
import './UserList.scss';

export const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userListRequest()).then(() => console.log('Done!'));
  }, []);

  const userListState = useSelector(state => state.userListState);

  const userList = userListState.users.map(item => {
    return <ListItem profile={item} key={uuidv4()}/>
  });

  return (
    <div className="UserList">
      {
        userListState.isReady
        ? <>
            <h1>Список користувачів:</h1>
            <ul>{userList}</ul>
          </>
        : <p className="notification">{userListState.notification}</p>
      }
    </div>
  );
};