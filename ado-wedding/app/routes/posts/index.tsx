import { Link, useLoaderData } from "remix"
import { getPosts } from "~/post";

type Post = {
    slug: string;
    title: string;
}

export const loader = () => {
    return getPosts();
}

export default function Posts() {
    const posts = useLoaderData<Post[]>();
    console.log(posts);
    return(
        <div>
            Posts
            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}