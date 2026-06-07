//1
interface User {
    name: string;
    age: number;
  }
  
let user1: User = {
    name: "Mazen",
    age:22
  };
console.log(user1.name);

let user2:Partial<User>={
 name:"ahmed"
}

console.log(user2.name);

//2
interface Profile {
    username?: string;
    email?: string;
}
let profile1: Profile = {
    username: "mazen123",
    // email: "mazen@mail.com"
  }
console.log(profile1.username);

//3
type ColorsRecord = Record<"red" | "green" | "blue", string>;

let colors: ColorsRecord = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

console.log(colors.red);
  
//4
interface Person{
    name:string;
    age:number;
    email:string;
}

type newType = Pick<Person, "name" | "email">;

let person1: newType = {
    name: "Mazen",
    email: "mazen@mail.com"
  };

console.log(person1.email);
  


//5
type newType2= Omit<Person,"age">
let person2: newType2 = {
    name: "Mazen",
    email: "mazen2@mail.com"
  };

console.log(person2.email);


//6
type Colors = "red" | "green" | "blue" | "yellow";
type newType3 =Exclude<Colors,"yellow">

let color1: newType3 = "red"; 


//7
type newType4 = Extract<Colors,"red"|"blue">
let color2: newType4 = "red"; 


//8
type MaybeString = string | null | undefined;
type OnlyString = NonNullable<MaybeString>;

let str1: OnlyString = "mazen";
// let str2: OnlyString = null; 
// let str3: OnlyString = undefined; 














 