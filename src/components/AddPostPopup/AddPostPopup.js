import { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import styles from '../EditPostPopup/EditPostPopup.module.css';

const AddPostPopup = ({ isOpen, onClose, onAddPost }) => {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    setTitle('');
    setBodyText('');
  }, [isOpen]);

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeBodyText(e) {
    setBodyText(e.target.value);
  }

  function handleChangeAuthor(e) {
    setAuthor(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPost({
      userId: author,
      title: title,
      body: bodyText
    });
  }

  function handleCancelBtnClick(e) {
    e.preventDefault();
    onClose();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCancel={handleCancelBtnClick}
      title={'Добавить пост'}
      buttonText={'Добавить'}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label htmlFor='addPostTitle' className={styles.label}>Название</label>
          <input
            id='addPostTitle'
            type='text'
            className={styles.input}
            minLength='2'
            placeholder='Введите название поста'
            required
            value={title || ''}
            onChange={handleChangeTitle} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor='addPostBody' className={styles.label}>Текст</label>
          <input
            id='addPostBody'
            type='text'
            className={styles.input}
            minLength='2'
            placeholder='Введите текст поста'
            required
            value={bodyText || ''}
            onChange={handleChangeBodyText} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor='addPostAuthor' className={styles.label}>Автор</label>
          <select
            id='addPostAuthor'
            className={`${styles.input} ${styles.select}`}
            value={author || ''}
            onChange={handleChangeAuthor}>
            <option value='1'>Bret</option>
            <option value='2'>Antonette</option>
            <option value='3'>Samantha</option>
            <option value='4'>Karianne</option>
            <option value='5'>Kamren</option>
            <option value='6'>Leopoldo_Corkery</option>
            <option value='7'>Elwyn.Skiles</option>
            <option value='8'>Maxime_Nienow</option>
            <option value='9'>Delphine</option>
            <option value='10'>Moriah.Stanton</option>
          </select>
        </div>
      </div>
    </PopupWithForm>
  );
}

export default AddPostPopup;