function store() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var address = document.getElementById("address");

    var user = {
        name: name.value,
        email: email.value,
        age: age.value,
        address: address.value
    }

    localStorage.setItem("user", JSON.stringify(user));

}


function getData() {
    var getname = document.getElementById("getname");
    var getemail = document.getElementById("getemail");
    var getage = document.getElementById("getage");
    var getaddress = document.getElementById("getaddress");

    var getuser = JSON.parse(localStorage.getItem("user"));

    getname.innerHTML = " Name: " + getuser.name;
    getemail.innerHTML = " Email: " + getuser.email;
    getage.innerHTML = " Age: " + getuser.age;
    getaddress.innerHTML = " Address: " + getuser.address;

}