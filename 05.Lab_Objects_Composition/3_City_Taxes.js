function cityTaxes(name, population, treasury) {
    return {name, population, treasury, 
        taxRate: 10,
        collectTaxes() {return Math.floor(this.treasury += this.population * this.taxRate)},
        applyGrowth(percentage) {return Math.floor(this.population += this.population * percentage / 100)},
        applyRecession(percentage) {return Math.floor(this.treasury -= this.treasury * percentage / 100)},
    }
}



const city =

cityTaxes('Tortuga',

7000,

15000);

console.log(city);