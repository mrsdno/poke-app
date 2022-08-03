import React from 'react'

function PokemonTeam() {
  return (
    <div>
      <div class="container margin-cards">
        <div class="card-group">

          {/* first pokemon */}
          <div class="pokemon card">
            if pokemon selected, pokemon name here
            <img class="card-img-top team-image" src='' alt="Card image pokemon 1"/>

            <div class="card-body">
                <h5 class="card-title text-uppercase">name 1</h5>
                <p class="card-text">
                  Height:  decimetres
                  Weight:  hectograms
                  Type:  
                </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button class="btn btn-secondary add-pokemon" type="submit" id="add-pokemon">Choose your pokemon</button>
            
          </div>

          {/* second pokemon */}
          <div class="pokemon card">
            if pokemon selected, pokemon name here
            <img class="card-img-top team-image" src='' alt="Card image pokemon 2"/>
            <div class="card-body">
              <h5 class="card-title text-uppercase">Name 2</h5>
              <p class="card-text">
                Height: decimetres
                Weight:  hectograms
                Type:  
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
            
          </div>

          {/* third pokemon */}
          <div class="pokemon card">
            if pokemon selected, pokemon name here
            <img class="card-img-top team-image" src='' alt="Card image pokemon 3"/>
            <div class="card-body">
              <h5 class="card-title text-uppercase">pokemon name 3</h5>
              <p class="card-text">
                Height:  decimetres
                Weight: hectograms
                Type: 
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button> 
          </div>

        </div>
      </div>
    

      <div class="container margin-cards">
        <div class="card-group">

          {/* fourth pokemon */}
          <div class="pokemon card">
            if pokemon selected, pokemon name here
            <img class="card-img-top team-image" src='' alt="Card image pokemon 4"/>

            <div class="card-body">
              <h5 class="card-title text-uppercase">pokemon name 4</h5>
              <p class="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                  
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>  
          
          </div>

          {/* fifth pokemon*/}
          <div class="pokemon card">
            if pokemon selected, pokemon name here
            <img class="card-img-top team-image" src='' alt="Card image pokemon 5"/>

            <div class="card-body">
              <h5 class="card-title text-uppercase">pokemon 5 </h5>
              <p class="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                      
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                  
          </div>
              

          {/* pokemon 6 */}
          <div class="pokemon card">
            if pokemon selected, pokemon name here
            <img class="card-img-top team-image" src='' alt="Card image pokemon 6"/>

            <div class="card-body">
              <h5 class="card-title text-uppercase">pokemon name 6</h5>
              <p class="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type: 
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id='' >Delete Pokemon</button>
                  
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                  
              </div>
          </div>
      </div>
    </div>
  )
}

export default PokemonTeam;