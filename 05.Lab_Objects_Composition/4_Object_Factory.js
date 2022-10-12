const library = {

    print: function () {

        console.log(`${this.name} is printing a page`);

    },

    scan: function () {

        console.log(`${this.name} is scanning a document`);

    },

    play: function (artist, track) {

        console.log(`${this.name} is playing '${track}' by ${artist}`);

    },

};

const orders = [

    {

        template: { name: 'ACME Printer' },

        parts: ['print']

    },

    {

        template: { name: 'Initech Scanner' },

        parts: ['scan']

    },

    {

        template: { name: 'ComTron Copier' },

        parts: ['scan', 'print']

    },

    {

        template: { name: 'BoomBox Stereo' },

        parts: ['play']

    }

];
let result = []
function factory(lib, list) {
    return list.map(iterator => {
        const object = Object.assign({}, iterator.template)
        
        for (let part of iterator.parts) {
            object[part] = lib[part]
        }
        return object
    });
    
}



const products = factory(library, orders);
console.log(products);
const x = {name :"lol", parts: ['play']}
const y = (factory(x, orders))
console.log(y)