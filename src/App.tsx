import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Category from "./page/Category";
import Header from "./component/Header";

function App() {
  return (
     <>
          <BrowserRouter>
               <Header/>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books/:search" element={<Category />} />
               </Routes>          
          </BrowserRouter>
     </>
  )
}

export default App
