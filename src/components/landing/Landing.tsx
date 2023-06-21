import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { TopBar } from './topBar/TopBar';



export const Landing = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
    <TopBar></TopBar>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="New Adds" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Whish List" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Portfolio" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Profile" icon={<Avatar 
          alt="Profile Picture" src={"https://scontent.fsyq3-1.fna.fbcdn.net/v/t39.30808-1/291632606_5547162378630145_6246931178548792958_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=IfnNdATAW2sAX8XflV2&_nc_ht=scontent.fsyq3-1.fna&oh=00_AfDtCE6EQLUMQVj5CRnpe67oHqNdLIFF-VDcj8ErpQJQ_g&oe=6496E7B4"} />} />
          
        </BottomNavigation>
      </Paper>
    </Box>
  );
}



