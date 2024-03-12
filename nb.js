1 //Как исправить "одни пятёрки"?

/*  var result = [];
 for (let i = 0; i < 5; i++) {
     result[i] = function () {
         console.log(i);
     };
 }
 result[0](); //5
 result[1](); //5 result[2](); //5
 result[3](); //5
 result[4](); //5 */

2 ///////////////////////////////

/*  function getGroup() {     let students = [];
    let i = 0;
    while (i < 10) {
      let j = i
        students[j] = function() {
            console.log(j);
        }
        i++
    }
    return students;
} 
let group = getGroup();

 group[0](); // 10 как исправить на 0
 group[5](); // 10                  5        */         
 

 3////////////////////////////////

/*  function multiply(x) {
  let product = x;
  function nextStep(y) {
    if (y === undefined) {
      return product;
    }
    product *= y;
    return nextStep;
  }
  return nextStep;
}

const result1 = multiply(2)(3)(4)();
console.log(result1); // Вывод: 24
const result2 = multiply(2)(3)(4)(5)();
console.log(result2); // Вывод: 120 */






//1
/*  const user = {
     name: 'Bob',
     funcFunc() {
         return function() {
             console.log(this);
         }
     },
     funcArrow() {
         return () => {
             console.log(this);
         }
     },
     arrowFunc: () => {
         return function() {
             console.log(this);
         }
     },
     arrowArrow: () => {
         return () => {
             console.log(this);
         }
     },
 };

 user.funcFunc()(); // ?виндоу
 user.funcArrow()(); // ?юзер
 user.arrowFunc()(); // ?виндоу
 user.arrowArrow()(); // ? какой то пустой объект */


 //2
/*  var poke1 = {name:'Pikachu'};
 var poke2 = {name:'Chermander'};
 var poke3 = {name:'Bulbasaur'};

 var sayName = function(){ console.log(this.name) }

 sayName.bind(poke1).bind(poke2).call(poke3);//пикачу почему то */

 //3
 /* const obj = {
     firstName: 'Bill',
     lastName: 'Ivanov',

     showFirstName: function () {
         console.log(this.firstName);
     },

     showLastName: () => {
         console.log(this.lastName);
     }
 }

 obj.showFirstName(); // ?билл
 obj.showLastName(); // ?андефайнд

 obj.showFirstName.bind({ firstName: 'Boris' })(); // ?борис
 obj.showFirstName.bind({ firstName: 'Boris' }).bind({ firstName: 'Oleg' })(); // ?борис

 obj.showLastName.bind({ firstName: 'Boris' })(); // ?андейф */



 // 4
/* function test() {
    console.log(this.name)
}
const user = {
    name: 'Mike',
    fn: test
}
setTimeout(user.fn, 1000)//undefintd? */



собес:

/* var i = 1
var b = {};

(function(){
  i++;
  b.j=1;
})();
console.log(i,b);//2,{j: 1}

(function(i,b){
  i++;
  b.k=1;
})(i,b);
console.log(i,b)//2,{j: 1, k: 1} */

/* function createIncrement(incBy){
  let value = 0
  function increment(){
    value+=incBy
    console.log(value)
  }
  const message = `current value is ${value}`
  function log(){
    console.log(message)
  }
  return [increment,log]
}
const [increment,log]= createIncrement(1)
increment()//1
increment()//2
increment()//3
log()//current value is 0 */


/* /* function foo(){
  const x = 10;
  return {
    x:20,
    bar:()=>{
      console.log(this.x)
    },
    baz:function(){
      console.log(this.x)
    }
  }
}
const obj1=foo()
obj1.bar()//undefined
obj1.baz()//20 */

/* const obj2=foo.call({x:30})
let y = obj2.bar
let z = obj2.baz
y()//20
z() *///undefined */
