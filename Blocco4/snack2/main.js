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
        return Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2);
    },
    perimetro :function(){
      return triangolo.base + triangolo.altezza + triangolo.ipotenusa;
    },
   
}
console.log(triangolo.area());
//var area = (triangolo.base * triangolo.altezza) / 2 ;

//var ipotenusa = Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2);
console.log(triangolo.ipotenusa());
//var perimetro = triangolo.base + triangolo.altezza + ipotenusa ;
console.log(triangolo.perimetro());