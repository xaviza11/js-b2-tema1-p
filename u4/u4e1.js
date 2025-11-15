async function countDown(amount, stepCallback) {

    // Validación del callback
    if (typeof stepCallback !== "function") {
        throw new Error("ERROR. Es obligatorio el paso de un callback como segundo parámetro.");
    }

    return new Promise((resolve, reject) => {

        // Validación de cantidad
        if (amount <= 0) {
            reject(new Error("ERROR. La cantidad ha de ser positiva y mayor que 0."));
            return;
        }

        // Función recursiva para ejecutar cada paso
        const step = (current) => {
            stepCallback(current); // llamamos al callback con el valor actual

            if (current === 1) {
                // último paso, resolvemos
                resolve(true);
            } else {
                // llamamos recursivamente al siguiente paso después de 100ms
                setTimeout(() => step(current - 1), 100);
            }
        };

        // Iniciamos la cuenta atrás
        step(amount);
    });
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { countDown };
