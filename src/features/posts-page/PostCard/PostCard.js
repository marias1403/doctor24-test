import { useState } from 'react';
import styles from './PostCard.module.css';
import PostCommentItem from '../PostCommentItem/PostCommentItem';
import userIcon from '../../../assets/images/user-icon.svg';

const PostCard = ({ post, comments, onSetComments, onFetchComments, onDeleteBtnClick }) => {
  const [isCommentBtnAct, setIsCommentBtnAct] = useState(false);

  function handleCommentBtnClick() {
    if (!isCommentBtnAct) {
      onFetchComments(post.id);
      setIsCommentBtnAct(true);
    } else {
      setIsCommentBtnAct(false);
      onSetComments([]);
    }
  }

  function handleDeleteBtnClick() {
    onDeleteBtnClick(post.id);
  }

  const isCommentDivHidden = isCommentBtnAct ? '' : `${styles.hidden}`;
  const isCommentBtnActive = isCommentBtnAct ? `${styles.commentButtonActive}` : '';

  return (
    <li className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.checkbox}>
          <input className={styles.checkboxInput} type='checkbox' id={post.id} />
            <span className={styles.checkboxCheckmark}></span>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={`${styles.button} ${styles.editButton}`}></button>
          <button
            className={`${styles.button} ${styles.deleteButton}`}
            onClick={handleDeleteBtnClick}>
          </button>
        </div>
      </div>
      <div className={styles.userWrapper}>
        <img className={styles.userIcon} src={userIcon} alt='Иконка пользователя' />
        <p className={styles.author}>{post.username}</p>
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.text}>{post.body}</p>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.favoriteButton}`}></button>
        <button className={`${styles.button} ${styles.commentButton} ${isCommentBtnActive}`} onClick={handleCommentBtnClick}></button>
      </div>
      <div className={`${styles.commentsContainer} ${isCommentDivHidden}`}>
        <h3 className={styles.commentsTitle}>Комментарии</h3>
        <ul className={styles.commentsList}>
          {comments.map((comment) => {
            return <PostCommentItem key={comment.id} comment={comment} />
          })}
        </ul>
      </div>
    </li>
  );
}

export default PostCard;