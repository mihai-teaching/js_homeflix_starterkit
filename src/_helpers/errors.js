// ======================================================
// Helpers / Errors
// ======================================================

/**
 * @param {string} location Function in which the error occured.
 * @param {*} obj The object that is undefined | null | of the wrong type.
 * @param {string} objName The name of the object that is undefined | null | of the wrong type.
 * @param {string} expectedType The type that the object should be.
 */
export const getTypeError = (location, obj, objName, expectedType) =>
  `${location} | The object '${objName}' should be a '${expectedType}, but its actual type is '${typeof obj}'.`;
