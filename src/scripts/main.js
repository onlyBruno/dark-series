document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const text = document.querySelector('.sobre__item__text');
    const teorias = document.querySelectorAll('[data-faq-question]')
    const sectionLogo = document.querySelector('.logo__dark')
    const heightSectionLogo = sectionLogo.clientHeight
    let position = window.scrollY

    for(let i = 0; i < teorias.length;  i++) {
    teorias[i].addEventListener('click', abre_e_fecha_teorias)
    }

    window.addEventListener('load', function() {
        const logodark = document.querySelector('.logo__dark__item');
        setTimeout(function () {
            logodark.style.opacity = 1.7;
            logodark.style.transform = 'scale(1.05)';
        }, 500);
    });


    window.addEventListener("scroll", function() {
        const currentPosition = window.scrollY
        const logo = document.querySelector('.header__link__item__img')
        const headerlogo = document.querySelector('.header__logo')
        const liheader = document.querySelectorAll('.header__link__nav')

        
        if (currentPosition < heightSectionLogo) {
            logo.style.transform = 'rotate(180deg)';
        } else {
            logo.style.transform = 'rotate(0deg)'
        }


        if (currentPosition > heightSectionLogo) {
            headerlogo.style.opacity = '0'
            headerlogo.style.transition = "all 2s"

        } else {
            headerlogo.style.opacity = '1'
        }

    });

    


    buttons.forEach(function(button) {
        button.addEventListener('click', function (botao) {
            const abaAlvo  = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`)
            escondeAbas()
            removeBotaoAtivo()
            aba.classList.add('personagens__list--is-active')
            botao.target.classList.add('personagens__tabs__button--is-active')

        })
    })

        function abre_e_fecha_teorias(elemento) {
            const classe = 'teorias__content__item--is-open'
            const elementopai = elemento.target.parentNode
            console.log(elementopai)

            elementopai.classList.toggle(classe)
        }

        function removeBotaoAtivo() {
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('personagens__tabs__button--is-active')
            }
        }

        function escondeAbas() {
            const tabsContainer = document.querySelectorAll('[data-tab-id]')

            for(let i = 0; i < tabsContainer.length; i++) {
                tabsContainer[i].classList.remove('personagens__list--is-active')
            }
        }

    
        function reveal() {
        const reveals = document.querySelectorAll('.sobre__item');
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
    
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
    
            if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('animar');
            } else {
            reveal.classList.remove('animar');
            }
        });
        }
    
        function maquinaDeEscrever(elemento) {
        const textArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textArray.forEach((letra, i) => {
            setTimeout(function() {
            elemento.innerHTML += letra;
            }, 25 * i);
        });

        
        }
    
        maquinaDeEscrever(text);
        reveal();
    
        // Chama a função reveal() quando a página é rolada
        window.addEventListener('scroll', reveal);
    });