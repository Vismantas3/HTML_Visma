JS:



const forma = document.getElementById('forma');

const rezultatas = document.getElementById('rezultatas');




forma.addEventListener('submit', function(e) {

    e.preventDefault();




    const vardas = document.getElementById('vardas').value;

    const pavarde = document.getElementById('pavarde').value;




    rezultatas.textContent = 'Vardas: ' + vardas + ', Pavardė: ' + pavarde;




    forma.reset();

});