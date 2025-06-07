// Número de cards que queremos crear
const numCards = 26;
let projectTitles = ["Estudio de un videojuego 2D","Pixel art","Pinceles Illustrator","Texto Illustrator","Assets Illustrator","Cartel Juego","Trabajo de clase","Separar del fondo","Mosaico de imágenes","Objeto inteligente","Deformaciones","Licuar","Modos Photoshop","Filtro y textos","Neural filter","Gif animado","Paisaje y huevo","Crossy Road","Faro y pirámide","Tres copas","Muñeco de nieve","Colores automáticos","Bodegón","Bakeado","Low Poly","Animaciones"];
let projectTecnologies = ["Ninguna","Piskel","Illustrator","Illustrator","Illustrator","Illustrator","Illustrator","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Blender","Blender","Blender","Blender","Blender","Blender","Blender","Blender","Blender","Blender"];

// Contenedor donde se agregarán las cards
const container = document.getElementById('project-container');

function loadImage(i,callback) {
    const img = new Image();
    img.src= "./img/"+projectTitles[i-1]+".png"
  
    img.onload = () => {
      // Imagen cargada correctamente
      callback(`url("./img/${projectTitles[i-1]}.png")`);
    };
  
    img.onerror = () => {
      // Si no carga el PNG, intentamos con GIF
      img.src = "./img/"+projectTitles[i-1]+".gif";
      img.onload = () => {
        callback(`url("./img/${projectTitles[i-1]}.gif")`);;
      };

      img.onerror = () => {
        // No se pudo cargar ni PNG ni GIF
        callback(null);
      };
    };
}

// Generar las cards dinámicamente
for (let i = 1; i <= numCards; i++) {
    // Crear el contenedor de la tarjeta
    const card = document.createElement('div');
    card.classList.add('card');

    // Crear la estructura interna de la tarjeta
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    // Crear la parte delantera de la tarjeta
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    loadImage(i, function(url) {
        if (url){
            cardFront.style.backgroundImage=url;
        } else {
        }
    });
    cardFront.style.backgroundSize = 'cover';
    cardFront.style.backgroundPosition = 'center';

    const projectTitle = document.createElement('p');
    projectTitle.textContent=projectTitles[i-1];

    // Agregar la imagen a la parte delantera
    cardFront.appendChild(projectTitle);

    // Crear la parte trasera de la tarjeta
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    // Título y descripción
    const title = document.createElement('h3');
    title.textContent = `Práctica ` + projectTitles[i-1];

    const tech = document.createElement('p');
    tech.innerHTML = `<strong>Tecnologías:</strong> `+projectTecnologies[i-1];

    // Crear el enlace al curriculum
    const link = document.createElement('a');
    link.href = `proyectos/${projectTitles[i-1]}/web.html`;
    link.target = '_blank';
    link.classList.add('btn');
    link.textContent = 'Ver Práctica';

    // Agregar todos los elementos a la parte trasera
    cardBack.appendChild(title);
    cardBack.appendChild(tech);
    cardBack.appendChild(link);

    // Agregar las partes delantera y trasera a la tarjeta
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    // Agregar la tarjeta al contenedor principal
    card.appendChild(cardInner);
    container.appendChild(card);
}