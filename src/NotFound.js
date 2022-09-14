import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page con not be fond </p>
            <Link style={{
                textDecoration: 'underline'
            }} to="/">Back to the Home page...</Link>
        </div>
    )
}
export default NotFound