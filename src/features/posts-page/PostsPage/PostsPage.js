import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import postsSelector from '../selectors';
import { fetchPostsList } from '../slice';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
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
}

export default PostsPage;