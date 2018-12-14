import React, { Suspense, useState } from 'react';
import Spinner from '../utils/spinner';
import ErrorBoundary from '../utils/error-boundary';
import Resource from '../utils/cache';
import MOCK_DATA from '../utils/mock-data';
import { shiftKey } from '../utils/key-modifiers';
import ConnectionInidicator from '../utils/connection-indicator';
import useObservable from '../utils/use-observable';

function fetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        shiftKey.value
          ? reject(url)
          : resolve(MOCK_DATA[url]),
      1000
    );
  });
}

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
  const [expandedPostId, setExpandedPostId] = useState(
    null
  );
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
  const shiftKeyPressed = useObservable(
    shiftKey,
    shiftKey.value
  );

  return (
    <Suspense fallback={<Spinner />} maxDuration={0}>
      <ErrorBoundary>
        <Posts />
      </ErrorBoundary>
      <ConnectionInidicator connected={!shiftKeyPressed} />
    </Suspense>
  );
};
