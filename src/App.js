import React from "react";
import Layout from "./Components/Layout/layout";
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder'

const App = (props) => {
  return( 
  <Layout>
   <BurgerBuilder/>
     
  </Layout>
  )
};

export default App;
