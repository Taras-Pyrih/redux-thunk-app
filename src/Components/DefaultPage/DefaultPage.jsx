import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const DefaultPage = () => {
  const navigate = useNavigate();

  useEffect(() => navigate('/counter'), []);

  return null;
};