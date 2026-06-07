let LnkdLstObj = {
    data: [],

    has(value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].value === value)
                return true;
        }
        return false;
    },

    enqueue(value) {
        if (this.has(value)) 
            throw new Error("duplicate value");

        if (this.data.length > 0 && value > this.data[0].value) {
            throw new Error("invalid sequence");
        }

        this.data.unshift({value});
    },

    push(value) {
        if (this.has(value)) 
            throw new Error("duplicate value");
        if(value<this.data[this.data.length-1].value)
            throw new Error("invalid sequence");
        this.data.push({value});
    },

    insertAt(index, value) {
        if (this.has(value)) 
            throw new Error("duplicate value");

        let prev = this.data[index - 1].value;
        let next = this.data[index].value;

        if (value <= prev || value >= next) {
            throw new Error("invalid sequence");
        }

        this.data.splice(index, 0, {value});
        //[1,2,4]
        //index=2,value=3
        //[1,2,3,4]
    },

    pop() {
        if (this.data.length === 0) 
            throw new Error("list is empty");
        return this.data.pop();
    },

    remove(value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].value === value) {
               this.data.splice(i, 1);
               return value;
            }
        }
        return "data not found";
    },

    dequeue() {
        if (this.data.length === 0) 
            throw new Error("list is empty");
        return this.data.shift();
    },

    display() {
        let values = [];
        for (let i = 0; i < this.data.length; i++) {
            values.push(this.data[i].value);
        }
        console.log(values);
    }
    
};


LnkdLstObj.enqueue(30);
LnkdLstObj.enqueue(20);
LnkdLstObj.enqueue(10);
LnkdLstObj.display(); 

try {
    LnkdLstObj.enqueue(25);
} catch (e) {
    console.log(e.message);
}

try {
    LnkdLstObj.push(20);
} catch (e) {
    console.log(e.message);
}

LnkdLstObj.push(40);
LnkdLstObj.display();

try {
    LnkdLstObj.insertAt(1, 35);
} catch (e) {
    console.log(e.message);
}

LnkdLstObj.insertAt(3, 35);
LnkdLstObj.display();

console.log(LnkdLstObj.remove(35));
LnkdLstObj.display();

console.log(LnkdLstObj.remove(99));


console.log(LnkdLstObj.dequeue());
console.log(LnkdLstObj.dequeue());
console.log(LnkdLstObj.dequeue());
console.log(LnkdLstObj.dequeue());
LnkdLstObj.display();

