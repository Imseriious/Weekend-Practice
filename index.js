//Getting the element
let case1 = document.querySelector('#case1');
let case2 = document.querySelector('#case2');
let case3 = document.querySelector('#case3');
let case4 = document.querySelector('#case4');
let case5 = document.querySelector('#case5');
let case6 = document.querySelector('#case6');
let case7 = document.querySelector('#case7');
let case8 = document.querySelector('#case8');
let case9 = document.querySelector('#case9');
//Setting player to 1:
let player = 1;
//Event listemers
case1.addEventListener("click", ()=> { 
    if ( player == 1 && case1.innerHTML == ""){
    case1.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case1.innerHTML == ""){
    case1.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case2.addEventListener("click", ()=> { 
    if ( player == 1 && case2.innerHTML == ""){
    case2.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case2.innerHTML == ""){
    case2.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case3.addEventListener("click", ()=> { 
    if ( player == 1 && case3.innerHTML == ""){
    case3.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case3.innerHTML == ""){
    case3.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case4.addEventListener("click", ()=> { 
    if ( player == 1 && case4.innerHTML == ""){
    case4.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case4.innerHTML == ""){
    case4.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case5.addEventListener("click", ()=> { 
    if ( player == 1 && case5.innerHTML == ""){
    case5.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case5.innerHTML == "") {
    case5.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case6.addEventListener("click", ()=> { 
    if ( player == 1 && case6.innerHTML == ""){
    case6.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case6.innerHTML == ""){
    case6.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case7.addEventListener("click", ()=> { 
    if( player == 1 && case7.innerHTML == ""){
    case7.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case7.innerHTML == ""){
    case7.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case8.addEventListener("click", ()=> { 
    if ( player == 1 && case8.innerHTML == ""){
    case8.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case8.innerHTML == ""){
    case8.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});
case9.addEventListener("click", ()=> { 
    if ( player == 1 && case9.innerHTML == ""){
    case9.innerHTML = `<img src="img/x.png">`
    player = 0;
    } else if ( player == 0 && case9.innerHTML == ""){
    case9.innerHTML = `<img src="img/o.png">`    
    player = 1;
    }
});


