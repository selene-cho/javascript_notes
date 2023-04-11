/*
 * Shorthand property names
 */

{
  const hee1 = {
    name: 'Hee',
    age: '20',
  };

  const name = 'Hee';
  const age = '20';

  // 👻
  const hee2 = {
    name: name,
    age: age,
  };

  // 💜
  const hee3 = {
    name,
    age,
  };

  console.log(hee1, hee2, hee3);
}

/**
 * Destructuring Assignment
 */

{
  // object
  const student = {
    name: 'Cho',
    level: 1,
  };

  // 👻
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // 💜
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array

  const animals = ['🐶', '🐰'];

  // 👻
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }
  // 💜
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

/**
 * Spread Syntax
 */

{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; // array.map, array.foreach 등 이용가능
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(
    'array: ',
    array,
    'arrayCopy: ',
    arrayCopy,
    'arrayCopy2: ',
    arrayCopy2
  );

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation _ 배열 병합
  const fruits1 = ['🍒', '🍇'];
  const fruits2 = ['🍋', '🍓'];
  const fruit = [...fruits1, ...fruits2];
  console.log(fruit);

  // object merge _ 객체 병합
  const dog1 = { dog1: '🐕' };
  const dog2 = { dog2: '🐩' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);

  const dog3 = { dog: '🐕' };
  const dog4 = { dog: '🐩' };
  const dog0 = { ...dog3, ...dog4 };
  console.log(dog0);
}

/**
 * Default parameters
 */
{
  // 👻
  {
    function printMessage(message) {
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
  // 👻👻
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
  // 💜
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}

/**
 * Ternary Operator _ 삼항연산자
 */
{
  const isCat = true;
  // 👻
  {
    let component;
    if (isCat) {
      component = '🐱';
    } else {
      component = '🦊';
    }
    console.log(component);
  }
  // 💜
  {
    const component = isCat ? '🐱' : '🦊';
    console.log(component);
    console.log(isCat ? '🐱' : '🦊');
  }
}

/**
 * Template Literals
 */
{
  const weather = '🌤️';
  const temparature = '16°C';

  // 👻
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );
  // 💜
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
