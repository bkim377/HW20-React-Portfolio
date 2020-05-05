import React from "react";

function Portfolio() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-sm-1"></div>
        <div class="col-sm-10">
            <div class="card">
            <div class = "card-body">
                <h2 class="card-title">My Programming Projects</h2>
            <div>

            <div class="row pl-3 pb-3">
              <img src="assets/imgs/PokeBattle.png" class="float-left" alt="PokéBattle" height="200" width="250"></img>
              <div class="col">
              <h5>Group Project Name: PokéBattle</h5>
              <p>A group project that takes in 2 users, chooses 1 random Pokémon for each of them, and then simulates a battle.</p>
                <a href="https://sleepy-headland-32384.herokuapp.com/">Deployed Link</a> 
              <p></p>
                <a href="https://github.com/drivelikejehu/PokeBattle">Link to GitHub code</a>
              </div>
            </div> 

           <div class="row pl-3 pb-3">
            <img src="assets/imgs/ConcertHunt.png" class="float-left" alt="ConcertHunt" height="200" width="250"></img>
            <div class="col">
            <h5>Group Project Name: ConcertHunt</h5>
            <p>A group project that searches up the top music artists in your area and what concerts they're hosting soon.</p>
              <a href="https://tomaspz.github.io/concerthunt/">Deployed Link</a> 
            <p></p>
              <a href="https://github.com/bkim377/concerthunt">Link to GitHub code</a>
            </div>
          </div> 

          <div class="row pl-3 pb-3">
            <img src="assets/imgs/NoteTaker.png" class="float-left" alt="NoteTaker" height="200" width="250"></img>
            <div class="col">
              <h5>Project Name: Note Taker</h5>
            <p>A page that lets the user create, save, modify, and delete notes on a single page.  Uses persistent notes 
              so that the user can return to the page later and pick up where they left off.
            </p>
            <p></p>
              <a href="https://github.com/bkim377/HW11-Note-Taker">Link to GitHub code</a>
            </div>
            </div>

          <div class="row pl-3 pb-3">
            <img src="assets/imgs/BurgersServer.png" class="float-left" alt="PasswordGenerator" height="200" width="250"></img>
            <div class="col">
              <h5>Project Name: Eat-A-Burger!</h5>
            <p>A page that lets the user list any number of burgers they choose and click buttons to let the site know they've been
              "devoured"  Starts with a list of 3 burgers by default.</p>
              <a href="https://sleepy-cove-85461.herokuapp.com/">Deployed Link</a> 
            <p></p>
              <a href="https://github.com/bkim377/HW13-Node-Express-Handlebars">Link to GitHub code</a>
            </div>
            </div>
           
            <div class="row pl-3 pb-3">
              <div class="col">
                <img src="assets/imgs/WeatherDashboard.png" class="float-left" alt="WeatherDashboard" height="200" width="250"></img>
                <h5>Project Name: WeatherDashboard</h5>
                <p>A page that retrieves the current weather for a requested city as well as the forecast for the next 5 days.  
                  Saves the data of all searched cities so they remain in the search history even if you close the browser window.</p>
                  <a href="https://bkim377.github.io/HW6-Weather-Dashboard/">Deployed Link</a> 
                <p></p>
                  <a href="https://github.com/bkim377/HW6-Weather-Dashboard">Link to GitHub code</a>
                </div>
              </div> 

              <div class="row pl-3 pb-3">
                <img src="assets/imgs/PasswordGenerator.png" class="float-left" alt="PasswordGenerator" height="200" width="250"></img>
                <div class="col">
                  <h5>Project Name: PasswordGenerator</h5>
                <p>A page that asks the user to set parameters for generating a random password: password length, 
                    and whether they want to use special characters, numbers, and/or lowercase and uppercase letters.</p>
                  <a href="https://bkim377.github.io/HW3-Password-Generator/">Deployed Link</a> 
                <p></p>
                  <a href="https://github.com/bkim377/HW3-Password-Generator">Link to GitHub code</a>
                </div>
                </div>
        </div>
        </div>
        </div>
    </div>
</div>
</div>
  );
}

export default Portfolio;
