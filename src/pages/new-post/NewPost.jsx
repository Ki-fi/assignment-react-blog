import Input from "../../components/input/Input.jsx";
import {useState} from "react";
import './NewPost.css';

function NewPost() {

    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    })

    function handleChange(e) {
        const changedField = e.target.name;
        const newValue = e.target.value;

        setFormState({
            ...formState,
            [changedField]: newValue,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Post toevoegen</h1>
                <Input
                    labelName={"Titel"}
                    name={"title"}
                    value={formState.title}
                    onChange={handleChange}
                />
                <Input
                    labelName={"Ondertitel"}
                    name={"subtitle"}
                    value={formState.subtitle}
                    onChange={handleChange}
                />
                <Input
                    labelName={"Voor- en achternaam"}
                    name={"author"}
                    defaultValue={0}
                    value={formState.author}
                    onChange={handleChange}
                />
                <label className="textarea-label" htmlFor="textarea"> Blogpost
                    <textarea
                        name="Blogpost"
                        cols="20" rows="7"
                        value={formState.content}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <button type="submit">
                    Toevoegen
                </button>
            </form>
        </>
    )
}

export default NewPost;



