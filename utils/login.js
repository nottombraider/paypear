document.getElementById(('login-form')).addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById('login-form').reset();

    const toastDiv = document.getElementById('toast')
    toastDiv.className = 'show'
    toastDiv.innerText = 'Oops, login failed. Please contact our support.'

    setTimeout(() => {
        toastDiv.className = toastDiv.className.replace("show", "");
    }, 5000);
});
