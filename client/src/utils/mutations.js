import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TEAM = gql`
mutation AddTeam($teamName: String!, $isFavorite: Boolean!) {
  addTeam(teamName: $teamName, isFavorite: $isFavorite) {
    _id
    teamName
    createdAt
    username
    pokemon {
      _id
      teamId
      name
      height
      weight
      type
      image
      description
    }
  }
}
`

export const ADD_POKEMON = gql`
  mutation AddPokemon(
    $teamId: String!
    $name: String!
    $height: String!
    $weight: String!
    $description: String!
    $type: [String!]
    $image: String!
  ) {
    addPokemon(
      teamId: $teamId
      name: $name
      height: $height
      weight: $weight
      description: $description
      type: $type
      image: $image
    ) {
      _id
      teamId
      name
      height
      weight
      type
      description
      image
    }
  }
`;

