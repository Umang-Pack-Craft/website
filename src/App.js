import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import emailjs from '@emailjs/browser';
emailjs.init("YOUR_PUBLIC_KEY");

function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
