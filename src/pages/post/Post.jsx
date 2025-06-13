import {useParams} from "react-router-dom";

function Post() {

    const { id } = useParams();

    return (
        <p>test</p>
    )
}

export default Post;