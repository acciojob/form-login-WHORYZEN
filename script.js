function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();

    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    var fullName = firstName + ' ' + lastName;


    alert(fullName);
}


document.getElementById('userForm').addEventListener('submit', getFormvalue);
