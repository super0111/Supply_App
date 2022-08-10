import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiUser, BiCart, BiSearch } from "react-icons/bi";
import { useAuth } from "../hooks/auth";
import { logout } from "../store/action/auth";
import { Button, Menu, MenuItem } from '@mui/material';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const AuthHeader = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container_space">
      <div className="d-flex justify-content-start align-items-center container_relative search_input">
        <div>
          <input
            className="search_input_tag"
            placeholder="search"
            type="search"
            id="form1"
          />  
        </div>
        <div>
          <BiSearch size={18} color="#595a5c" />
        </div>
      </div>
      <div className="d-flex align-items-center company_name">
        <div className="title_field">
          <div className="title">CLEARVIEW BUIlLDING SYSTEMS</div>
          <div className="text">Constructions</div>
        </div>
        <div className="divider"></div>
        <div className="d-flex justify-content-between align-items-center" >
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <BiHeart color="rgb(80 88 82)" size={25} style={{marginRight: "15px"}} />
          </div>
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <BiCart color="rgb(80 88 82)" size={25}style={{marginRight: "15px"}} />
          </div>
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <BiUser color="rgb(80 88 82)" size={25}style={{marginRight: "15px"}} />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={()=> navigate("/product")}>Dashboard</MenuItem>
            <MenuItem onClick={()=> dispatch(logout())}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
