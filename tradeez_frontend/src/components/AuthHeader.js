import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
import Search from "../assests/images/search.svg";

const AuthHeader = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div className="container_space">
      <div className="container_relative">
        <img className="search" src={Search} alt="search"></img>
        <input
          className="input_search form-control"
          placeholder="search"
          type="search"
          id="form1"
        />
      </div>
      <h1 className="company_name">
        <User />
      </h1>
    </div>
  );
};

export default AuthHeader;
