// Manejo del DOM (Document Object Model)

// Estructura que hace referencia a todo lo que esta en la pagina web.
// puede interacturar con el añadiendo, modificando,eliminando, seteando diferentes propiedades.
// El DOM es el documento html al que hago referencia -> document 

//! - Seleccion de elementos

//? Metodos Basicos:

const elementsById = document.getElementById("id") // esta operacion solo selecciona un elemento unico del DOM.
const elementsByClass = document.getElementsByClassName("class") // se utiliza para hacer referencia a varios elementos iguales.
const elementsByTags = document.getElementsByTagName("name") // se utiliza para hacer referencia a varios elementos con el mismo name.

//? Metodods mas modernos

document.querySelector(".paragraph") // obtengo el primer elemento que coincida con este selector css
document.querySelectorAll(".paragraph") // devuelvo una lista con todos los elemento que coincidan con ese selector

//?==============================================================================================================================================

//! - Manipulacion de elementos

const title = document.getElementById("title")
title.textContent = "hola mundo"

const container = document.querySelectorAll(".container")
container.innerHTML = "<p>Esto es un nuevo parrafo</p>"

//?==============================================================================================================================================

//! - Modificacion de atributos

// Obtencion del atributo
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobacion de atributo
link.hasAttribute("target")