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
mutation AddTeam($teamName: String!, $isFavorite: Boolean) {
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

// mutation for Editing Team
export const EDIT_TEAM = gql `
  mutation EditTeam(
    $teamName: String!,
    $isFavorite: Boolean,
    $pokemon: PokemonInput!
    ) {
      editTeam(
        teamName: $teamName,
        isFavorite: $isFavorite,
        pokemon: $pokemon
        ){
          _id
          teamName
          createdAt
          username
          isFavorite
          pokemon {
            _id
            teamId
            name
            height
            weight
            image
            description
          }
        }
    }
`;
// the above mutation expects the Following.  It will return a new Team, so any pokemon not edited will not be returned.  
// { 
//   "teamName": "Edit Team Name",
//   "isFavorite": true,
//   "pokemon": {
//     "_id": "62ed36a7b60b4486f40ebc9d",
//     "teamId": "62ed35ebb60b4486f40ebc96",
//     "name": "Edit Pokemon 1",
//     "height": "Edited height",
//     "weight": "edited Weight",
//     "type": ["Normal", "Rock"],
//     "image": "editedImgUrl",
//     "description": "Edited Description"
//   }
// }


export const DELETE_TEAM = gql`
  mutation DeleteTeam(
    $teamId: String!
  ){
    deleteTeam(
      teamId: $teamId
    ){
      _id
    }
  }
`;

export const ADD_POKEMON = gql`
  mutation AddPokemon(
    $teamId: String!
    $name: String!
    $height: Int!
    $weight: Int!
    $description: String!
    $type: [String]!
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

