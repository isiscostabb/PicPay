
import Tela1 from "./Telas/tela1";
import Tela2 from "./Telas/tela2";
import Tela3 from "./Telas/tela3";
import Tela4 from "./Telas/tela4";
import Tela5 from "./Telas/tela5";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([

  //tela1
  {
    path: "/",
    element: (
      <>
        <Tela1 />
      </>
    ),
  },


  //tela2
  {
    path: "/Tela2",
    element: (
      <>
        <Tela2 />
      </>
    ),
  },


  //tela3
  { 
    path: "/Tela3",
    element: (
      <>
        <Tela3 />
      </>
    ),
  },


  //tela4
  {
    path: "/Tela4",
    element: (
      <>
        <Tela4 />
      </>
    ),
  },


  //tela5
  {
    path: "/Tela5",
    element: (
      <>
        <Tela5 />
      </>
    ),
  },
]);

export default routes;
