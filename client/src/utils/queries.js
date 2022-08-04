import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      teamCount
      email
      teams {
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
        isFavorite
      }
    }
  }
`;

export const QUERY_FAVORITE_TEAMS = gql`
  query MyFavTeams {
    myFavTeams {
      _id
      teamName
      createdAt
      username
      pokemon {
        type
        _id
        teamId
        name
        height
        weight
        image
        description
      }
      isFavorite
    }
  }
`;

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      username
      email
      teamCount
      teams {
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
        isFavorite
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      teamCount
      teams {
        _id
        teamName
        createdAt
        username
        pokemon {
          teamId
          _id
          name
          height
          weight
          type
          image
          description
        }
        isFavorite
      }
    }
  }
`;

export const QUERY_TEAMS = gql`
  query Teams($username: String) {
    teams(username: $username) {
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
      isFavorite
    }
  }
`;

export const QUERY_TEAM = gql`
  query Team($id: ID!) {
    team(_id: $id) {
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
      isFavorite
    }
  }
`;