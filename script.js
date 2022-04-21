const container = document.querySelector('.smv-container');
const listNumbers = [];

document.querySelector('#start').addEventListener('click',init);

function init(){
  const difficolta = document.getElementById('difficolta').value;
  for(let i = 0; i < difficolta; i++){
     const sq = createSquare(container,difficolta)
     sq.addEventListener('click', function(){
        this.classList.add('clicked');
     })
  }
}

function createSquare( target , value ){
    const sq = document.createElement( 'div' );
    sq.className = 'square square'+ value;
    const number = getUniqueRandomNumber( 1, value );
    sq.innerHTML = `<span>${number}</span>`;
    sq.classList.add(getOddEven(number));
    target.append(sq);
    return sq;
}

function getUniqueRandomNumber(min, max){
    let number = null;
    let valid = false;

    while(!valid){
        number = getRandomNumber(min, max);
        if(!listNumbers.includes(number)){
            valid = true;
            listNumbers.push(number)
        }
    }

    return number;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOddEven(n){
    if(n % 2) return 'odd';
    return 'even';
}