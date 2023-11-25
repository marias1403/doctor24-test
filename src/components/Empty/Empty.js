import styles from './Empty.module.css';
import icon from '../../assets/images/empty-icon.svg';

const Empty = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={icon} alt='Нет постов' />
      <h2 className={styles.title}>Нет постов</h2>
    </div>
  );
}

export default Empty;