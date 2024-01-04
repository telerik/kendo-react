import gql from "graphql-tag";
export const GITHUB_REPO_QUERY = gql`
query {
  repository(owner:"graphql", name:"graphql-js") {
    issues(last:100) {
      edges {
        node {
          title
          state
          number
          body
          createdAt
          author{
            login
            avatarUrl
          }
          assignees (last: 10) {
              nodes {
                name
                avatarUrl
              }
          }
          url
          labels(first:5) {
            edges {
              node {
                name,
                color
              }
            }
          }
        }
      }
    }
  }
}`;
export const GITHUB_REPO_QUERY_REACT = gql`
query {
    repository(owner:"facebook", name:"react") {
      issues(last:100) {
        edges {
          node {
            title
            state
            number
            body
            createdAt
            author{
              login
              avatarUrl
            }
            assignees (last: 10) {
                nodes {
                  name
                  avatarUrl
                }
            }
            url
            labels(first:5) {
              edges {
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }`;

  export function getQuery(repo){
    if(repo === "gql"){
        return GITHUB_REPO_QUERY
    } else if(repo === "react"){
        return GITHUB_REPO_QUERY_REACT
    }
  }