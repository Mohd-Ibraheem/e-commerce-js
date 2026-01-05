let baar = document.getElementById("bar");
let nav = document.getElementById("navbar")
let col = document.getElementById("close")

if (baar) {
    baar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (col) {
    col.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var mediumError = document.getElementById('medium-error');
var areaError = document.getElementById('area-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value.trim();

    if (name.length === 0) {
        nameError.innerHTML = 'Enter valid name';
        nameError.style.color = "red";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        nameError.style.color = "red";
        return false;
    }

    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value.trim();

    if (email.length === 0) {
        emailError.innerHTML = 'Enter valid Email';
        emailError.style.color = "red";
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
        emailError.style.color = "red";
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validateMedium() {
    var medium = document.getElementById('medium').value;

    if (medium === '') {
        mediumError.innerHTML = 'Please select a medium';
        mediumError.style.color = "red";
        return false;
    }

    mediumError.innerHTML = '';
    return true;
}

function validateArea() {
    var area = document.getElementById('area').value;

    if (area === '') {
        areaError.innerHTML = 'Please select an area';
        areaError.style.color = "red";
        return false;
    }

    areaError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMedium() || !validateArea()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        submitError.style.color = "orange"
        setTimeout(() => submitError.style.display = 'none', 3000);
        return false;
    } else {
        window.location.href = "thanku.html";
        return false;
    }
}



 let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    
    function updateCartCount() {
        const countSpan = document.getElementById("cart-count");
        let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

        if (totalQty > 0) {
            countSpan.style.display = "inline-block";
            countSpan.innerText = totalQty;
        } else {
            countSpan.style.display = "none";
        }
    }

    updateCartCount();
