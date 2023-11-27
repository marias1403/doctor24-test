import styles from './PostCard.module.css';
import userIcon from '../../../assets/images/user-icon.svg';

const PostCard = ({ post }) => {
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
        <button className={`${styles.button} ${styles.commentButton}`}></button>
      </div>
    </li>
  );
}

export default PostCard;