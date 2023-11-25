import { useState, useEffect } from 'react';
import styles from './Pagination.module.css';
import { DEFAULT_ITEMS_PER_PAGE } from '../../../constants/constants';

const Pagination = ({ isLoading, posts, total, onSetItemsToDisplay }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = DEFAULT_ITEMS_PER_PAGE;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    onSetItemsToDisplay(posts.slice(startIndex, endIndex));
  }, [currentPage, endIndex, posts, onSetItemsToDisplay, startIndex]);

  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if (isLoading) {
    return;
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.button}
        >
          Назад
        </button>

        {generatePageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? `${styles.button} ${styles.currentButton}` : `${styles.button}` }
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.button}
        >
          Вперёд
        </button>
      </div>
      <div className={styles.text}>
        Страница {currentPage} из {totalPages}
      </div>
    </div>
  );
}

export default Pagination;