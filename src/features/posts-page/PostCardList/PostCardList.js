import PostCard from '../PostCard/PostCard';
import styles from './PostCardList.module.css';

const PostCardList = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => <PostCard key={post.id} post={post} />)}
    </ul>
  );
}

export default PostCardList;