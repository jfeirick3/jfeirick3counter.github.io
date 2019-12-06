function setup(){
	let h2=document.getElementById("counter");
	counter = Number(localStorage.counter);
	if (! counter) {
	    counter = 1;
	} else {
	    counter += 1;
	}
	localStorage.counter = counter;
	h2.innerHTML=counter;
}
function addToCounter(){
	let h2=document.getElementById("counter");
	counter = Number(localStorage.counter);
	counter+=1;
	localStorage.counter=counter;
	h2.innerHTML=counter;
}
