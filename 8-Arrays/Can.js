let isimler =["can","rıdvan", "elif"];
//console.log(isimler[1]);

//isimler[1] = "tuçe";
//console.log(isimler[1]);

let yaşlar=[3,18,25,50];
//console.log(yaşlar[3]);

let tireli = isimler.join("-");
console.log(tireli);

let virgüllü = isimler.join(",");
console.log(virgüllü);

let sira = isimler.indexOf("elif");
console.log(sira);

let ekle = isimler.concat(["merve","suna"]);
console.log(ekle);

let elemanekle = isimler.push("leyla");
console.log(isimler);

isimler.pop();
console.log(isimler);