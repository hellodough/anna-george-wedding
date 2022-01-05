// import { Link, useLoaderData } from "remix"
// import { getPosts } from "~/post";

// type Post = {
//     slug: string;
//     title: string;
// }

// export const loader = () => {
// return getPosts();
// }

export default function Bridesmaids() {
  return (
    <div>
      <p>Hey, it’s Anna and I want you to be my bridesmaid!</p>

      <p>
        I’m still working on this page, so it is empty for now, but I’m planning
        on including:
      </p>
      <ul>
        <li>bridesmaid dress colors</li>
        <li>wedding schedule</li>
        <li>other bridesmaids contact information</li>
      </ul>
    </div>
  );
}
