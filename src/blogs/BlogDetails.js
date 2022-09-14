import {useNavigate, useParams} from 'react-router-dom';
import useFetch from "../customHooks/useFetch";
import "./blogDetails.css"

const BlogDetails = () => {
    const {id} = useParams()
    const history = useNavigate()
    const {data: blog, isPending, error} = useFetch("http://localhost:4000/blogs/" + id)


    const handleDelete = () => {
        fetch("http://localhost:4000/blogs/" + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted')
            history("/")

        })
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    )
}
export default BlogDetails