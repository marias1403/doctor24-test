import styles from './ErrorDisplay.module.css';

const ErrorDisplay = () => {
  return (
    <div className={styles.errorWrapper}>
      <h2 className={styles.title}>Не получилось получить данные</h2>
      <p className={styles.text}>Попробуйте перезагрузить страницу</p>
    </div>
  );
}

export default ErrorDisplay;