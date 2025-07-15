import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Order from "./pages/Order/Order";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/order" Component={Order} />
      </Routes>  
    </BrowserRouter>
  );

}

export default App;
