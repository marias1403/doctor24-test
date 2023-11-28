import PostCard from '../PostCard/PostCard';
import styles from './PostCardList.module.css';

const PostCardList = (
  {
    posts,
    comments,
    onSetComments,
    onFetchComments,
    onDeleteBtnClick
  }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        return <PostCard
          key={post.id}
          post={post}
          comments={comments}
          onSetComments={onSetComments}
          onFetchComments={onFetchComments}
          onDeleteBtnClick={onDeleteBtnClick} />
      })}
    </ul>
  );
}

export default PostCardList;