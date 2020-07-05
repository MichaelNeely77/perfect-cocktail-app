class UI {
    // Displays a cutom message

    printMessage(message, className) {
        const div = document.createElement('div');

        div.innerHTML = `
            <div class="alert alert-dismissable alert-${className}">
                <button type="button" class="close" data-dismiss="alert">X</button>
                ${message}
            </div>
        `;

        const reference = document.querySelector('.jumbotron h1');
        const parentNode = reference.parentElement;
        parentNode.insertBefore(div, reference);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }

}