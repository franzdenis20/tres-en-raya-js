
let turno = 0;

const tablero = [];

const ficha = ["X","O"];



const btnPulsado = (e, pos)=>{
    const btn = e.target;
    turno ++;
    const color = turno % 2 ? "green":"red";
    btn.style.backgroundColor = "black";
    btn.style.color = color;
    tablero[pos] = color;
    
    btn.innerHTML = turno % 2 ? ficha[0]: ficha[1];

    haGanado();

    

}

const Restaurar = ()=>{

    tablero.length = 0;
    document.querySelectorAll('button').forEach(
       //e => e.style.backgroundColor = "rgb(95, 10, 9)"
       e => e.innerHTML = ""
    );


    document.querySelectorAll('button').forEach(
        e => e.style.backgroundColor = "rgb(95, 10, 9)"
        
    );
    

}


const haGanado = ()=>{
    // comparmaos para el gandor y definimos para que no salga indefinido
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        alert(`Ganador Color ${tablero[0]}`);
        Restaurar();

    }
    else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        alert(`Ganador Color ${tablero[3]}`);
        Restaurar();
    }
    else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        alert(`Ganador Color ${tablero[6]}`);
        Restaurar();
    }
    else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        alert(`Ganador Color ${tablero[0]}`);
        Restaurar();
    }
    else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        alert(`Ganador Color ${tablero[1]}`);
        Restaurar();
    }
    else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        alert(`Ganador Color ${tablero[2]}`);
        Restaurar();
    }
    else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        alert(`Ganador Color ${tablero[0]}`);
        Restaurar();
    }
    else if(tablero[6] == tablero[4] && tablero[6] == tablero[2] && tablero[6]){
        alert(`Ganador Color ${tablero[6]}`);
        Restaurar();
    }
    
}


document.querySelectorAll('button').forEach(
    (obj,i) => obj.addEventListener('click',(e)=>btnPulsado(e,i)));