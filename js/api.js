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

  var url =
    "https://localhost:44333/api/Login?Nome=" +
    input_nome +
    "&Senha=" +
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
  }
}
