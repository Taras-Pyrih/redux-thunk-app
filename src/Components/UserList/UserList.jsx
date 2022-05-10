import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userListRequest } from "../../thunkActionCreators/userListRequest.jsx";
import { useSelector } from "react-redux";
import { ListItem } from "../ListItem/ListItem.jsx";
import { v4 as uuidv4 } from "uuid";


export const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userListRequest())
  }, []);

  const userListState = useSelector(state => state.userListState);
  //console.log(users.length);

  const userList = userListState.users.map(item => {
    return <ListItem profile={item} key={uuidv4()}/>
  });

  return (
    <div className="UserList">
      {
        userList.length > 0
        ?
        <>
          <h1>Список користувачів:</h1>
          <ul>{userList}</ul>
        </>
        :
        <p>{userListState.notification}</p>
      }
    </div>
  );
};