var getUserChoice = (userInput) => {
userInput = userInput.toLowerCase(); 
if(userInput === 'rock'|| userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
}else {
    return 'ERROR: Type rock, paper or scissors'
}
}


var getComputerChoice = () => {
   let num = Math.floor(Math.random()*3)
if(num === 0){
    return 'rock'
}else if(num === 1){
    return 'paper'
}else if(num === 2){
    return 'scissors'
}
}


var determineWinner = (UserChoice, ComputerChoice) => {
if(UserChoice === ComputerChoice){
    console.log('Tied');
}else if(UserChoice === 'rock'){
    if(ComputerChoice === 'scissors'){
        console.log('User Won!')
    }else{
        console.log('Computer Won!')
    }
}else if(UserChoice === 'paper'){
    if(ComputerChoice === 'rock'){
        console.log('User Won!')
    }else{
        console.log('Computer Won!')
}
}else if(UserChoice === 'scissors'){
    if(ComputerChoice === 'rock'){
        console.log('User Won!')
    }else{
        console.log('Computer Won!')
    }
}else if(UserChoice === 'bomb'){
    if(ComputerChoice === 'rock'){
            console.log('User beats all!')
    }else{
        console.log('User beats all!')
    }
}
}

var playGame = () => {
    var UserChoice = getUserChoice('bomb');
    var ComputerChoice = getComputerChoice();
    console.log ('User Choice: ' + UserChoice); 
    console.log('Computer Choice: ' + ComputerChoice);

    determineWinner(UserChoice, ComputerChoice)

} 
playGame(); 
