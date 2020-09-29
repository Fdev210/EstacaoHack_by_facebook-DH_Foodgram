async function exibirPosts() {
  const response = await fetch("https://foodgram-back.herokuapp.com/posts");
  const arrayDeFotos = await response.json();

  var sessaoFotos = document.querySelector("Section");

  for (var i = 0; i < arrayDeFotos.length; i++) {
    var post = `<div class="posts"> 
    <h2>${arrayDeFotos[i].user}</h2>
    <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}">
  </div>`;

    sessaoFotos.insertAdjacentHTML("afterbegin", post);
  }
}

exibirPosts();
