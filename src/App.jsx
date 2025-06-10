import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import PostOverview from "./pages/post-overview/PostOverview.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

function App() {
    return (
        <>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/new"} element={<NewPost />} />
                <Route path={"/posts"} element={<PostOverview />} />
                 <Route path={"*"} element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App


