import { PostImage } from '../PostImage';

export const PostCard = ({ title, cover, body, id }) => (
    <div className="post">
        <PostImage title={title} cover={cover} />
        <div className="post-content" id={id}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);