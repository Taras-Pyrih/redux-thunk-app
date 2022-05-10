import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { baseURL } from "../../consts/baseURL";

export const UserProfile = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  axios.defaults.baseURL = baseURL;

  useEffect(() => {
    axios.get(`/users/${id}`).then(
      response => setProfile(response.data),
      error => setProfile(error))
  }, []);

  console.log(profile);

  return (
    <div className="UserProfile">
      { profile && (
        profile.id
        ?
        <p>{profile.email}</p>
        :
        <p>{profile.message}</p>
      )}
    </div>
  );
};