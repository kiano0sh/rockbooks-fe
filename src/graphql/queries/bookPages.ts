import gql from "graphql-tag";

export const GET_PAGES = gql`
  query pages($id: ID!, $pagination: PaginationInput!) {
    pages(id: $id, pagination: $pagination) {
      bookPages {
        content
        pageNumber
      }
      pagination {
        limit
        page
        total
      }
    }
  }
`;
