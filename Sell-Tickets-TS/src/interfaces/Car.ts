export class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    present(): string {
        return 'I have a ' + this.brand;
    }
}