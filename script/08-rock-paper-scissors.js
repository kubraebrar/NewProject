// we will create the object 
         
        let score = JSON.parse(localStorage.getItem('score'));

          //BURDA DA VERİ OKUMA YAPIYO TEKRARDAN OBJECT'E ÇEVİRİYO yani object ksımı yerine bunu yazabiliriz 

          //console.log(JSON.parse(localStorage.getItem('score')));

          if (score === null){
              score ={
              wins:0,
              losses:0,
              tie:0
            };
          }
          //score null olduğunda yani reset butonuna basınca bu değerler oluyo yani sıfırlanıyo 


          //----- SETINTERVAL() FUNCTION -------
          //auto play tuşuna basınca çalışmasını tekrar basınca da durmasını istiyorsan eğer 1- setInterval()’den dönen ID'yi saklamak 2- Butonun şu an çalışıp çalışmadığını bilmek için bir "durum" değişkeni 3- Butona tıklanınca bu iki şeyi kontrol etmek
          // JavaScript'te setInterval() fonksiyonu belirli aralıklarla bir işlemi sürekli olarak tekrarlar. Ancak bu tekrar döngüsünü iptal etmek istersen, clearInterval() fonksiyonunu kullanman gerekir.Ve clearInterval() durdurmak için IDye ihtiyacın var o yüzden bi ID değeri oluşturman lazım 
          // Durum değişkeni ise kontrolü yapmayı sağlar 


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
           const computerMove = pickComputerMove(); // we call the function  but we get the error like this'computer is not defined'how we can solve this problem  

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

              localStorage.setItem('score',JSON.stringify(score)); //save the localstorage and only support string so we convert with the json BURDA VERİ EKLEME YAPTIK 

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
            // return statement lets us get a value out of the function 

          }
           