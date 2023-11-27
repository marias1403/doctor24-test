import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Архипова Мария для Доктор24</h1>
      <button className={styles.addButton}>+ Добавить пост</button>
    </header>
  )
}

export default Header;