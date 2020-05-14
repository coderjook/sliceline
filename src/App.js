import React, { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Menu } from "./Menu/Menu";

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
