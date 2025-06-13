import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import './Post.css';

function Post() {

    const {id} = useParams();
    const post = posts.find(p => String(p.id) === id);

    return (
        <>
            <div className="post-container">
            <div className="post">
                <h1>{post.title}</h1>
                <h4 >{post.subtitle}</h4>
                <p>Geschreven door {post.author} op {post.created}</p>
                <p>{post.readTime} minuten lezen</p>
                <p>{post.content}</p>
                <div className="post-statistics">
                    <p>{post.comments} reacties</p>
                    <p>{post.shares} keer gedeeld</p>
                </div>
                <div className="navigation">
                    <Link to={`/posts`}>Terug naar de overzichtspagina</Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Post;