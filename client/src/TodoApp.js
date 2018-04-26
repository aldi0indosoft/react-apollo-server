import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function TodoApp({ data: { allPosts, refetch } }) {
    return (
        <div>
            <button onClick={() => refetch()}>Refresh</button>
            <ul>{allPosts && allPosts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </div>
    );
}

export default graphql(gql`
  query TodoAppQuery {
    allPosts {
      id
      title
    }
  }
`)(TodoApp);