import React, { Component } from 'react';
import MOCK_DATA from '../utils/mock-data';
import Spinner from '../utils/spinner';
import { shiftKey } from '../utils/key-modifiers';
import ConnectionIndicator from '../utils/connection-indicator';

function get(url) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        shiftKey.value
          ? reject({ url })
          : resolve(MOCK_DATA[url]),
      1000
    );
  });
}

const Error = ({ url }) => (
  <div className="error">Error loading ${url}</div>
);

/* 
 Post component - renders a single post
*/
class Post extends Component {
  state = {
    error: null,
    isLoading: false,
    postDetails: null
  };

  componentDidUpdate() {
    const { post, isExpanded } = this.props;
    const { postDetails, isLoading } = this.state;
    if (isExpanded && !postDetails && !isLoading) {
      this.setState({ isLoading: true });
      get(`/posts/${post.id}`)
        .then(postDetails => {
          this.setState({
            isLoading: false,
            postDetails
          });
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error
          });
        });
    }
  }

  onClick = () => {
    const { post, onClick } = this.props;
    onClick(post.id);
  };

  render() {
    const { isExpanded, post } = this.props;
    const { error, isLoading, postDetails } = this.state;

    let content = null;

    if (error) {
      content = <Error {...error} />;
    } else if (isLoading) {
      content = <Spinner />;
    } else if (postDetails) {
      content = postDetails.content;
    }

    return (
      <div className="card" onClick={this.onClick}>
        <div className="card__title">{post.title}</div>
        {isExpanded && (
          <div className="card__content">{content}</div>
        )}
      </div>
    );
  }
}

/* 
 Example app - renders a list of posts
*/
export default class ExampleApp extends Component {
  state = {
    error: null,
    expandedPostId: null,
    isLoading: true,
    posts: []
  };

  componentDidMount() {
    this.subscription = shiftKey.subscribe(value => {
      this.setState({ shiftKey: value });
    });

    get('/posts')
      .then(posts => {
        this.setState({
          isLoading: false,
          posts
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error
        });
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  onPostClick = id => {
    this.setState({
      expandedPostId: id
    });
  };

  render() {
    const {
      error,
      isLoading,
      posts,
      expandedPostId,
      shiftKey
    } = this.state;

    if (error) {
      return <Error {...error} />;
    }

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <>
        {posts.map(post => (
          <Post
            isExpanded={expandedPostId === post.id}
            key={post.id}
            onClick={this.onPostClick}
            post={post}
          />
        ))}
        <ConnectionIndicator connected={!shiftKey} />
      </>
    );
  }
}
