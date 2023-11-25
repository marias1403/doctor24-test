import { Suspense } from 'react';
import './App.module.css';
import PostsPage from '../features/posts-page/PostsPage/PostsPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.page}>
      <Suspense>
        <PostsPage />
      </Suspense>
    </div>
  );
}

export default App;
