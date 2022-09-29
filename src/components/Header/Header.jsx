import { useState } from "react";
import { Menu, LogoutOutlined } from "@mui/icons-material";
import {
  IconButton,
  Box,
  Drawer,
  Tooltip,
  Avatar,
  Typography,
  Menu as MuiMenu,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import SideBar from "components/Sidebar/SideBar";
import { projectName } from "theme/themeConfig";
import { useReduxUser } from "utils/hooks";
import { useDispatch } from "react-redux";
import { userLogout } from "Redux/Actions";
import Link from "next/link";

const Header = ({ drawerWidth }) => {
  // state
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menu = Boolean(anchorEl);

  // redux
  const dispatch = useDispatch();
  const userRedux = useReduxUser();

  const handleLogout = async () => {
    handleMenuClose();
    dispatch(userLogout());
    const logoutEvent = new CustomEvent("logout", {
      detail: {
        logout: true,
      },
    });
    window.dispatchEvent(logoutEvent);
  };

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element) => {
    setAnchorEl(element);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header-container">
      <Box className="header-title-btn">
        {userRedux && (
          <Tooltip title="Menu" arrow={true} placement="right">
            <IconButton
              className="header-sidebar-btn"
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
              onClick={handleSidebarDrawerOpen}
            >
              <Menu />
            </IconButton>
          </Tooltip>
        )}
        <Link href="/">
          <Typography className="header-title">{projectName}</Typography>
        </Link>
      </Box>
      {/* {!userRedux && (
        <Link href="/auth/login">
          <a className="header-links">Login</a>
        </Link>
      )} */}
      {userRedux && (
        <Avatar
          src="/images/user.png"
          onClick={(e) => handleOpenMenu(e.currentTarget)}
          className="scs-avatar"
        />
      )}
      <MuiMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menu}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: { width: 150, maxWidth: "100%" },
        }}
      >
        <MenuList dense>
          <MenuItem autoFocus onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </MuiMenu>
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <SideBar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          headerSidebar
        />
      </Drawer>
    </Box>
  );
};

export default Header;
