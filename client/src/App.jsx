import './App.css'

import Navibar from "./Components/Navibar.jsx";

import {Home} from "./Pages/Home.jsx";
import {Cars} from "./Pages/Cars.jsx";
import {Owners} from "./Pages/Owners.jsx";
import {Contacts} from "./Pages/Contacts.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Footer} from "./Components/Footer.jsx";

function App() {

  return (
    <>
        <Router>
            <Navibar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/owners" element={<Owners />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
        <Footer />
    </>
  )
}

export default App
