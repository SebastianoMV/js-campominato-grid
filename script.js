

document.querySelector('#start').addEventListener('click',init);

function init(){
  
  const container = document.querySelector('.smv-container');
  const difficolta = document.getElementById('difficolta').value;
  container.innerHTML = '';
  for(let i = 0; i < difficolta; i++){
     const sq = createSquare(container,difficolta)
     sq.innerHTML = `<span>${i}</span>`;
     sq.addEventListener('click', function(){
        this.classList.add('clicked');
     })
  }
}

function createSquare( target , value ){
    const sq = document.createElement( 'div' );
    sq.className = 'square square'+ value;
    target.append(sq);
    return sq;
}
