import gql from "graphql-tag";

export const GET_PAGES = gql`
  query pages($id: ID!, $pagination: PaginationInput!) {
    pages(id: $id, pagination: $pagination) {
      bookPages {
        id
        content
        pageNumber
        bookAudios {
          id
          cursorStarts
          cursorEnds
          createdAt
          audio
          createdBy {
            displayName
            avatar
          }
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
