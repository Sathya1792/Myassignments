function reversestr(str){
   let reversedstr = "";
   for (let i = str.length - 1; i >= 0; i--) {
      reversedstr += str[i];
   }
   return str === reversedstr;
}

console.log(reversestr("eye"))
console.log(reversestr("length"))


   
   