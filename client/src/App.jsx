import './App.css'

import Navibar from "./Components/Navibar.jsx";

import {Home} from "./Pages/Home.jsx";
import {Landing} from "./Pages/Landing.jsx";
import {About} from "./Pages/About.jsx";
import {Contacts} from "./Pages/Contacts.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {

  return (
    <>
        <Router>
            <Navibar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
