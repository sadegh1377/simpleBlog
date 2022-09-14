import "./create.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("sadegh")
    const [isPending, setIsPending] = useState(false)
    const history = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const blog = {title, body, author}

        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            console.log('new blog added')
            history('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                       value={title}
                       required
                       onChange={(e) => {
                           setTitle(e.target.value)
                       }}/>
                <label>Blog body:</label>
                <textarea required
                          value={body}
                          onChange={(event => setBody(event.target.value))}>
                </textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(event => setAuthor(event.target.value))}>
                    <option value='sadegh'>sadegh</option>
                    <option value='pouya'>pouya</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding new Blog</button>}
            </form>

        </div>
    )
}

export default Create
