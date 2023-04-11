/**
 * Optional chaining
 */
{
  const person1 = {
    name: 'Hee',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Cho',
      },
    },
  };
  const person2 = {
    name: 'Cho',
  };

  // 👻
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }
  // 👻👻
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }
  // 👻👻👻
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }
  // 💜
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

/**
 * Nullish Coalescing Operator
 */
{
  // Logical OR operator
  // false: false, 0, '', null, undefined
  {
    const name = 'Hee';
    const userName = name || 'Guest';
    console.log(userName);
  }
  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }
  // 👻
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);
  }
  {
    const num = 0;
    const userName = num || 'undefined';
    console.log(userName);
  }

  // 💜
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
}
