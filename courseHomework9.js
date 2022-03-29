//Задача №1
//1)
data = {
	addRecord: function () {
		for (let i = 1; i < arguments.length; i++) {

			Object.assign(this, arguments[i]);
		}
	},

	p: 600,
	str: 'hello',
	y: -50

};
data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

console.log("data x " + data.x);
console.log("data y " + data.y);
console.log("data z " + data.z);
console.log(data.y);
console.log(data.str);

//2)

// data = {
// 	addRecord: function () {

// 		Object.assign(this, ...arguments);

// 	},

// 	p: 600,
// 	str: 'hello',
// 	y: -50

// };
// data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

// console.log("data x " + data.x);
// console.log("data y " + data.y);
// console.log("data z " + data.z);
// console.log(data.y);
// console.log(data.str);

//3)
// data = {
// 	addRecord: function () {
// 		for (let i = 0; i < arguments.length; i++) {
// 			for (let key in arguments[i]) {
// 				this[key] = arguments[i][key]
// 			}
// 		}

// 	},

// 	p: 600,
// 	str: 'hello',
// 	y: -50

// };
// data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

// console.log("data x " + data.x);
// console.log("data y " + data.y);
// console.log("data z " + data.z);
// console.log(data.y);
// console.log(data.str);

