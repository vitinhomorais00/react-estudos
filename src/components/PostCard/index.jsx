import { PostImage } from '../PostImage';
import { PostContent } from '../PostContent';

export const PostCard = ({ title, cover, body, id }) => (
    <div className="post">
        <PostImage title={title} cover={cover} />
        <PostContent id={id} title={title} body={body} />
    </div>
);