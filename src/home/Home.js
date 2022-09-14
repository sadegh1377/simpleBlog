import "./Home.css"
import BLogList from "../blogs/BLogList";
import useFetch from "../customHooks/useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:4000/blogs")
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BLogList blogs={blogs} title="All Blogs!"/>}
        </div>
    )
}

export default Home