import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header";
function App() {
  return (
     <>
          <Header/>
          <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
               </Routes>
          </Router>
     </>
  )
}

export default App
