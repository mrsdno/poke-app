import React, {useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TEAM } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";

import './pages.css';

function PokemonTeam() {
    const [teamName, setText] = useState("");
  const [addTeam, { error }] = useMutation(ADD_TEAM);
    const { data: userData } = useQuery(QUERY_ME);

  
      const handleChange = (event) => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
        }
  };
  
  const handleAddTeam = async (event) => {
    event.preventDefault();
      console.log(userData);

      try {
        const { data } = await addTeam({
          variables: { teamName, userData },
        });
      } catch (e) {
        console.error(e);
      }
    };
  
  
  
  return (
    <div className='PokemonTeam'>
      <div className="container-v teambox">
        <form id="add-team" className='form-addteam' onSubmit={handleAddTeam}>
          <input id="team-name" className="team-name" value={teamName} placeholder="team name" onChange={handleChange}></input>
        <button className="btn-1" type="submit" id="add-team">Add Team</button>
        </form>
          <div className="container-h ">

          {/* first pokemon */}
          <div className="pokemon">
            if pokemon selected, pokemon name here
            <img className="card-img-top team-image" src='' alt="Card1"/>

            <div className="card-body">
                <h5 className="card-title text-uppercase">name 1</h5>
                <div className="card-text">
                  <p><b>Height:</b>  decimetres</p>
                  <p><b>Weight:</b>  hectograms</p>
                  <p><b>Type:</b> Dark </p>  
                </div>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button className="btn-1-s  add-pokemon" type="submit" id="add-pokemon" onClick={() => { window.location.assign('/pokemonlist') }}>Choose your pokemon</button>
            
          </div>

          {/* second pokemon */}
          <div className="pokemon card">
            if pokemon selected, pokemon name here
            <img className="card-top team-image" src='' alt="Card2"/>
            <div className="card-body">
              <h5 className="card-title text-uppercase">Name 2</h5>
              <div className="card-text">
                  <p><b>Height:</b>  decimetres</p>
                  <p><b>Weight:</b>  hectograms</p>
                  <p><b>Type:</b> Dark </p>  
                </div>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button className="btn-1-s add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
            
          </div>

          {/* third pokemon */}
          <div className="pokemon card">
            if pokemon selected, pokemon name here
            <img className="card-top team-image" src='' alt="Card3"/>
            <div className="card-body">
              <h5 className="card-title text-uppercase">pokemon name 3</h5>
              <div className="card-text">
                  <p><b>Height:</b>  decimetres</p>
                  <p><b>Weight:</b>  hectograms</p>
                  <p><b>Type: Dark</b> </p>  
                </div>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                
            <button className="btn-1-s add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button> 
          </div>

        </div>

        <div className="container-h">

          {/* fourth pokemon */}
          <div className="pokemon card">
            if pokemon selected, pokemon name here
            <img className="card-top team-image" src='' alt="Card4"/>

            <div className="card-body">
              <h5 className="card-title text-uppercase">pokemon name 4</h5>
              <div className="card-text">
                  <p><b>Height:</b>  decimetres</p>
                  <p><b>Weight:</b>  hectograms</p>
                  <p><b>Type:</b> Dark </p>  
                </div>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                  
            <button className="btn-1-s add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>  

          </div>

          {/* fifth pokemon*/}
          <div className="pokemon card">
            if pokemon selected, pokemon name here
            <img className="card-top team-image" src='' alt="Card5"/>

            <div classname="card-body">
              <h5 className="card-title text-uppercase">pokemon 5 </h5>
              <div className="card-text">
                  <p><b>Height:</b>  decimetres</p>
                  <p><b>Weight:</b>  hectograms</p>
                  <p><b>Type:</b> Dark </p>  
                </div>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                      
            <button className="btn-1-s add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                  
          </div>
              

          {/* pokemon 6 */}
          <div className="pokemon card">
            if pokemon selected, pokemon name here
            <img className="card-top team-image" src='' alt="Card6"/>

            <div className="card-body">
              <h5 className="card-title text-uppercase">pokemon name 6</h5>
              <div className="card-text">
                  <p><b>Height:</b>  decimetres</p>
                  <p><b>Weight:</b>  hectograms</p>
                  <p><b>Type:</b> Dark </p>  
                </div>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id='' >Delete Pokemon</button>
                  
            <button className="btn-1-s add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                  
          </div>
        </div>

      </div>
    

    </div>
  )
}

export default PokemonTeam;