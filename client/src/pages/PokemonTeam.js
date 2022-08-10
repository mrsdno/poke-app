import React, {useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TEAM } from '../utils/mutations';
import { QUERY_ME, QUERY_TEAMS } from "../utils/queries";
import TeamList from '../components/TeamList'
import './pages.css';

function PokemonTeam() {
  const [teamName, setText] = useState("");
  const { loading, data: userData } = useQuery(QUERY_ME);
  const { loadingTeams, data: teams } = useQuery(QUERY_TEAMS, { variables: { username: userData?.me.username } })
  const [addTeam, { error }] = useMutation(ADD_TEAM, {
    update(cache, { data: { addTeam } }) {
      // could not exist yet, so wrap in a try/catch
      try {
        const { me } = cache.readQuery({ query: QUERY_ME } );

        // update team array's cache
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, teams: [...me.teams, addTeam] } },
        });
      } catch (e) {
        console.warn("First interation by user");
      }

      // update thought array's cache
      const { teams } = cache.readQuery({
        query: QUERY_TEAMS,
        variables: { username: userData?.me.username },
      });
      cache.writeQuery({
        query: QUERY_TEAMS,
        variables: { username: userData?.me.username },
        data: { teams: [addTeam, ...teams]},
      });
    }
  })

      const handleChange = (event) => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
        }
  };
  
  const handleAddTeam = async (event) => {
    event.preventDefault();
    console.log(teams);

      try {
        const { data } = await addTeam({
          variables: { teamName, userData, isFavorite: false },
        });
      } catch (e) {
        console.error(e);
      }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="PokemonTeam">
      <div className="container-v teambox">
        <form id="add-team" onSubmit={handleAddTeam}>
          <input
            id="team-name"
            value={teamName}
            placeholder="team name"
            onChange={handleChange}
          ></input>
          <button className="btn-1" type="submit" id="add-team">
            Add Team
          </button>
        </form>
        <div className="container-h ">
          {teams && (
            <TeamList
              teams={teams.teams}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonTeam;