const name="sherlock";
console.log(name);
const greet = (name)=>{
    console.log(`hello,${name}`);
}
greet("karthi");
greet("plexx");
global.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int)
}, 1000);
const int = setInterval(() => {
    console.log('in the every interval');
},2000);


