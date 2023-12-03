import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import postsSelector from '../selectors';
import {fetchPostsList, fetchUsers, deletePost, addPost} from '../slice';
import api from '../../../api/api';
import Header from '../../../components/Header/Header';
import PostListFilters from '../PostListFilters/PostListFilters';
import PostCardList from '../PostCardList/PostCardList';
import Pagination from '../Pagination/Pagination';
import Footer from '../../../components/Footer/Footer';
import Loader from '../../../components/Loader/Loader';
import ErrorDisplay from '../../../components/ErrorDisplay/ErrorDisplay';
import Empty from '../../../components/Empty/Empty';
import DeleteConfirmModal from '../../../components/DeleteConfirmModal/DeleteConfirmModal';
import EditPostPopup from '../../../components/EditPostPopup/EditPostPopup';
import AddPostPopup from '../../../components/AddPostPopup/AddPostPopup';
import styles from './PostPage.module.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [itemsQuantityPerPage, setItemsQuantityPerPage] = useState(10);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const dispatch = useAppDispatch();
  const selectedPostsPage = useAppSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPostsList());
  }, [dispatch]);

  useEffect(() => {
    setLoading(selectedPostsPage.loading);
    setPosts(preparePosts(selectedPostsPage.posts, selectedPostsPage.users));
    setError(selectedPostsPage.error);
  }, [selectedPostsPage]);

  function preparePosts(posts, users) {
    if (Object.keys(users).length === 0) {
      return;
    }
    let res = [];
    for (let post of posts) {
      res.push({
        id: post.id,
        body: post.body,
        title: post.title,
        username: users[post.userId].username,
      })
    }
    return res;
  }

  async function fetchCommentByPostId(id) {
    await api.comment.load(id)
      .then((res) => {
        setComments(res);
      })
      .catch((error) => {
        console.error('Ошибка при получении комментариев:', error);
        throw error;
      });
  }

  function handleEditPost() {

  }

  function handleAddPost(post) {
    api.post.create(post.title, post.body, post.userId)
      .then(() => {
        dispatch(addPost(post));
        setIsAddPopupOpen(false);
      })
      .catch((error) => {
        console.error('Ошибка при добавлении поста:', error);
        throw error;
      });
  }

  function handleAddPostBtnClick() {
    setIsAddPopupOpen(true);
  }

  async function handlePostDelete() {
    await api.post.delete(postIdToDelete)
      .then(() => {
        dispatch(deletePost(postIdToDelete));
        setPostIdToDelete(null);
      })
      .catch((error) => {
        console.error('Ошибка при удалении:', error);
        throw error;
      });
  }

  function handleDeleteBtnClick(postId) {
    setPostIdToDelete(postId);
  }

  function closeAllPopups() {
    setPostIdToDelete(null);
    setIsEditPopupOpen(false);
    setIsAddPopupOpen(false);
  }

  if (!posts) {
    return <Empty />;
  }

  if (error) {
    return <ErrorDisplay />;
  }

  return (
    <div className={styles.container}>
      <Header onBtnClick={handleAddPostBtnClick} />
      <main className={styles.main}>
        <PostListFilters
          itemsQuantityPerPage={itemsQuantityPerPage}
          onSetItemsQuantityPerPage={setItemsQuantityPerPage}
          postsTotal={posts.length}
        />
        {
          loading
            ? <Loader />
            : <PostCardList
              posts={itemsToDisplay}
              comments={comments}
              onSetComments={setComments}
              onFetchComments={fetchCommentByPostId}
              onDeleteBtnClick={handleDeleteBtnClick} />
        }
        <Pagination
          isLoading={loading}
          posts={posts}
          total={posts.length}
          itemsQuantityPerPage={itemsQuantityPerPage}
          onSetItemsToDisplay={setItemsToDisplay}
        />
      </main>
      <Footer />
      <DeleteConfirmModal
        isOpen={postIdToDelete !== null}
        postId={postIdToDelete}
        onClose={closeAllPopups}
        onConfirm={handlePostDelete}
      />
      <EditPostPopup
        postTitle={}
        postText={}
        postAuthor={}
        isOpen={isEditPopupOpen}
        onClose={closeAllPopups}
        onEditPost={handleEditPost}
      />
      <AddPostPopup
        isOpen={isAddPopupOpen}
        onClose={closeAllPopups}
        onAddPost={handleAddPost}
      />
    </div>
  );
}

export default PostsPage;