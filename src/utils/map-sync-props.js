/**
 *  Функция создания ключей для computed
 *
 * @param {string} key
 * @returns {string}
 */
export const createCompKey = (key) => `comp${key[0].toUpperCase()}${key.substr(1)}`;

/**
 *  Хелпер для работы с массивами
 *
 * @param {Array<string>} arrOfProps
 * @returns {Object}
 */
export const mapSyncArray = (arrOfProps) => arrOfProps.reduce((acc, propName) => {
  const newKey = createCompKey(String(propName));

  acc[newKey] = {
    get() {
      return this[propName];
    },
    set(newVal) {
      this.$emit(`update:${propName}`, newVal);
    },
  };

  return acc;
}, {});

/**
 *  Хелпер для работы с объектами
 *
 * @param {Object} objectOfProps
 * @returns {Object}
 */
export const mapSyncObject = (objectOfProps) => Object.keys(objectOfProps)
  .reduce((acc, key) => {
    const target = objectOfProps[key];

    acc[key] = {
      get() {
        return this[target];
      },
      set(newVal) {
        this.$emit(`update:${target}`, newVal);
      },
    };

    return acc;
  }, {});

/**
 *  Функция аналог mapGetters из vuex, но для
 * пропов с атрибутом .sync
 *
 * @param {(Array<string>|Object)} arrOfProps
 * @returns {Object}
 */
export default (arrOrObject) => {
  if (Array.isArray(arrOrObject)) return mapSyncArray(arrOrObject);
  if (typeof arrOrObject === 'object' && arrOrObject !== null && !(arrOrObject instanceof RegExp)) return mapSyncObject(arrOrObject);
  throw new Error('[MapSyncProps] Bad argument');
};
