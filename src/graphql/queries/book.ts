import gql from "graphql-tag";

export const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      name
      wallpaper
      cover
      createdAt
      author {
        id
        name
      }
      publisher {
        id
        name
      }
    }
  }
`;

export const GET_BOOKS = gql`
  query books($pagination: PaginationInput!) {
    books(pagination: $pagination) {
      books {
        id
        name
        cover
        wallpaper
        createdAt
        author {
          id
          name
        }
        publisher {
          id
          name
        }
      }
      pagination {
        limit
        page
        total
      }
    }
  }
`;
