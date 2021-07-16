export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('Такой участник уже есть');
    } else {
      this.members.add(obj);
    }
  }

  addAll(...obj) {
    obj.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const persons = this.toArray();
    const end = persons.length;
    let count = 0;

    return {
      next() {
        if (count < end) {
          const person = persons[count];
          count += 1;
          return {
            done: false,
            value: person,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
