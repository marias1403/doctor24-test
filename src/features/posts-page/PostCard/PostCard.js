import { useState } from 'react';
import styles from './PostCard.module.css';
import PostCommentItem from '../PostCommentItem/PostCommentItem';
import userIcon from '../../../assets/images/user-icon.svg';

const PostCard = ({ post, comments, onSetComments, onFetchComments }) => {
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

  const commentsDivHiddenClass = `${styles.commentsContainer} ${styles.hidden}`;
  const commentBtnClass = `${styles.button} ${styles.commentButton}`;
  const commentBtnClassAct = `${styles.button} ${styles.commentButton} ${styles.commentButtonActive}`;

  return (
    <li className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.checkbox}>
          <input className={styles.checkboxInput} type='checkbox' id={post.id} />
            <span className={styles.checkboxCheckmark}></span>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={`${styles.button} ${styles.editButton}`}></button>
          <button className={`${styles.button} ${styles.deleteButton}`}></button>
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
        <button className={isCommentBtnAct ? commentBtnClassAct : commentBtnClass} onClick={handleCommentBtnClick}></button>
      </div>
      <div className={isCommentBtnAct ? styles.commentsContainer : commentsDivHiddenClass}>
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