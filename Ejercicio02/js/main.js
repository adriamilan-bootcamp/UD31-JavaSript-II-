
const dateReg = /^[\d]{2}[/][\d]{2}[/][\d]{4}$/

ex1 = "05/04/1982"
alert(ex1 + " -> " + dateReg.test(ex1))

ex1user = prompt("Introduce una fecha")
alert(ex1user    + " -> " + dateReg.test(ex1user))

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})*$/

ex2 = "adria4milan@gmail.com"
alert(ex2 + " -> " + emailReg.test(ex2))

ex2user = prompt("Introduce un correo electronico")
alert(ex2user + " -> " + emailReg.test(ex2user))