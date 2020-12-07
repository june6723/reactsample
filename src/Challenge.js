class ObjectUtilities {
  /* Your magic here */
  static mergeObjects = (objA, objB) => {
    let newObj = { ...objA, ...objB };
    return newObj;
  };

  static removePassword = (obj) => {
    let newObj = { ...obj };
    delete newObj.password;
    return newObj;
  };

  static freezeObj = (obj) => {
    let newObj = { ...obj };
    Object.freeze(newObj);
    return newObj;
  };

  static getOnlyValues = (obj) => {
    return Object.values(obj);
  };
  static getOnlyProperties = (obj) => {
    return Object.keys(obj);
  };
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);
