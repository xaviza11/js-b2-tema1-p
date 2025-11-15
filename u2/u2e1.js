// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
class ClassroomReport {
    #studentList;

    // A. Constructor
    constructor(studentList = []) {
        this.#studentList = studentList;
    }

    // B. Getter y Setter
    get studentList() {
        return this.#studentList;
    }

    set studentList(list) {
        this.#studentList = list;
    }

    // Función auxiliar para filtrar activos/inactivos
    #filterByActive(excludeInactive) {
        return this.#studentList.filter(st => excludeInactive ? st.active : true);
    }

    // C. getStudentsNumber (con reduce)
    getStudentsNumber(excludeInactive = true) {
        const list = this.#filterByActive(excludeInactive);

        return list.reduce((acc) => acc + 1, 0);
    }

    // D. averageScore (con reduce)
    averageScore(excludeInactive = true) {
        const list = this.#filterByActive(excludeInactive);

        if (list.length === 0) return 0;

        const total = list.reduce((acc, st) => acc + st.score, 0);
        const r = total / list.length;

        return Number(r.toFixed(2));
    }

    // E. bestStudent (con forEach)
    bestStudent(excludeInactive = true) {
        const list = this.#filterByActive(excludeInactive);

        if (list.length === 0) return null;

        let best = null;

        list.forEach(st => {
            if (!best || st.score >= best.score) {
                best = st;
            }
        });

        return best;
    }

    // F. worstStudent (con forEach)
    worstStudent(excludeInactive = true) {
        const list = this.#filterByActive(excludeInactive);

        if (list.length === 0) return null;

        let worst = null;

        list.forEach(st => {
            if (!worst || st.score <= worst.score) {
                worst = st;
            }
        });

        return worst;
    }

    // G. passedCount (con reduce)
    passedCount(excludeInactive = true) {
        const list = this.#filterByActive(excludeInactive);

        return list.reduce((acc, st) => {
            return acc + (st.score >= 5 ? 1 : 0);
        }, 0);
    }

    // H. failedCount (con reduce)
    failedCount(excludeInactive = true) {
        const list = this.#filterByActive(excludeInactive);

        return list.reduce((acc, st) => {
            return acc + (st.score < 5 ? 1 : 0);
        }, 0);
    }
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };
