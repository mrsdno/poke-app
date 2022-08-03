import React from 'react'

function PokemonList() {
  return (
    <div>

      <div class="container margin-cards">
        <div class="card-group">

          <div class="pokemon card">
            
            <img class="card-img-top team-image" src="" alt="Card image pokemon 1"/>

            <div class="card-body">
              <h5 class="card-title text-uppercase">Name 1</h5>
              <p class="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
          
            <button class="btn btn-secondary add-pokemon" type="submit" id="add-pokemon">Choose your pokemon</button>
            
          </div>

          <div class="pokemon card">
            
            <img class="card-img-top team-image" src='' alt="Card image pokemon 2"/>

            <div class="card-body">

              <h5 class="card-title text-uppercase">Name 2</h5>

              <p class="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>

            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
            
          </div>

          <div class="pokemon card">
            <img class="card-img-top team-image" src='' alt="Card image pokemon 3"/>

            <div class="card-body">
              <h5 class="card-title text-uppercase">Name 3</h5>

              <p class="card-text">
                Height:  decimetres
                Weight:  hectograms
                Type:  
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
            
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
            
          </div>

        </div>
      </div>
    

      <div class="container margin-cards">
        <div class="card-group">
            
          <div class="pokemon card">
                
            <img class="card-img-top team-image" src='' alt="Card image pokemon 4"/>

            <div class="card-body">

              <h5 class="card-title text-uppercase">{}</h5>

              <p class="card-text">
                Height: {} decimetres
                Weight: {} hectograms
                Type: {} 
              </p>
            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                
          </div>

          <div class="pokemon card">
            
            <img class="card-img-top team-image" src='' alt="Card image pokemon 5"/>
            <div class="card-body">

              <h5 class="card-title text-uppercase">{}</h5>

              <p class="card-text">
                Height: {} decimetres
                Weight: {} hectograms
                Type: {} 
              </p>

            </div>

            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                    
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                
          </div>
            
          <div class="pokemon card">
                
            <img class="card-img-top team-image" src='' alt="Card image pokemon 6"/>

            <div class="card-body">
              <h5 class="card-title text-uppercase">Name 6</h5>

              <p class="card-text">
                Height: {} decimetres
                Weight: {} hectograms
                Type: {} </p>
            </div>
            
            <button class="btn btn-outline-danger delete-pokemon" type="submit" id="delete-pokemon" data-id=''>Delete Pokemon</button>
                
            <button class="btn btn-secondary add-pokemon" type="button" id="add-pokemon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose your pokemon</button>
                
          </div>
        </div>
      </div>

    </div>
  )
}

export default PokemonList;