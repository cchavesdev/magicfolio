import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import { Card, CardActions, CardMedia } from "@mui/material";

export interface CardRequestResult{
   data: Array<Card>
}

export interface Card{
    artist: string,
    name: string,
    foil:boolean,
    nonfoil:boolean,
    rarity: string,
    image_uris: {
      normal: string,
    },
    prints_search_uri: string
}

export const CardFinder = () => {
    const [cardList, setCardList] = useState<Card[]>([]);
    const [inputText, setInputText] = useState("");
    const handleClickSearch = async ()=>{
        console.log(inputText);
        let cardsArrayToPrint = [];
        if(inputText && inputText.length >= 2){
            const response = await axios.get<CardRequestResult>(`https://api.scryfall.com/cards/search?q=name%3A${inputText}`);
            console.log(response.data);
            if(response.data.data){
                let cardsArray = response.data.data;
                for(var i = 0; i< cardsArray.length; i++){
                    let printsOfCards = cardsArray[i].prints_search_uri
                    axios.get<CardRequestResult>(printsOfCards).then((responsePrints)=>{
                        let cardsData = responsePrints.data.data;
                        console.log(loadFoilAndNonFoilCard(cardsData));
                         setCardList(loadFoilAndNonFoilCard(cardsData));
                    })
                }
              //  setCardList(response.data.data);
            }
        }
    }
    const loadFoilAndNonFoilCard = (cardsData:Card[]) =>{

    
       let foiledCards:Card[] = [];
       let nonFoiledCards:Card[] = [];
        cardsData.map((item)=>{

            if(item.foil){
                foiledCards.push({...item, nonfoil: false})
            }
            if(item.nonfoil){
                nonFoiledCards.push({...item, foil: false})
            }
           
        });
     
        return [...foiledCards,...nonFoiledCards];
       
    }
    const renderListOfCards = ()=>{
        return (
            cardList.map((card, index)=>{
                return renderCard(card)
            })
        )
    }
    const renderCard = (card:Card)=>{
        return (
          <div className="col-6 col-sm-3 relative-container">
            <img  src={card.image_uris.normal} style={{maxWidth:"100%"}}/>
            {card.foil ?  <img  src="/img/overlay.png" className="overlayImg" style={{maxWidth:"100%"}}/> : ""}
            <h5>{card.rarity} - {card.foil ? "Foil":""} - {card.nonfoil ? "Non Foil" : ""}</h5>
            {/* <Button size="small">Add to Magicfolio</Button>
              <Button size="small">Look for a Seller</Button> */}
          </div>
        )
    }
  return (
    <center id="cardFinder">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            onChange={(e)=>{setInputText(e.target.value)}}
          />
          <Button variant="contained" onClick={handleClickSearch}>
            <Search />
          </Button>
        </div>
      </Box>
     <div className="row p-3"> {renderListOfCards()}</div>
    </center>
  );
};
