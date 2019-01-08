import gql from 'graphql-tag';

export default gql`
  mutation updateState($index: String!,$value: String!) {
    updateState(value:$value,index:$index) @client {
      number
    }
  }
`;