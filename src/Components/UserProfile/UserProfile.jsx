import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userProfileRequest } from "../../thunkActionCreators/userProfileRequest.jsx";
import { useSelector } from "react-redux";
import './UserProfile.scss';

export const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileRequest(id)).then(() => console.log('Done!'));
  }, []);

  const userProfileState = useSelector(state => state.userProfileState);
  const profile = userProfileState.profile;
  const address = profile.address;
  const company = profile.company;

  return (
    <div className="UserProfile">
      {
        userProfileState.isReady
        ? <>
            <h1>Профайл користувача:</h1>
            <div className="container">
              <div className="top-row">
                <img src="https://i.pinimg.com/originals/b8/59/bd/b859bd54eeb0a7e25869d4726fde8fdb.jpg" alt="Аватарка"/>
                <div className="top-row__right-side">
                  <p>name: <span>{profile.name}</span></p>
                  <p>username: <span>{profile.username}</span></p>
                  <p>email: <span>{profile.email}</span></p>
                  <div className="address">
                    <h2>Address:</h2>
                    <p>street: <span>{address.street}</span></p>
                    <p>suite: <span>{address.suite}</span></p>
                    <p>city: <span>{address.city}</span></p>
                    <p>zipcode: <span>{address.zipcode}</span></p>
                  </div>
                </div>
              </div>
              <div className="bottom-row">
                <p>phone: <span>{profile.phone}</span></p>
                <p>website: <span>{profile.website}</span></p>
                <div className="company">
                  <h2>Company:</h2>
                  <p>name: <span>{company.name}</span></p>
                  <p>catchPhrase: <span>{company.catchPhrase}</span></p>
                  <p>bs: <span>{company.bs}</span></p>
                </div>
              </div>
            </div>
          </>
        : <p className="notification">{userProfileState.notification}</p>
      }
    </div>
  );
};