/*
  * Blocco 4 - Sanck 2
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/
var triangolo = {
    base : 20,
    altezza : 15,
    area : function () {
        var area2 = this.base * this.altezza ;
        return area2 / 2;
    },
    ipotenusa : function() {
        var ipo = Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.altezza, 2));
        return ipo;
    },
    perimetro :function() {
      return this.base + this.altezza + this.ipotenusa()
    },
   
}
console.log(triangolo.area());

console.log(triangolo.ipotenusa());

console.log(triangolo.perimetro());