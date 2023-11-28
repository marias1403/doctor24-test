import styles from './DeleteConfirmModal.module.css';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  const isModalOpen = isOpen ? `${styles.opened}` : '';
  return (
    <div onMouseDown={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }} className={`${styles.modal} ${isModalOpen}`}>
      <div className={styles.container}>
        <p className={styles.title}>Вы уверены, что хотите удалить этот пост?</p>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={onConfirm}>
            Подтвердить
          </button>
          <button
            className={`${styles.button} ${styles.cancelButton}`}
            onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;