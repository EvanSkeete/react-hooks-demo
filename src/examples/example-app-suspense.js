import React, { Suspense, useState } from 'react';
import Spinner from '../utils/spinner';
import ErrorBoundary from '../utils/error-boundary';
import Resource from '../utils/cache';
import useShiftKey from '../utils/use-shift-key';
import MOCK_DATA from '../utils/mock-data';

let shiftKeyPressed = false;

const fetch = url =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (shiftKeyPressed ? reject(url) : resolve(MOCK_DATA[url])),
      1000
    );
  });

const apiResource = new Resource(fetch);

const PostContent = ({ id }) => {
  const postDetails = apiResource.get(`/posts/${id}`);
  return postDetails.content;
};

const Post = ({ post, isExpanded, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(post.id)}>
      <div className="card__title">{post.title}</div>
      {isExpanded && (
        <div className="card__content">
          <Suspense fallback={<Spinner />} maxDuration={0}>
            <ErrorBoundary>
              <PostContent id={post.id} />
            </ErrorBoundary>
          </Suspense>
        </div>
      )}
    </div>
  );
};

const Posts = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const posts = apiResource.get('/posts');

  return posts.map(post => (
    <Post
      isExpanded={expandedPostId === post.id}
      key={post.id}
      onClick={setExpandedPostId}
      post={post}
    />
  ));
};

export default () => {
  shiftKeyPressed = useShiftKey();
  //console.log('shiftKeyPressed', shiftKeyPressed);

  return (
    <Suspense fallback={<Spinner />} maxDuration={0}>
      <ErrorBoundary>
        <Posts />
      </ErrorBoundary>
    </Suspense>
  );
};
