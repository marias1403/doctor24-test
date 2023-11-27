import styles from './PostCommentItem.module.css';
import userIcon from '../../../assets/images/user-icon.svg';

const PostCommentItem = ({ comment }) => {
  return (
    <li className={styles.commentItem}>
      <div className={styles.avatar}>
        <img className={styles.avatarIcon} src={userIcon} alt='Иконка пользователя' />
      </div>
      <div>
        <h4 className={styles.userName}>{comment.name}</h4>
        <p className={styles.userEmail}>{comment.email}</p>
        <p className={styles.commentText}>{comment.body}</p>
      </div>
    </li>
  );
}

export default PostCommentItem;