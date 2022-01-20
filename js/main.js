// ! Деструктуризация
// ? Деструктуризация массива
// const arr = [100, 200, 300, 400,];
// let [a, b, c, d] = arr;
// console.log(c);

// let arr = ['Tyler', 'Josh', 'Travis' ];
// let [person1, person2, person3] = arr;
// console.log(person2);

// ? Деструктуризация объекта
// let artist = {
//     name: 'Travis',
//     lastName: 'Scott',
//     position: 'rapper'
// };
// let artist2 = {
//     name: 'Asap',
//     lastName: 'Rocky',
//     position: 'rapper',
// };
// todo перезаписываем ключи
// let {lastName, position, name} = artist;
// let {lastName, position, name, wife = 'Kylie'} = artist2;
// console.log(wife);

// ? Деструктуризация строки
// let [str1, , str2,]= 'plus mega ultra'.split(' ');
// console.log(str1);
// console.log(str2);

// ! spread оператор ... (поверхностное копирование массива)

// let obj1 = {
//   name: "Kai",
//   age: 20,
// };
// let obj2 = obj1;
// let obj2 = {...obj1};
// obj2.name = "Li Min Ho";
// console.log(obj1);
// console.log(obj2);

// ! spread со строками
// let letters = 'abcd';
// let arr = [...letters];
// console.log(arr); //сохдается новый массив, в котром каждый элемент является символом строки

// !spread с объектами
// let obj1= {name: 'Tyler', age: 33};
// let obj2 ={name2: 'Josh', age2: 32};
// let resObj={...obj1, ...obj2};
// console.log(resObj);

// ? "добавить" свойства объекту
// let obj = { ...obj1};
// obj.age= 20; //если нужно изменить возраст, аналогично с именем и тд
// console.log(obj);

// ! rest ... (rest параметры) применение синтаксиса spread для сбора аргументов

// function func(a, b, ...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// func(1, 2, 4321413, 1234, 555, 66);

// ! jSON.parce() и JSON.stringify()
// ? JSON.stringify() преобразует переданный элемент в строку с форматом JSON. Затем JSON.parce() преобразует обратно в объект, это позволяет выполнить глубокое копирование и для вложенных объектов, чего не происходит с оператором spread
// const car1 = {
//   color: "red",
//   wheels: {
//     amount: 4,
//   },
// };
// let car2 = JSON.parse(JSON.stringify(car1));
// let car2 = { ...car1 };
// car2.wheels.amount = 5;
// console.log(car2);
// console.log(car1);