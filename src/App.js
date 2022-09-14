import './App.css';
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./blogs/Create";
import BlogDetails from "./blogs/BlogDetails";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/Create" element={<Create/>}/>
                        <Route exact path="/blog/:id" element={<BlogDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
