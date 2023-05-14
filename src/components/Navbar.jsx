import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
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
          <Badge badgeContent={5} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }}>
            <Typography variant="button">KR</Typography>
          </Avatar>
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }}>
            <Typography variant="button">KR</Typography>
          </Avatar>
          <Typography variant="body2">Kaustubh Raghav</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
