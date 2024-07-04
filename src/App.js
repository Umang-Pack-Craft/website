import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Whyus from "./components/Whyus/Whyus";
import Product from "./components/Product/Product";
import Contactus from "./components/Contactus/Contactus";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;

// echo "# kesrarCraft" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Mansi523/kesrarCraft.git
// git push -u origin main
