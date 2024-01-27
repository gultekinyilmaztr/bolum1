console.log('Merhaba Dünya');


let email = "cnboz@hotmail.com";
console.log(email);

//Birleştirme

let ad = "Can";
let soyad ="Boz";
let adSoyad= ad + " " +soyad;
console.log(adSoyad);

//Karakterleri Silme

console.log(adSoyad[2]);

//Kaç Karakter

console.log(adSoyad.length); //boşluk dahil 7
// if(adSoyad.length > 0)
// {

// }

//Methodlar

console.log(adSoyad.toUpperCase());
console.log(adSoyad.toLocaleLowerCase());
console.log(adSoyad);

let index= adSoyad.indexOf("B");
console.log("B'nin bulunduğu index:"+index);

