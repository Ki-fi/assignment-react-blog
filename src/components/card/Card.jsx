
import './Card.css';
import {Link} from "react-router-dom";

function Card({ title, author, comments, shared }) {
    return (
        <section className="card">
            <div className="card-content">
                <Link to={`/${shared}`} className="card-title">{title}</Link>
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