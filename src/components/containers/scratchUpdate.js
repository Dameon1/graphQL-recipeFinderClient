import gql from 'graphql-tag';

export default gql`
  mutation updateNumber($index: String!,$value: String!) {
    updateNumber(value:$value,index:$index) @client {
      number
    }
  }
`;