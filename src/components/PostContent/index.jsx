export const PostContent = ({ title, id, body }) => (
    <div className="post-content" id={id}>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
);