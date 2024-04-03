//interface: declaration done and definition is not done
interface Animal{
    name: string;
    eat(): void;

}
interface Dog extends Animal{
    bark(): void;
}
class labrador implements Dog{
    name: string;
    constructor(name: string){
        this.name=name;
    }
    eat() {
        console.log(`${this.name} is eating`)
    }
    bark(): void {
        console.log("Dog is barking");
    }
    makeSound(){
        this.bark();
    }
}
let dog = new labrador("Tommy");
dog.eat();
dog.bark();
dog.makeSound();