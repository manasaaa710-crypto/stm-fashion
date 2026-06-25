import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Admin from "./pages/Admin";


function App(){

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/mens" element={<Mens/>}/>

<Route path="/women" element={<Womens/>}/>

<Route path="/admin" element={<Admin/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;