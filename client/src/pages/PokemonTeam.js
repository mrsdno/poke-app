import React from 'react'
import './pages.css'

function PokemonTeam() {
  return (
    <div className='PokemonTeam'>
      <div className="container-v teambox">
        <div className="container-h ">

          {/* first pokemon */}
          <div className="pokemon">
            if pokemon selected, pokemon name here
            <img className="card-img-top team-image" src='' alt="Card1"/>

            <div className="card-body">
                <h5 className="card-title text-uppercase">name 1</h5>
                <p className="card-text">
                  Height:  decimetres
                  Weight:  hectograms
                  Type:  
                </p>
            </div>

            <button className="btn-2-s delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button className="btn-1-s  add-pokemon" type="submit" id="add-pokemon">Choose your pokemon</button>
            
          </div>

          {/* second pokemon */}
          <div className="pokemon card">
            if pokemon selected, pokemon name here
            <img className="card-top team-image" src='' alt="Card2"/>
            <div className="card-body">
              <h5 className="card-title text-uppercase">Name 2</h5>
              <p className="card-text">
                Height: decimetres
                Weight:  hectograms
                Type:  
              </p>
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
              <p className="card-text">
                Height:  decimetres
                Weight: hectograms
                Type: 
              </p>
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
              <p className="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>
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
              <p className="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>
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
              <p className="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type: 
              </p>
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