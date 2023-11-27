import styles from './PostListFilters.module.css';
import sortIcon from '../../../assets/images/sort-icon.svg';

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
        <h2 className={styles.title}>Фильтры</h2>
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <label htmlFor='selectUserName' className={styles.text}>По имени пользователя</label>
            <select id='selectUserName' className={styles.selectInput}>
              <option value='all'>Все пользователи</option>
              <option value='Bret'>Bret</option>
              <option value='Antonette'>Antonette</option>
              <option value='Samantha'>Samantha</option>
              <option value='Karianne'>Karianne</option>
              <option value='Kamren'>Kamren</option>
              <option value='Leopoldo_Corkery'>Leopoldo_Corkery</option>
              <option value='Elwyn.Skiles'>Elwyn.Skiles</option>
              <option value='Maxime_Nienow'>Maxime_Nienow</option>
              <option value='Delphine'>Delphine</option>
              <option value='Moriah.Stanton'>Moriah.Stanton</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.text} htmlFor='textInput'>По названию поста</label>
            <input type='text' id='textInput' className={styles.textInput} />
          </div>
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
              <input className={styles.checkboxInput} type='checkbox' id='favoritesCheckbox' />
              <span className={styles.checkboxCheckmark}></span>
            </div>
            <label htmlFor='favoritesCheckbox' className={styles.text}>Избранные</label>
          </div>
          <button className={styles.filterButton}>Применить фильтры</button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Сортировка</h2>
        <div className={styles.sortWrapper}>
          <button className={styles.sortButton}>
            <img className={styles.sortButtonIcon} src={sortIcon} alt='Иконка сортировки' />
            <span className={styles.sortButtonText}>По ID</span>
          </button>
          <button className={styles.sortButton}>
            <img className={styles.sortButtonIcon} src={sortIcon} alt='Иконка сортировки' />
            <span className={styles.sortButtonText}>По названию</span>
          </button>
          <button className={styles.sortButton}>
            <img className={styles.sortButtonIcon} src={sortIcon} alt='Иконка сортировки' />
            <span className={styles.sortButtonText}>По имени пользователя</span>
          </button>
          <button className={styles.sortButton}>
            <img className={styles.sortButtonIcon} src={sortIcon} alt='Иконка сортировки' />
            <span className={styles.sortButtonText}>По избранным</span>
          </button>
        </div>
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
  );
}

export default PostListFilters;