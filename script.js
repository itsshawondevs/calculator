let result = document.querySelector(".result")

let ac = document.querySelector(".ac")
let del = document.querySelector(".del")
let doubleJiro = document.querySelector(".double_jiro")
let parcent = document.querySelector(".parcent")

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let jiro = document.querySelector(".jiro")
let point = document.querySelector(".point")

let into = document.querySelector(".into")
let divided = document.querySelector(".divided")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let equal = document.querySelector(".equal")

one.addEventListener("click",function(){
    result.innerHTML += 1
})
two.addEventListener("click",function(){
    result.innerHTML += 2
})
three.addEventListener("click",function(){
    result.innerHTML += 3
})
four.addEventListener("click",function(){
    result.innerHTML += 4
})
five.addEventListener("click",function(){
    result.innerHTML += 5
})
six.addEventListener("click",function(){
    result.innerHTML += 6
})
seven.addEventListener("click",function(){
    result.innerHTML += 7
})
eight.addEventListener("click",function(){
    result.innerHTML += 8
})
nine.addEventListener("click",function(){
    result.innerHTML += 9
})
jiro.addEventListener("click",function(){
    result.innerHTML += 0
})
point.addEventListener("click",function(){
    result.innerHTML += `.`
})
plus.addEventListener("click",function(){
    result.innerHTML += `+`
})
minus.addEventListener("click",function(){
    result.innerHTML += `-`
})
into.addEventListener("click",function(){
    result.innerHTML += `*`
})
divided.addEventListener("click",function(){
    result.innerHTML += `/`
})
doubleJiro.addEventListener("click",function(){
    result.innerHTML += `00`
})
parcent.addEventListener("click",function(){
    result.innerHTML += `%`
})
ac.addEventListener("click",function(){
    result.innerHTML = ""
})
del.addEventListener("click",function(){
    result.innerHTML = result.innerHTML.slice(0,-1)
})
equal.addEventListener("click",function(){
    result.innerHTML = eval(result.innerHTML)
})

