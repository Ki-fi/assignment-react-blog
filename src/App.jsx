import './App.css'
import logo from './assets/logo-white.png'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import PostOverview from "./pages/post-overview/PostOverview.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import NavBar from "./components/navbar/NavBar.jsx";

function App() {
    return (
        <>
        <div className="page-container">
        <NavBar/>
        <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/new"} element={<NewPost />} />
                <Route path={"/posts"} element={<PostOverview />} />
                 <Route path={"*"} element={<NotFound />} />
        </Routes>
        </div>
        </>
    )
}

export default App


