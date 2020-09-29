function login() {
  var nome = document.querySelector("#inputNome").value;
  //nome = nome.value;

  if (nome == "") {
    return alert("Digite um nome primeiro");
  }

  sessionStorage.setItem("nomeUsuario", nome);
  window.location.href = "/feed.html";
}

var btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", login);
