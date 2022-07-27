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
      // console.log('key:', key, 'type:', typeof obj[key]);
      
      if (arrayOfKeys.includes(key) && !findStringKey) {
        // console.log('find!!!--------------');
        const addPoint = {};

        for (let findKey of arrayOfKeys) {
          // console.log('key founded', findKey);

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

  return result;
}

const someObj = {
  name: 'first',
  name2: 'some',
  name3: 'some',
  key2: [
    'name', 
    {
      name: 'second',
      some: {
        name: 'third'
      }
    },
  ],
  key3: {
    name: 'fourth',
    name2: {
      name: 'sixth',
    }
  },
}

console.log(findKeysInObject(someObj, ['name', 'name2']));
