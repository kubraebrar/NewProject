
        let score = JSON.parse(localStorage.getItem('score'));

          

          if (score === null){
              score ={
              wins:0,
              losses:0,
              tie:0
            };
          }
          
          let setIntervalId;
          let isAutoPlaying =false;
  

          function autoPlay(){
            
            if(!isAutoPlaying){

               setIntervalId=setInterval(() => {
              const playerMove =pickComputerMove();
              playGame(playerMove);
            },1000);
            isAutoPlaying =true;

            }
            else{
              clearInterval(setIntervalId);
              isAutoPlaying = false;
            }
           
            
            }

          document.querySelector('.js-rock')
          .addEventListener('click',() => {
            playGame('rock');

          });

          document.querySelector('.js-paper')
          .addEventListener('click',() => {
            playGame('paper');
          });

          document.querySelector('.js-scissors')
          .addEventListener('click',() => {
            playGame('scissors');
          });


          function playGame(playerMove){
           const computerMove = pickComputerMove();   

              let result = '';
              if(playerMove ==='scissors'){
                 
                  if(computerMove === 'rock'){
                    result = 'You lose';
                  }else if(computerMove === 'paper'){
                    result = 'You win';
                  }else if (computerMove === 'scissors'){
                    result = 'Tie';
                  }

              } 
              else if(playerMove === 'rock' ){

                  if(computerMove === 'rock'){
                      result = 'Tie';
                  }else if(computerMove === 'paper'){
                      result = 'You lose';
                  }else if (computerMove ===
                  'scissors'){
                      result ='You win';
                  }

              }
              else if(playerMove === 'paper'){

                  if(computerMove === 'rock'){
                      result = 'You win';
                  }else if(computerMove === 'paper'){
                      result = 'Tie';
                  }else if (computerMove === 'scissors'){
                      result ='You lose';
                  }
              }

              if( result === 'You win'){
                score.wins += 1;
              }
              else if (result === 'You lose'){
                score.losses += 1;
              }
              else if(result === 'Tie'){
                score.tie += 1;
              }

              localStorage.setItem('score',JSON.stringify(score)); 

              document.querySelector('.js-result').innerHTML=result; 

              document.querySelector('.js-moves').innerHTML = ` You
              <img src="images/${playerMove}-emoji.png" class="img">
              <img src="images/${computerMove}-emoji.png" class="img">
              Computer`;

              updateScore();


          }

          function updateScore(){

              document.querySelector('.js-score').innerHTML =` Wins:${score.wins}, Losses:${score.losses}, Ties:${score.tie}`;
          }


          
          function pickComputerMove(){
            const randomNumber=Math.random()
            let computerMove;
            //let computerMove =''; 
            
            if(randomNumber >=0 && randomNumber< 1/3){
              computerMove ='rock';

            }
            else if(randomNumber >= 1/3 && randomNumber <2/3)
            {
              computerMove='paper';

            }
            else if (randomNumber >= 2/3 && randomNumber <1)
            {
              computerMove = 'scissors';
            }

            return computerMove;

          }