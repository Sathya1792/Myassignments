//Example 1
let str="Hello World"
str=str.split(" ")
console.log(str)
str1=str[str.length-1]
console.log(str1.length)

//Example 2
let str2= " fly me to the moon "
str2=str2.trim()
str2=str2.split(" ")
console.log(str2)
str3=str2[str2.length-1]
console.log(str3.length)


//Example 3
function anagram(string1,string2){
    string1=string1.split("").sort().join("")
    string2=string2.split("").sort().join("")
    return string1==string2
}
console.log(anagram("listen","silent"))
console.log(anagram('hello',"world"))












