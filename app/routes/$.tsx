import { Link } from "remix";

export default function NotFoundPage() {
    return (
        <div>
            <p>Sorry, this page does not exist, you should go back</p>
            <Link to="/">go home</Link>
        </div>
    )
}