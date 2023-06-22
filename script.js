// function checkSSN() {
//    const ssn = document.getElementById("ssn").value;
//     const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

//     if (ssnRegex.test(ssn)) {
//         document.getElementById("result").innerHTML = "SSN geçerlidir.";
//     } else {
//         document.getElementById("result").innerHTML = "Geçerli bir SSN giriniz (örn: 123-45-6789).";
//     }
// }
function checkSSN() {
    var ssn = document.getElementById("ssn").value;
    var ssnWithoutDashes = ssn.replace(/-/g, "");

    if (ssn.length === 11 && !isNaN(ssnWithoutDashes)) {
        document.getElementById("result").innerHTML = "SSN geçerlidir.";
    } else {
        document.getElementById("result").innerHTML = "Geçerli bir SSN giriniz (örn: 123-45-6789).";
    }
}