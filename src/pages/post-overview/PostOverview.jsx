import Card from "../../components/card/Card.jsx";
import posts from '../../constants/data.json';
import './PostOverview.css';

function PostOverview() {

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

