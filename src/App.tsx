import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Category from "./page/Category";
import Header from "./component/Header";
function App() {
  return (
     <>
          <Header/>
          <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Category />} />
               </Routes>
          </Router>
     </>
  )
}

export default App
