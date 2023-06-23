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
import { InformationBox } from '../informationBox/InformationBox';
import { GameCard } from '../../interfaces/interfaces';



export const Landing = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [saleList, setSaleList] = React.useState<GameCard[]>([
    {
        name: "Mana Crypt",
        image:"https://cards.scryfall.io/large/front/4/d/4d960186-4559-4af0-bd22-63baa15f8939.jpg?1599709515",
        publishDate: new Date(),
        comment: "Excelente estado. Se vende por que me da la gana y quiero hacer dinero. No me juzguen people. Precio negociable $5000"
    },
    {
        name: "King Crab",
        image:"https://cards.scryfall.io/large/front/a/e/aedea953-b5f1-4ec7-bd9f-b7827f9d40fe.jpg?1562863786",
        publishDate: new Date(),
        comment: "Excelente estado. Se vende por que me da la gana y quiero hacer dinero. No me juzguen people. Precio negociable $5000"
    },
    {
        name: "Sarkhan's Scorn",
        image:"https://cards.scryfall.io/large/front/8/2/82f1d347-4384-46e9-bacf-67af510a76d3.jpg?1659057006",
        publishDate: new Date(),
        comment: "Excelente estado. Se vende por que me da la gana y quiero hacer dinero. No me juzguen people. Precio negociable $5000"
    }
  ]);


  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
    <TopBar></TopBar>
      {
        saleList.map((card)=> (
          <InformationBox comment={card.comment} image={card.image} name={card.name} publishDate={new Date()}></InformationBox>
        ))
      }
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
       
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Whish List" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Portfolio" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Profile" icon={<Avatar 
          alt="Profile Picture" src={"https://scontent.fsyq3-1.fna.fbcdn.net/v/t39.30808-1/291632606_5547162378630145_6246931178548792958_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=IfnNdATAW2sAX8XflV2&_nc_ht=scontent.fsyq3-1.fna&oh=00_AfDtCE6EQLUMQVj5CRnpe67oHqNdLIFF-VDcj8ErpQJQ_g&oe=6496E7B4"} />} />
          
        </BottomNavigation>
      </Paper>
    </Box>
  );
}



