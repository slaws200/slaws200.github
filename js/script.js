document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu .menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    const links = document.querySelectorAll('[href="#"]');
    links.forEach(item => {
        item.addEventListener('click', (e) => e.preventDefault());
    });

    const modal = document.querySelectorAll('[data-modal]');
    const modalBg = document.querySelector('.modal');
    modal.forEach(item => {
        item.addEventListener('click', () => {
            modalBg.style.cssText = 'opacity: 1; z-index: 10;';
        })
    })
    document.querySelectorAll('.modal_close').forEach(item => {
        item.addEventListener('click', () => document.querySelector('.modal').style.cssText = '');
        modalBg.addEventListener('click', (e) => {
            if(e.target === modalBg){
                document.querySelector('.modal').style.cssText = '';
                if(form.contains(error)){form.removeChild(error)}
            }
        });
    })
    document.addEventListener('keydown', (e) => {
        if(e.key === "Escape" || e.keyCode === 27){
            document.querySelector('.modal').style.cssText = '';
            if(form.contains(error)){form.removeChild(error)}
        }
    })
    const formName = document.querySelector('[name="name"]'),
          formPhone = document.querySelector('[name="phone"]'),
          formEmail = document.querySelector('[name="email"]'),
          form = document.querySelector('.feed-form'),
          modalThanks = document.querySelector('.modal_thanks');
    
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault(); 
        modalBg.querySelector('.modal_dialog').style.display = 'none';
        modalThanks.style.display = 'flex';
        e.target.reset();
        setTimeout(function(){
            modalThanks.style.display = 'none'; 
            document.querySelector('.modal').style.cssText = '';         
                     
        }, 1500);
        setTimeout(() => modalBg.querySelector('.modal_dialog').style.display = '', 3000);               
    })


    const error = document.createElement('div');
          error.classList.add('error');

    function validateName(){
        if(form.contains(error)){form.removeChild(error)}
        error.textContent = 'Укажите корректное имя';
        if(formName.value == '' || formName.value.length < 3){            
            if(form.contains(error)){
                console.log('этот элемент существует');
            } else {                
                formName.insertAdjacentElement("afterend", error);
            }
        } else {
            if(form.contains(error)){
                form.removeChild(error);
            }
        }
    }
    function validatePhone(){
        if(form.contains(error)){form.removeChild(error)}
        error.textContent = 'Укажите корректный номер телефона';
        if(formPhone.value == '' || formPhone.value.length < 11){            
            if(form.contains(error)){
                console.log('этот элемент существует');
            } else {                
                formPhone.insertAdjacentElement("afterend", error);
            }
        } else {
            if(form.contains(error)){
                form.removeChild(error);
            }
        }
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validateEmail(){
        if(form.contains(error)){form.removeChild(error)}
        error.textContent = 'Укажите корректный e-mail';
        if(!emailPattern.test(formEmail.value)){            
            if(form.contains(error)){
                console.log('этот элемент существует');
            } else {                
                formEmail.insertAdjacentElement("afterend", error);
            }
        } else {
            if(form.contains(error)){
                form.removeChild(error);
            }
        }
    }
    
    formName.addEventListener('input', validateName);
    formPhone.addEventListener('input', validatePhone);
    formEmail.addEventListener('input', validateEmail);
})
