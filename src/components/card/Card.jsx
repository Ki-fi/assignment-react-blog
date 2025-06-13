
import './Card.css';
import {Link} from "react-router-dom";

function Card({ id, title, author, comments, shared }) {

    return (
        <section className="card">
            <div className="card-content">
                <Link to={`/posts/${id}`} className="card-title">{title}</Link>
                <h5>{author}</h5>
            </div>
            <div>
                <p>{comments} reacties</p>
                <p>{shared} keer gedeeld</p>
            </div>
        </section>
    )
}

export default Card;