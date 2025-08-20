// Lista de filmes (as imagens estão na pasta /img)
const filmes = [
  {
    titulo: "O Encanto",
    imagem: "img/encanto.jpg"
  },
  {
    titulo: "Lost",
    imagem: "img/lost.jpg"
  },
  {
    titulo: "Para Sempre",
    imagem: "img/para-sempre.jpg"
  },
  {
    titulo: "Velozes e Furiosos",
    imagem: "img/velozes-e-furiosos.jpg"
  },
  {
    titulo: "Enrolados",
    imagem: "img/enrolados.jpg"
  },
  {
    titulo: "Homem-Aranha",
    imagem: "img/homem-aranha.jpg"
  }
];

// Renderizar os cards na tela
const catalogo = document.getElementById("catalogo");

filmes.forEach(filme => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${filme.imagem}" alt="${filme.titulo}">
    <h2>${filme.titulo}</h2>
  `;

  catalogo.appendChild(card);
});
