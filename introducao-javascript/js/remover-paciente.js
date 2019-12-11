var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function (paciente) {
//   paciente.addEventListener("dblclick",function(event){
//     this.remove();
//   });
// });

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
  console.log(event.target.tagName);
  var alvo = event.target;
  var paiAlvo = alvo.parentNode;
  paiAlvo.classList.add("fadeOut");
  setTimeout(function(){
    paiAlvo.remove();
  }, 500);
});