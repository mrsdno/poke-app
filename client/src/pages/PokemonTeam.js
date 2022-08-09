import React, {useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TEAM } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import TeamList from '../components/TeamList'
import './pages.css';

function PokemonTeam() {
    const [teamName, setText] = useState("");
    const [addTeam, { error }] = useMutation(ADD_TEAM);
  const { loading, data: userData } = useQuery(QUERY_ME);
    const teams= userData?.me.teams || []

  
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
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TeamList
              teams={teams}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonTeam;