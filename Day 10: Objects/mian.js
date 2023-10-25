const object = {
    a: 20,
    b: 20,
    lol: function ()
    {
        return this.a;
    }
};

console.log(object.lol());

object.c = 30;

console.log(object.c);
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
console.log(object.hasOwnProperty(`functionName`));