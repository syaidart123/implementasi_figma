class Polygon {
    constructor(polygons) {
        this.polygons = polygons;
    }

    perimeter() {
        return this.polygons.reduce((a, b) => (a + b))
    }
}
let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());