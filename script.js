'use strict';

function setEvenRowsColor(){
    var rows = document.getElementsByClassName('paros');
    const letters = "0123456789ABCDEF";
    var color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    for(let j = 0; j < rows.length; j++){
        rows[j].style.backgroundColor = color;
    }
}

function change44(){
	const label1 = document.querySelector('.lh44');
	label1.style.fontWeight = 'bold';
	const label2 = document.querySelector('.mv33');
	label2.style.fontWeight = 'normal';
}

function change33(){
	const label1 = document.querySelector('.mv33');
	label1.style.fontWeight = 'bold';
	const label2 = document.querySelector('.lh44');
	label2.style.fontWeight = 'normal';
}

function hozzaad(){
	const ul = document.querySelector('#kedvenclista');
	let nev = document.querySelector('#kedvencinput').value.replace(/\s+/g, '');
	let liArray = ul.getElementsByTagName('li');
	let egyezes = false;
	
	for(let i = 0; i < liArray.length; i++){
		if(!nev.localeCompare(liArray[i].innerHTML, undefined, {sensitivity : 'accent'})){
			egyezes = true;
		}
	}
	
	if(egyezes == false){
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(nev));
		ul.appendChild(li);
	}
	else{
		alert("Ilyen nevű versenyző már van a listában!");
	}	
}

window.addEventListener("load", function(){change33()});

window.addEventListener("load", function(){setEvenRowsColor()});