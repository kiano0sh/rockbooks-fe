import gql from "graphql-tag";

export const CREATE_BOOK_AUDIO = gql`
  mutation createBookAudio($input: CreateBookAudioInput!) {
    createBookAudio(input: $input) {
      id
      audio
      cursorStarts
      cursorEnds
      createdBy {
        displayName
        avatar
      }
    }
  }
`;
