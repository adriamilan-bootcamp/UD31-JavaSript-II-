
const dateReg = /^[\d]{2}[/][\d]{2}[/][\d]{4}$/

date1 = "05/04/1982"
alert(date1 + " -> " + dateReg.test(date1))

dateUser = prompt("Introduce una fecha")
alert(dateUser + " -> " + dateReg.test(dateUser))

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})*$/

email = "adria4milan@gmail.com"
alert(email + " -> " + emailReg.test(email))

emailUser = prompt("Introduce un correo electronico")
alert(emailUser + " -> " + emailReg.test(emailUser))

function reverseName(name) {
    name = name.split(" ")
    name = name.reverse()
    name = name.join()

    return name
}

alert(reverseName("pepe viyuela"))

alert(reverseName(prompt("Introduce un nombre")))

const scriptReg = /<script[^]*>.*<\/script[^>]*>/g

script = "<script src='http://mydomain.com/urchin.js'></script>"
alert(script + " " + scriptReg.test(script))

scriptUser = prompt("Introduce un script")
alert(scriptUser + " " + scriptReg.test(scriptUser))