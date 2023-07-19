// FUNCAO QUE VERIFICA SE O CLICK FOI FEITO DO LADO DE FORA
export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
        // verificando se o click é realmente fora
        if (!element.contains(event.target)) {
            // removendo o atributo
            element.removeAttribute(outside);
            // removendo o evento
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            callback();
        }
    }

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
        })
        element.setAttribute(outside, '');
    }
}