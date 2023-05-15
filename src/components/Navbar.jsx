import { useState } from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Email as EmailIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [userMenuEl, setUserMenuEl] = useState(null);
  const isUserMenuOpen = Boolean(userMenuEl);

  const handleAvatarClick = (event) => {
    setUserMenuEl(event.currentTarget);
  };

  const closeUserMenu = () => {
    setUserMenuEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Material UI Demo
        </Typography>
        <MenuIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="Search..." fullWidth />
        </Search>
        <Icons>
          <Badge badgeContent={5} color="error" sx={{ cursor: "pointer" }}>
            <EmailIcon />
          </Badge>
          <Badge badgeContent={2} color="error" sx={{ cursor: "pointer" }}>
            <NotificationsActiveIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            id="user-avatar"
            aria-controls={isUserMenuOpen ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isUserMenuOpen ? "true" : undefined}
            onClick={handleAvatarClick}
          >
            <Typography variant="button">KR</Typography>
          </Avatar>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            id="user-avatar"
            aria-controls={isUserMenuOpen ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isUserMenuOpen ? "true" : undefined}
            onClick={handleAvatarClick}
          >
            <Typography variant="button">KR</Typography>
          </Avatar>
          <Typography variant="body2">Kaustubh Raghav</Typography>
        </UserBox>
        <Menu
          id="user-menu"
          aria-labelledby="user-avatar"
          anchorEl={userMenuEl}
          open={isUserMenuOpen}
          onClose={closeUserMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={closeUserMenu}>Profile</MenuItem>
          <MenuItem onClick={closeUserMenu}>My account</MenuItem>
          <MenuItem onClick={closeUserMenu}>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
