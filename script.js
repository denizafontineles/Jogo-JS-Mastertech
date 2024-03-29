  function embaralhar(lista) {
    let valor_temporario;
    let indice_aleatorio;
  
    for (let i = lista.length - 1; i !== 0; i--) {
      indice_aleatorio = Math.floor(Math.random() * i);
  
      valor_temporario = lista[i];
      lista[i] = lista[indice_aleatorio];
      lista[indice_aleatorio] = valor_temporario;
    }
    return lista;
  }
  
  let cartas = document.querySelectorAll(".carta");
  let cartaVirada = null;
  let imagensSalvas = ["naruto1.jpg", "naruto2.jpg", "naruto3.jpg", "naruto4.jpg", "naruto5.jpg", "naruto6.jpg", "naruto7.jpg", "naruto8.png"];
  
  let imagens = imagensSalvas.concat(imagensSalvas);
  
  imagens = embaralhar(imagens);
  
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].style.backgroundImage = `url("imagens/${imagens[i]}")`;
  }
  
  setTimeout(function () {
    for (let carta of cartas) {
      carta.style.backgroundImage = 'url("imagens/naruto10.jpg")';
      carta.onclick = function () {
        carta.style.backgroundImage = `url("imagens/${imagens[Number(carta.id)]}")`;
        if (cartaVirada && cartaVirada.id !== carta.id) {
          setTimeout(function () {
            if (cartaVirada.style.backgroundImage === carta.style.backgroundImage) {
              cartaVirada.onclick = null;
              carta.onclick = null;
            }
            else {
              carta.style.backgroundImage = 'url("imagens/naruto10.jpg")';
              cartaVirada.style.backgroundImage = 'url("imagens/naruto10.jpg")';
            }
            cartaVirada = null;
          }, 1500)
        }
        else {
          cartaVirada = carta;
        }
      }
    }
  }, 3000);