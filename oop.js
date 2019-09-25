class  Mobil {
    constructor(type, color){
        this.type = type
        this.color = color
        this.egineStatus = 'off'
    }

    egineStatus () {

        this.egineStatus = 'on'
        console.log('egine start, mobilnya warna'+this.color+" typenya: "+this.type+" Status mesin: "+this.egineStatus)
    }

    egineStop () {
        this.egineStatus = 'off'
        console.log('egine start, mobilnya warna '+this.color+"typenya: "+this.type+" Status mesin: "+this.egineStatus)
    }

    static isEgineOn (mobil) {
        if (mobil.egineStatus === 'on'){
            console.log('Egine On')
        }else{
            console.log('Egine Off')
        }
    }
}

const m = new Mobil('Phanter', 'Hitam')

Mobil.isEgineOn(m);

class Car {
    constructor(color){
        this._color = color;
    }
}

let a = new Car('merah')

console.log(a._color);

class Car2 {
    constructor(){
        this._color = null
    }

    get color () {
        return `Warna Mobilnya adalah ${this._color}`
    }

    set color (color) {
        this._color = `${color} keren`
    }
}

const car2 = new Car2()

car2.color = 'merah'

console.log(car2.color)