import {useEffect, useState} from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import styles from './EditPostPopup.module.css';

const EditPostPopup = (
  {
    postTitle,
    postText,
    postAuthor,
    isOpen,
    onClose,
    onEditPost
  }) => {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    setTitle(postTitle);
    setBodyText(postText);
    setAuthor(postAuthor);
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
    onEditPost({
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
      title={'Редактировать пост'}
      buttonText={'Сохранить'}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label htmlFor='editPostTitle' className={styles.label}>Название</label>
          <input
            id='editPostTitle'
            type='text'
            className={styles.input}
            minLength='2'
            placeholder='Отредактируйте название'
            required
            value={title || ''}
            onChange={handleChangeTitle} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor='editPostBody' className={styles.label}>Текст</label>
          <input
            id='editPostBody'
            type='text'
            className={styles.input}
            minLength='2'
            placeholder='Отредактируйте текст'
            required
            value={bodyText || ''}
            onChange={handleChangeBodyText} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor='editPostAuthor' className={styles.label}>Автор</label>
          <select
            id='editPostAuthor'
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

export default EditPostPopup;