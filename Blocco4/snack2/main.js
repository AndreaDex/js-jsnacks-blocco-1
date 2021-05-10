/*
  * Blocco 4 - Sanck 2
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/
var triangolo = {
    base : 20,
    altezza : 15,
   
}
var area = (triangolo.base * triangolo.altezza) / 2 ;
console.log(area);
var ipotenusa = Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2);
console.log(ipotenusa);
var perimetro = triangolo.base + triangolo.altezza + ipotenusa ;
console.log(perimetro);