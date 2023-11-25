import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import postsSelector from '../selectors';
import { fetchPostsList } from '../slice';
import Header from '../../../components/Header/Header';
import PostCardList from '../PostCardList/PostCardList';
import Footer from '../../../components/Footer/Footer';
import Loader from '../../../components/Loader/Loader';
import ErrorDisplay from '../../../components/ErrorDisplay/ErrorDisplay';
import Empty from '../../../components/Empty/Empty';
import Pagination from '../Pagination/Pagination';
import styles from './PostPage.module.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const selectedPosts = useAppSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  useEffect(() => {
    setPosts(selectedPosts.posts);
    setLoading(selectedPosts.loading);
    setError(selectedPosts.error);
  }, [selectedPosts]);

  if (!posts) {
    return <Empty />;
  }

  if (error) {
    return <ErrorDisplay />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main>
        {
          loading ? <Loader /> : <PostCardList posts={itemsToDisplay} />
        }
        <Pagination
          isLoading={loading}
          posts={posts}
          total={posts.length}
          onSetItemsToDisplay={setItemsToDisplay}
        />
      </main>
      <Footer />
    </div>
  );
}

export default PostsPage;