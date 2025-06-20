import Card from "../../components/card/Card.jsx";
import './PostOverview.css';
import {useEffect, useState} from "react";
import axios from "axios";

function PostOverview() {

    const [error, setError] = useState();
    const [loading, toggleLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function fetchPosts() {
            setError('');

            try {
                toggleLoading(true);
                const response = await axios.get(
                    'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',
                    { headers: {'novi-education-project-id': 'ca0dd25e-4edf-4175-bac3-f904622534a9'}});
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error(error);
                setError('Er is iets misgegaan met het ophalen van de resultaten...');
            } finally {
                toggleLoading(false);
            }
        } fetchPosts();

    }, []);

    if (loading || !posts) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

   return (
       <>
        <div className="post-overview">
            <h1>
                Bekijk alle {posts.length} posts:
            </h1>
           {posts.map(post => (
               <Card
                   key={post.id}
                   id={post.id}
                   title={post.title}
                   author={post.author}
                   comments={post.comments}
                   shared={post.shares}
               />
           ))}
        </div>
       </>
   )

}

export default PostOverview;

