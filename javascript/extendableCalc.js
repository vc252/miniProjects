function Calculator() {
    this.methods = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
    }
    this.calculate = function (str) {
        let arr = str.split(' ');
        let operator = arr[1];
        let num1 = parseInt(arr[0]);
        let num2 = parseInt(arr[2]);
        if (!this.methods[operator] || isNaN(num1) || isNaN(num2)) {
            console.log("invalid string");
            return;
        }
        return this.methods[operator](num1,num2);
    }

    this.addMethod = function(name,func) {
        if ((typeof func)!='function') {
            console.log("this is not a function");
        }
        this.methods[name] = func;
    }
}

const calc = new Calculator();
console.log(calc.calculate("1 + 2"));
calc.addMethod("*",(a,b)=>a*b);
console.log(calc.calculate("3 * 2"));