import { AppBar, Toolbar, Typography } from "@mui/material";
import { useApolloUser } from "../../types/ApolloUserContext";


const Header = () => {
  const { user } = useApolloUser();

  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            業務管理 + {user.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
