import styles from './PostListFilters.module.css';

const PostListFilters = ({ itemsQuantityPerPage, onSetItemsQuantityPerPage, postsTotal }) => {
  function changeItemsPerPage(event) {
    const selectedValue = event.target.value;
    selectedValue === 'all'
      ? onSetItemsQuantityPerPage(postsTotal)
      : onSetItemsQuantityPerPage(parseInt(selectedValue, 10))
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <span className={styles.text}>По названию поста</span>
          <span className={styles.text}>По имени пользователя</span>
          <span className={styles.text}>По избранным</span>
        </div>
        <div className={styles.postsQuantity}>
          <p className={styles.text}>Показывать постов на странице:</p>
          <div className={styles.radioItem}>
            <div className={styles.radio}>
              <input
                id='itemsPerPage10'
                className={styles.radioInput}
                type='radio'
                name='itemsPerPage'
                value='10'
                checked={itemsQuantityPerPage === 10}
                onChange={changeItemsPerPage} />
              <span className={styles.radioCheckmark}></span>
            </div>
            <label htmlFor='itemsPerPage10' className={styles.text}>10</label>
          </div>
          <div className={styles.radioItem}>
            <div className={styles.radio}>
              <input
                id='itemsPerPage20'
                className={styles.radioInput}
                type='radio'
                name='itemsPerPage'
                value='20'
                checked={itemsQuantityPerPage === 20}
                onChange={changeItemsPerPage} />
              <span className={styles.radioCheckmark}></span>
            </div>
            <label htmlFor='itemsPerPage20' className={styles.text}>20</label>
          </div>
          <div className={styles.radioItem}>
            <div className={styles.radio}>
              <input
                id='itemsPerPage50'
                className={styles.radioInput}
                type='radio'
                name='itemsPerPage'
                value='50'
                checked={itemsQuantityPerPage === 50}
                onChange={changeItemsPerPage} />
              <span className={styles.radioCheckmark}></span>
            </div>
            <label htmlFor='itemsPerPage50' className={styles.text}>50</label>
          </div>
          <div className={styles.radioItem}>
            <div className={styles.radio}>
              <input
                id='itemsPerPage100'
                className={styles.radioInput}
                type='radio'
                name='itemsPerPage'
                value='100'
                checked={itemsQuantityPerPage === 100}
                onChange={changeItemsPerPage} />
              <span className={styles.radioCheckmark}></span>
            </div>
            <label htmlFor='itemsPerPage100' className={styles.text}>100</label>
          </div>
          <div className={styles.radioItem}>
            <div className={styles.radio}>
              <input
                id='itemsPerPageAll'
                className={styles.radioInput}
                type='radio'
                name='itemsPerPage'
                value='all'
                checked={itemsQuantityPerPage === postsTotal}
                onChange={changeItemsPerPage} />
              <span className={styles.radioCheckmark}></span>
            </div>
            <label htmlFor='itemsPerPageAll' className={styles.text}>Все</label>
          </div>
        </div>
      </div>
      <button className={styles.addButton}>+ Добавить пост</button>
    </div>
  );
}

export default PostListFilters;