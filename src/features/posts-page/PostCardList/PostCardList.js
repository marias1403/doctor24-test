import PostCard from '../PostCard/PostCard';
import styles from './PostCardList.module.css';

const PostCardList = ({ posts, comments, onSetComments, onFetchComments }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        return <PostCard
          key={post.id}
          post={post}
          comments={comments}
          onSetComments={onSetComments}
          onFetchComments={onFetchComments} />
      })}
    </ul>
  );
}

export default PostCardList;