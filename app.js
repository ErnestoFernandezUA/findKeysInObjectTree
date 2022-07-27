"use strict";

function findKeysInObject(object, arrayOfKeys) {
  const result = [];
  console.log(object);
  console.log('');

  function findKeysInObj(obj, arrayOfKeys) {
    let findStringKey = false;
    console.log(Object.getOwnPropertyNames(obj));
    console.log('start searching....');
    
    for (let key in obj) {
      if (arrayOfKeys.includes(key) && !findStringKey) {
        const addPoint = {};

        for (let findKey of arrayOfKeys) {
          if (Object.getOwnPropertyNames(obj).includes(findKey)) {
            addPoint[findKey] = obj[findKey];
          } else {
            addPoint[findKey] = null;
          };
        }

        console.log('addPoint:', addPoint);
        console.log('');

        result.push(addPoint);
        findStringKey = true;
      }

      if (typeof obj[key] === 'object') {
        console.log('/case object/');
        findKeysInObj(obj[key], arrayOfKeys);
      }
    }
  }

  findKeysInObj(object, arrayOfKeys);

  console.log(result);
  return result;
}

const someObj = {
  name1: 'first',
  name3: 'some',
  key2: [
    'name1', 
    {
      name1: 'second',
      some: {
        name2: 'third'
      }
    },
  ],
  key3: {
    name1: 'fourth',
    name2: {
      name2: 'sixth',
    }
  },
  name2: 'some',
}

const someArrayOfKeys = ['name1', 'name2'];

findKeysInObject(someObj, someArrayOfKeys);
