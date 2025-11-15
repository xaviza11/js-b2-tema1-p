// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:
function numberArray({ max }) {
  const ERROR_1 = "ERROR. Ya inicializado.";
  const ERROR_2 = "ERROR. Número de elementos superior al máximo permitido.";
  const ERROR_3 = "ERROR. Todos los elementos han de ser números.";

  let _list;
  const _max = max;

  function init(arr) {
    if (_list !== undefined) return ERROR_1;
    if (!_checkItems(arr)) return ERROR_3;
    if (!Array.isArray(arr)) return ERROR_3;
    if (arr.length > _max) return ERROR_2;
    _list = [...arr];
    return true;
  }

  function initialized() {
    return _list !== undefined;
  }

  function _checkItems(arr) {
    if (!Array.isArray(arr)) arr = [arr];
    return arr.every((item) => typeof item === "number");
  }

  function _addItem(num) {
    if (_list.length >= _max) return false;
    _list.push(num);
    return true;
  }

  function _removeItem(num) {
    const index = _list.indexOf(num);
    if (index !== -1) {
      _list.splice(index, 1);
    }
    return true;
  }

  function length() {
    return initialized() ? _list.length : undefined;
  }

  function getList() {
    return initialized() ? [..._list] : undefined;
  }

  function add(items) {
    const arr = Array.isArray(items) ? items : [items];

    if (!_checkItems(arr)) return ERROR_3;

    let allInserted = true;
    arr.forEach((item) => {
      if (!_addItem(item)) {
        allInserted = false;
      }
    });

    return allInserted;
  }

  function remove(items) {
    const arr = Array.isArray(items) ? items : [items];

    if (!_checkItems(arr)) return ERROR_3;

    arr.forEach((item) => _removeItem(item));

    return true;
  }

  return {
    init,
    initialized,
    length,
    items: getList,
    add,
    remove,
  };
}

/**
 * TEST
 * This code is ONLY intended for TESTING PURPOSES,
 * if you run this code outside of a test environment,
 * please comment or remove it (or use it loading the script as
 * a module)
 */
export { numberArray };
