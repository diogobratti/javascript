var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(event) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");
    if(xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var pacientes = JSON.parse(xhr.responseText);
      console.log(typeof pacientes);
      pacientes.forEach(element => {
        adicionaPacienteNaTabela(element);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
  });
  
  xhr.send();


});

//https://api-pacientes.herokuapp.com/pacientes