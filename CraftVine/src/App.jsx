import React, { useState } from 'react';
// new imports
import {Routes,Route} from 'react-router-dom';
import Home from './home.jsx';
import jewellery from './jewellery.jsx';
import home_decor from './home_decor.jsx';
import kitchen_and_dinning from './kitchen_and_dinning.jsx';
import beauty_and_grooming from './beauty_and_grooming.jsx';
import handbags_and_totes from './handbags_and_totes.jsx';
import stationary_and_parties_supply from './stationary_and_parties_supply.jsx';
import clothing_and_accesories from './clothing_and_accesories.jsx';
import toys_and_games from './toys_and_games.jsx';

import Seller from "./Seller.jsx" ;
import checkout from './checkout.jsx';
import Contact from './Contact.jsx';
// import contact from './Contact.jsx';

function App() {

  return (
    <>
    <Routes> 
      
    <Route path ="/" Component={ Home}/>
    <Route path ="/jewellery" Component ={ jewellery}/>
    <Route path ="/home_decor" Component ={ home_decor}/>
    <Route path ="/kitchen_and_dinning" Component ={ kitchen_and_dinning}/>
    <Route path ="/beauty_and_grooming" Component ={ beauty_and_grooming}/>
    <Route path ="/handbags_and_totes" Component ={ handbags_and_totes}/>
    <Route path ="/stationary_and_parties_supply" Component ={ stationary_and_parties_supply}/>
    <Route path ="/clothing_and_accesories" Component ={ clothing_and_accesories}/>
    <Route path ="/toys_and_games" Component ={ toys_and_games}/>
    <Route path ="/Seller" Component ={ Seller}/>
    <Route path ="/checkout" Component={checkout} />
    <Route path ="/Contact" Component ={ Contact}/>
    </Routes>
    </>
  )
}

export default App;