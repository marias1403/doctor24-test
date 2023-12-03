import styles from './PopupWithForm.module.css';

const PopupWithForm = (
  {
    children,
    isOpen,
    onClose,
    onSubmit,
    onCancel,
    title,
    buttonText
  }) => {
  const isPopupOpen = isOpen ? `${styles.opened}` : '';
  return (
    <div onMouseDown={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }} className={`${styles.popup} ${isPopupOpen}`}>
      <div className={styles.container}>
        <button
          onMouseDown={onClose}
          className={styles.closeButton}
          type='button'>
        </button>
        <h2 className={styles.title}>{title}</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          {children}
          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              type='submit'>
              {buttonText}
            </button>
            <button
              className={`${styles.button} ${styles.cancelButton}`}
              onClick={onCancel}>
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;