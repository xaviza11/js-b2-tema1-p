// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e1.md / Enunciat disponible a u5e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:
// IIFE que encapsula todo y devuelve la función generate
const converter = (function () {

    function generate(text) {
        // Devolver false si no es una cadena
        if (typeof text !== "string") return false;

        // Pasamos todo a minúsculas
        let result = text.toLowerCase();

        // Reemplazos de vocales con acentos incluidos
        result = result
            .replace(/a|á/g, "1")
            .replace(/e|é/g, "2")
            .replace(/i|í/g, "3")
            .replace(/o|ó/g, "4")
            .replace(/u|ú|ü/g, "5");

        return result;
    }

    // La IIFE devuelve la función generate
    return generate;

})(); // ← ejecución inmediata

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { converter };
