document.getElementById("close").addEventListener("click", function () {
    document.getElementById("cookies-block").classList.add("close")
})
document.getElementById("accept").addEventListener("click", function () {
    document.getElementById("cookies-block").classList.add("close")
})
document.getElementById("decline").addEventListener("click", function () {
    document.getElementById("cookies-block").classList.add("close")
})
document.getElementById("menu-open").addEventListener("click", function () {
    document.getElementById("menu__container").classList.add("active")

})
document.getElementById("menu-close").addEventListener("click", function () {
    document.getElementById("menu__container").classList.remove("active")

})
document.getElementById("popup-open__btn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
})
document.getElementById("popup-open").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
})
document.getElementById("popup-open__bottom").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
})
document.getElementById("popup-open__second").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
})
document.getElementById("s-close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
})
document.getElementById("s-close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
})

document.getElementById("s-close__second").addEventListener("click", function () {
    document.getElementById("popup-success").style.display = "none";
})
document.getElementById("super-link").addEventListener("click", function () {
    document.getElementById("popup-success").style.display = "none";

})

const Cookies = document.getElementById("cookies-block")

setTimeout(() => {
    Cookies.classList.add('show')
}, 1000
)

function validation(form) {

    function removeError(input, text) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
            document.getElementById('input-warning').style.display = "none";
            document.getElementById('input-warn').style.display = "none";
            document.getElementById('form-btn').style.background = "#954ced";
            document.getElementById('input-warn__second').style.display = "none";
            document.getElementById('input-warn__third').style.display = "none";
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')
        document.getElementById('input-warning').style.display = "block";
        document.getElementById('input-warn').style.display = "block";
        document.getElementById('input-warn__second').style.display = "block";
        document.getElementById('input-warn__third').style.display = "block";
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }

    let result = true;

    const allInputs = form.querySelectorAll('input.input-field.req');

    for (const input of allInputs) {
        removeError(input)
        if (input.value == "") {
            createError(input)
            result = false
        }
    }

    return result

}

document.getElementById('form-contact').addEventListener('submit', function (event) {
    event.preventDefault()
    if (validation(this) == true) {

        document.getElementById("contact-success").addEventListener("click", function () {
            document.getElementById("popup").style.display = "none";
            document.getElementById("popup-success").style.display = "flex";
        })

    }
})