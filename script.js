window.onload = function() {
    let popUp = new Popup({
        modal: '.modal',
        overlay: '.overlay'
    });

    // показать окно после 3-сек
    // setTimeout(function(){
    //     popUp.open('<h1>Hello, world!');
    // }, 3000);

    document.querySelector('.callme').onclick = function() {
        let form = document.querySelector('.callme_popup');
        // загружаем HTML код формы в pop-up
        popUp.open(form.innerHTML);
    }

    document.querySelector('.send').onclick = function() {
        let form =document.querySelector('.msg_popup');
        
        popUp.open(form.innerHTML);
    }
}