
import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TEAM } from '../utils/mutations';
import { QUERY_ME, QUERY_TEAMS } from "../utils/queries";
import TeamList from '../Components/TeamList'
import './pages.css';
import { Link } from 'react-router-dom';


function PokemonTeam() {
  const [teamName, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { loading, data: userData } = useQuery(QUERY_ME);
  const { loadingTeams, data: teams } = useQuery(QUERY_TEAMS, { variables: { username: userData?.me.username } });

  const [addTeam, { error }] = useMutation(ADD_TEAM, {
    update(cache, { data: { addTeam } }) {
      // could not exist yet, so wrap in a try/catch
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });

        // update team array's cache
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, teams: [...me.teams, addTeam] } },
        });
      } catch (e) {
        console.warn("First interation by user");
      }

      // update teams array's cache
      const { teams } = cache.readQuery({
        query: QUERY_TEAMS,
        variables: { username: userData?.me.username },
      });
      cache.writeQuery({
        query: QUERY_TEAMS,
        variables: { username: userData?.me.username },
        data: { teams: [addTeam, ...teams] },
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
    // console.log(teams);

    if (!teamName) {
      setErrorMessage('Please enter a team name!')
    }
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
            placeholder="Name your team!"
            onChange={handleChange}
            className="input-bar"
          ></input>
          <button className="btn-1" type="submit" id="add-team">
            Add Team
          </button>
          <Link to="/">
            <button className='btn-3'>All other Teams</button>
          </Link>
        </form>

        {/* error message if teamName is empty */}
        {errorMessage && (
          <div>
            <p>
              {errorMessage}
            </p>
          </div>
        )}


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