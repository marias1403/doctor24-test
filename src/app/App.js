import { Suspense } from 'react';
import './App.module.css';
import PostsPage from '../features/posts-page/PostsPage/PostsPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Suspense>
          <PostsPage />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
