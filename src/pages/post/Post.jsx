import {Link, useParams} from "react-router-dom";
import './Post.css';
import formatDate from "../../helpers/formatDate.js";
import {useEffect, useState} from "react";
import axios from "axios";

function Post() {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState();
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {

        async function fetchAPost(){
            setError('');

            try {
                toggleLoading(true);
                const response = await axios.get(
                    `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,
                    { headers: {'novi-education-project-id': 'ca0dd25e-4edf-4175-bac3-f904622534a9'}});
                console.log(response.data);
                setPost(response.data);
            } catch(error){
                setError('Er is iets misgegaan met het ophalen van de post...');
                console.error(error);
            } finally {
                toggleLoading(false);
            }

        } fetchAPost();

    }, [id])

    if (loading || !post) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="post-container">
            <div className="post">
                <h1>{post.title}</h1>
                <h4 >{post.subtitle}</h4>
                <p>Geschreven door {post.author} op {formatDate(post.created)}</p>
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