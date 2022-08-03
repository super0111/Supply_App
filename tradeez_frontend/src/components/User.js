import { Avatar, Dropdown, Menu, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { logout } from "../store/action/auth";

const User = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              dispatch(logout());
            } else {
              navigate(key);
            }
          }}
          style={{ minWidth: 200 }}
          items={[
            {
              key: "/product",
              label: <Typography>Dashboard</Typography>,
            },
            {
              type: "divider",
            },
            {
              key: "logout",
              label: <span>Logout</span>,
              danger: true,
            },
          ]}
        />
      }
    >
      <Avatar
        style={{ border: "1px solid #d0d0d0" }}
        src={user?.avatar}
        size="large"
      >
        {user?.name.slice(0, 2)}
      </Avatar>
    </Dropdown>
  );
};

export default User;
