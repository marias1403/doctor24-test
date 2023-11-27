import { useState, useEffect } from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ isLoading, posts, total, itemsQuantityPerPage, onSetItemsToDisplay }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsQuantityPerPage;
  const endIndex = startIndex + itemsQuantityPerPage;

  useEffect(() => {
    onSetItemsToDisplay(posts.slice(startIndex, endIndex));
  }, [currentPage, endIndex, posts, onSetItemsToDisplay, startIndex]);

  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(total / itemsQuantityPerPage);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || itemsQuantityPerPage === posts.length}
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
          disabled={currentPage === totalPages || itemsQuantityPerPage === posts.length}
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