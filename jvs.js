const form = document.querySelector('form');
const prenumeInput = document.querySelector('input[name="prenume"]');
const numeInput = document.querySelector('input[name="nume"]');
const emailInput = document.querySelector('input[name="email"]');
const telefonInput = document.querySelector('input[name="telefon"]');
const scrisoareInput = document.querySelector('textarea[name="scrisoare"]');
const dataInput = document.querySelector('input[name="data"]');

form.addEventListener('submit', function(event) {
  // Verificam prenume
  if (prenumeInput.value.length < 2) {
    alert('Prenumele trebuie sa aiba cel putin 2 caractere!');
    event.preventDefault();
  }

  // Verificam nume
  if (numeInput.value.length < 2) {
    alert('Numele trebuie sa aiba cel putin 2 caractere!');
    event.preventDefault();
  }

  // Verificam adresa de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Adresa de email nu este valida!');
    event.preventDefault();
  }

  // Verificam numarul de telefon
  if (telefonInput.value.length > 10) {
    alert('Numarul de telefon nu trebuie sa depaseasca 10 cifre!');
    event.preventDefault();
  }


  
    if (scrisoare.value.length < 100 || scrisoare.value.length > 500) {
      alert("Scrisoarea de intentie trebuie sa aiba intre 100 si 500 de caractere.");
      event.preventDefault();
  }


    const regex = /^\d{4}\-\d{2}\-\d{2}$/; //formatul datelor este "YYYY-MM-DD"
    if (!regex.test(dataInput.value)) {
      alert("Data de incepere trebuie sa fie in formatul 'YYYY-MM-DD'");
      event.preventDefault();
  }

})