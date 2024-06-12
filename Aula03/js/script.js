trocaTema = () => {
  // alert("Mudei o tema e você não viu")
//   const html = document.documentElement;
//  document.querySelector("body").style.background = "Blue"

document.documentElement.classList.toggle("light")

const isLight = document.documentElement.classList.contains("light")

const imagem = isLight ? "./img/perfil.jpg" : "./img/perfil2.jpg";

document.querySelector("#perfil img ").setAttribute("src", imagem)
};
