function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando "
    }
}

const atila = new Person("Atila")
const joao = new Person("joao")
console.log(atila.walk())
console.log(joao.walk())