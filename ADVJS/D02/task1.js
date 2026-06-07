function list(start, end, step) {

    if (step <= 0) {
        throw new Error("step must be positive");
    }

    //private
    var list = [];

    function fillList() {
        for (var i = start; i <= end; i += step) {
            list.push(i);
        }
    }

    function has(value) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] === value)
                return true;
        }
        return false;
    }

    fillList();

    //public

    this.append = function (value) {
        if (has(value))
            throw new Error("duplicate value");

        var last = list[list.length - 1];
        //[0,2,4,6,8,10]
        //last=10
        //value=12
        //value-last=2

        if (value - last !== step)
            throw new Error("Invalid sequence");

        list.push(value);
    };

    this.prepend = function (value) {
        if (has(value))
            throw new Error("duplicate value");

        var first = list[0];

        if (first - value !== step)
            throw new Error("invalid sequence");

        list.unshift(value);
    };

    this.pop = function () {
        if (list.length === 0)
            throw new Error("list is empty");

        return list.pop();
    };

    this.dequeue = function () {
        if (list.length === 0)
            throw new Error("list is empty");

         return list.shift();
    };

    this.display = function () {
        console.log(list);
    };
}


var seq = new list(2, 10, 2);

seq.display(); 


seq.append(12);
seq.display(); 


seq.prepend(0);
seq.display(); 


try {
    seq.append(45);
} catch (e) {
    console.log(e.message); 
}

try {
    seq.append(10);
} catch (e) {
    console.log(e.message); 
}

console.log(seq.pop());
seq.display(); 


console.log(seq.dequeue()); 
seq.display(); 



