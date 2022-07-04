function postar() {
  var input_nome = document.querySelector("#nome");
  var Nome = input_nome.value;

  var input_senha = document.querySelector("#senha");
  var Senha = input_senha.value;

  var url =
    "https://localhost:44333/api/Login?Nome=" + Nome + "&Senha=" + Senha + "";

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, false);
  xhttp.send();

  console.log(xhttp.responseText);
}

function Verificar() {
  var input_nome = document.querySelector("#nome").value;
  console.log(input_nome);
  var nome = input_nome;

  var input_senha = document.querySelector("#senha").value;
  console.log(input_senha);
  var senha = input_senha;

  var url =
    "https://localhost:44333/api/Login?Nome=" +
    input_nome +
    "&Cpf=" +
    input_senha;

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, false);
  xhttp.send();

  var valor = xhttp.responseText;

  console.log(valor);
  var json = JSON.parse(JSON.parse(valor));
  console.log(json);

  if (json["acesso"] == "INVALIDO") {
    document.getElementsById("status").values = "Sem Acesso";
  } else {
    window.location.replace("notificacoes.html");
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("senha", senha);
  }
}


function consultarTarefasN(ClienteID){
  console.log(ClienteID);
  var url = `https://localhost:44333/api/Rotina?NCpf=`+ClienteID;
  console.log(url);
  var nome = "";

  $.get(url,data =>{
      dados = JSON.parse(data)
      console.log(data);
      var div = '';

      $(dados).each(function (index) {
          if(nome != `${dados[index].nomeOS}`){
              div += `<h6>${dados[index].nomeOS}</h6>`
          }
          if (dados[index].Finalizada == "True"){
              div += `<div class="d-flex align-items-center"><label><input type="checkbox" checked disable class="option-input radio"><span class="label-text">${dados[index].item}</span></label></div>`;
          }
          else{
              div += `<div class="d-flex align-items-center"><label><input type="checkbox" disable class="option-input radio"><span class="label-text">${dados[index].item}</span></label></div>`;
          }
          nome = `${dados[index].nomeOS}`
      });
      document.getElementById("tasks").innerHTML =div;
  })
}
