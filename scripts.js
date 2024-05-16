document.addEventListener("DOMContentLoaded", function() {
    const recipeForm = document.getElementById("recipeForm");
    const recipesList = document.getElementById("recipesList");

    recipeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = this.title.value;
        const ingredients = this.ingredients.value;
        const instructions = this.instructions.value;

        if (title.trim() !== "" && ingredients.trim() !== "" && instructions.trim() !== "") {
            const recipeItem = document.createElement("div");
            recipeItem.classList.add("card", "my-2", "animated", "fadeIn");

            const recipeContent = `
                <div class="card-body card-body2">
                    <h5 class="card-title card-title2">${title}</h5>
                    <p class="card-text"><strong>Ingredientes:</strong> ${ingredients}</p>
                    <p class="card-text"><strong>Instrucciones:</strong> ${instructions}</p>
                </div>
            `;

            recipeItem.innerHTML = recipeContent;
            recipesList.appendChild(recipeItem);

            // Clear form fields after submission
            this.reset();

            // Scroll to the newly added recipe
            recipeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

    // Ejemplo de recetas
    const ejemploRecetas = [
        { title: "Mojito Clásico", ingredients: "Hojas de menta, 2 oz de ron blanco, 1 oz de jugo de limón, 2 cucharadas de azúcar, Agua con gas, Hielo triturado", instructions: "En un vaso alto, machacar las hojas de menta con azúcar. Agregar el ron, el jugo de limón y el hielo. Completar con agua con gas y remover." },
        { title: "Negroni", ingredients: "1 oz de ginebra, 1 oz de vermut rojo, 1 oz de Campari, Rodaja de naranja, Hielo", instructions: "En un vaso Old Fashioned con hielo, mezclar la ginebra, el vermut y el Campari. Decorar con una rodaja de naranja." },
        { title: "Margarita", ingredients: "2 oz de tequila, 1 oz de triple sec, 1 oz de jugo de lima, Sal para el borde del vaso, Hielo", instructions: "Mojar el borde de un vaso con jugo de lima y luego escarchar con sal. En una coctelera con hielo, mezclar el tequila, el triple sec y el jugo de lima. Servir en el vaso preparado." }
    ];

    // Mostrar las recetas de ejemplo
    ejemploRecetas.forEach(function(receta) {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("card", "my-2", "animated", "fadeIn");

        const recipeContent = `
            <div class="card-body">
                <h5 class="card-title card-title2">${receta.title}</h5>
                <p class="card-text"><strong>Ingredientes:</strong> ${receta.ingredients}</p>
                <p class="card-text"><strong>Instrucciones:</strong> ${receta.instructions}</p>
            </div>
        `;

        recipeItem.innerHTML = recipeContent;
        recipesList.appendChild(recipeItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('.scroll');
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling hacia abajo
        document.querySelector('header').classList.add('hidden');
    } else {
        // Scrolling hacia arriba
        document.querySelector('header').classList.remove('hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('.scroll');
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var offsetTop = targetElement.offsetTop - 200; // Aquí ajustamos el margen
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.card', {
        delay: 200, // Retardo antes de que la animación comience en milisegundos
        distance: '30px', // Distancia desde la que se anima el elemento
        origin: 'bottom', // Origen desde donde se anima el elemento
        duration: 500, // Duración de la animación en milisegundos
        easing: 'ease-out', // Función de tiempo para la animación
        interval: 200 // Retardo entre cada elemento en milisegundos
    });
});

