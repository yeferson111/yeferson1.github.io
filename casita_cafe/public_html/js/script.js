// Navegación SPA con animación suave
const links = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
    link.addEventListener("click", () => {

        // quitar activo del menú
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const sectionID = link.dataset.section;

        // ocultar todas las secciones
        sections.forEach(sec => sec.classList.remove("visible"));

        // mostrar la seleccionada
        document.getElementById(sectionID).classList.add("visible");
    });
});
