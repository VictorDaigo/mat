const Cursor = document.querySelector(`.Cursor`)
const CursorBasic = Cursor.querySelector(`.Cursor-basic`)
const CursorPointer = Cursor.querySelector(`.Cursor-pointer`)
const CursorVideo = Cursor.querySelector(`.Cursor-video`)
const Menu = document.querySelector(`.Menu`)
const MenuLetrasWrapper = document.querySelectorAll(`.Menu-letrasWrapper`)
const MenuIcon = document.querySelector(`.Menu-icon-img`)
const Nav = document.querySelector(`.Nav`)
const NavA = document.querySelectorAll(`.Nav-a`)
const HeaderH1 = document.querySelector(`.Header-h1`)
const HeroTitleWrapper = document.querySelector(`.Hero-title-wrapper`);
const HeroVideo = document.querySelector(`.Hero-video`)
const HeroVideoWrapper = document.querySelector(`.Hero-videoWrapper`)
const Gallery = document.querySelector(`.Gallery`)
const WorkIntro = document.querySelector(`.WorkIntro`)
const ProjectH4 = document.querySelectorAll(`.Project-h4`)
const Work = document.querySelector(`.Work`)
const WorkIntroImgWrapperRight = document.querySelector(`.WorkIntro-imgWrapper--right`)
const WorkIntroImgWrapperLeft = document.querySelector(`.WorkIntro-imgWrapper--left`)
const ProjectsImgGalleryfirst = document.querySelector(`.Projects-imgGallery--first`)
const ProjectsImgGallerysecond = document.querySelector(`.Projects-imgGallery--second`)
const ProjectsImgGallerythird = document.querySelector(`.Projects-imgGallery--third`)

const ProjectsimgWrapperFirst = document.querySelectorAll(`.Projects-imgWrapper--first`)
const ProjectsimgWrapperSecond = document.querySelectorAll(`.Projects-imgWrapper--second`)
const ProjectsimgWrapperThird = document.querySelectorAll(`.Projects-imgWrapper--third`)
const ProjectsimgWrapperforth = document.querySelectorAll(`.Projects-imgWrapper--forth`)
const ProjectsimgWrapperfifth = document.querySelectorAll(`.Projects-imgWrapper--fifth`)
const ProjectsimgWrapperSix = document.querySelectorAll(`.Projects-imgWrapper--six`)
const ProjectsimgWrapperSeven = document.querySelectorAll(`.Projects-imgWrapper--seven`)
const ProjectsimgWrapperEight = document.querySelectorAll(`.Projects-imgWrapper--eight`)
const ProjectsimgWrapperNine = document.querySelectorAll(`.Projects-imgWrapper--nine`)
const PageContent = document.querySelector(`.Page-content`)
const Services = document.querySelector(`.Services`)
const ServicesDivFirst = document.querySelector(`.Services-div--first`) 
const ServicesDivSecond = document.querySelector(`.Services-div--second`) 
const ServicesDivThird = document.querySelector(`.Services-div--third`) 
const firstServiceImages = document.querySelectorAll('.Services-div--first .Service-imgWrapper');
const firstServiceText = document.querySelector('.Services-div--first .Service-p--first');
const secondServiceImages = document.querySelectorAll('.Services-div--second .Service-imgWrapper');
const secondServiceText = document.querySelector('.Services-div--second .Service-p--second');
const thirdServiceImages = document.querySelectorAll('.Services-div--third .Service-imgWrapper');
const thirdServiceText = document.querySelector('.Services-div--third .Service-p--third');
const Contact = document.querySelector(`.Contact`)
const Footer = document.querySelector(`.Footer`)
let contador = 0;
let isClicked = false;
window.addEventListener( `mousemove`, (e)=>{
  let { clientX, clientY } = e;
  Cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

})

function activarCursor() {
  CursorBasic.classList.remove('CursorPointerIsActive');
  CursorPointer.classList.add('CursorPointerIsActive');
}

function desactivarCursor() {
  CursorBasic.classList.add('CursorPointerIsActive');
  CursorPointer.classList.remove('CursorPointerIsActive');
}

// Aplicar el efecto a los enlaces
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', activarCursor);
  link.addEventListener('mouseleave', desactivarCursor);
});

// Aplicar el efecto a Menu
if (Menu) {
  Menu.addEventListener('mouseenter', activarCursor);
  Menu.addEventListener('mouseleave', desactivarCursor);
}

// Aplicar el efecto a cada elemento de ProjectH4
ProjectH4.forEach(item => {
  item.addEventListener('mouseenter', activarCursor);
  item.addEventListener('mouseleave', desactivarCursor);
});
HeroVideo.addEventListener(`mouseenter`, ()=>{
  CursorBasic.classList.remove('CursorPointerIsActive');
  CursorPointer.classList.remove('CursorPointerIsActive');
  CursorVideo.classList.add('CursorPointerIsActive');
})
HeroVideo.addEventListener(`mouseleave`, ()=>{
  CursorBasic.classList.add('CursorPointerIsActive');
  CursorPointer.classList.remove('CursorPointerIsActive');
  CursorVideo.classList.remove('CursorPointerIsActive');
})
Menu.addEventListener(`mouseenter`, () => { 
  MenuLetrasWrapper.forEach(wrapper => wrapper.classList.remove(`MouseIsOver`));

  if (!isClicked) {
    MenuIcon.classList.remove(`MouseIsOver`);
  }
});

Menu.addEventListener(`mouseleave`, () => {
  MenuLetrasWrapper.forEach(wrapper => wrapper.classList.add(`MouseIsOver`));

  if (!isClicked) {
    MenuIcon.classList.add(`MouseIsOver`);
  }
});

Menu.addEventListener('click', function() {
  isClicked = !isClicked;
  if (isClicked) {
    MenuIcon.classList.add(`ClickedRotate`);
  } else {
    MenuIcon.classList.remove(`ClickedRotate`);
  }
  Nav.classList.toggle('NavIsVisible')
  HeaderH1.classList.add('NavIsVisible');
  HeaderH1.addEventListener('mouseenter', activarCursor);
  HeaderH1.addEventListener('mouseleave', desactivarCursor);

  NavA.forEach(( _ , i )=>{
    NavA[i].classList.toggle('NavAIsVisible')
  })
  if (MenuLetrasWrapper.length >= 5) {
      const cambios = ['C', 'L', 'O', 'S', 'E'];
      const originales = ['M', 'E', 'N', 'U', ''];
      
      let isChanged = MenuLetrasWrapper[0].querySelector('.Menu-letras').textContent === cambios[0];
      
      MenuLetrasWrapper.forEach((wrapper, index) => {
          if (index < cambios.length) {
              const spans = wrapper.querySelectorAll('.Menu-letras');
              spans.forEach(span => span.textContent = isChanged ? originales[index] : cambios[index]);
          }
      });
  }
});

window.addEventListener(`wheel`, (e) => {
    let { deltaY } = e;

    if (deltaY > 0) {
        contador++;  // Permite que contador siga aumentando
    } else if (deltaY < 0) {
        contador--;
        if (contador < 0) contador = 0;
    }

    if (contador < 12) {
        HeroVideo.style.transform = `rotate(-5deg) scale(${1 + contador * 0.1})`;
        HeroVideo.style.width = "";
        HeroVideo.style.height = "";
        HeaderH1.classList.remove('NavIsVisible');

    } else {
        HeroVideo.style.transform = `rotate(0) scale(1)`;
        HeroVideo.style.width = "80vw";
        HeroVideo.style.height = "80vh";
        HeroVideoWrapper.style.top = `-${(contador - 12) * 10}%`;
        HeaderH1.classList.add('NavIsVisible');
        HeaderH1.addEventListener('mouseenter', activarCursor);
        HeaderH1.addEventListener('mouseleave', desactivarCursor);

    }

    if (contador < 22) {
        Work.style.transform = `translateY(-${(contador - 12) * 10}%)`;
    } 
    // Cuando contador >= 22, congelamos Work en su última posición sin resetearlo a 0
    else if (contador >= 22 && contador < 41) {
        Work.style.transform = `translateY(-${(22 - 12) * 10}%)`; // -100%
    }

    if (contador < 22) {
        WorkIntro.style.transform = `translateX(0)`;
        ProjectH4.forEach((_ , i) => {
            ProjectH4[i].style.transform = `translateX(0)`;
        });
        ProjectsImgGalleryfirst.style.opacity = `0`;
    } else if (contador >= 22) {
        ProjectsImgGalleryfirst.style.opacity = `1`;
        WorkIntro.style.transform = `translateX(-${(contador - 22) * 10}vw)`; // Congela en -100vw
        ProjectH4.forEach((_ , i) => {
            ProjectH4[i].style.transform = `translateX(-${(contador - 22) * 10}vw)`;
        });
         WorkIntroImgWrapperRight.style.transform = `translate(${(contador - 22) *20}vw, ${(contador - 22) *5}vw)`
         WorkIntroImgWrapperLeft.style.transform = `translate(${(contador - 22) *4}vw, ${(contador - 22) *1}vw)`
         ProjectsimgWrapperFirst.forEach((_ , i)=>{
            ProjectsimgWrapperFirst[i].style.transform = `translate(${(contador - 22) * 5}vw, ${(contador - 22) * 4}vh) scale(${1 + (contador - 22) * 3})`;
         })
         ProjectsimgWrapperSecond.forEach((_ , i)=>{
            ProjectsimgWrapperSecond[i].style.transform = `translate(${(contador - 22) * 4}vw, ${(contador - 22) * 5}vh) scale(${1 + (contador - 22) * 0.9})`;
         })
         ProjectsimgWrapperThird.forEach((_ , i)=>{
            ProjectsimgWrapperThird[i].style.transform = `translate(${(contador - 22) * 5}vw, ${(contador - 22) * 2}vh) scale(${1 + (contador - 22) * 0.6})`;
         })

    }
    if(contador >= 31){
      ProjectsImgGallerysecond.style.opacity = `1`;
      ProjectsimgWrapperFirst.forEach((_ , i)=>{
        ProjectsimgWrapperFirst[i].style.transform = `translate(${(contador - 22) * 7}vw, ${(contador - 22) * 5.6}vh) scale(${1 + (contador - 22) * 4.2})`;
     })

      ProjectsimgWrapperforth.forEach((_ , i)=>{
        ProjectsimgWrapperforth[i].style.transform = `translate(-${(contador - 31) * 4.5}vw, ${(contador - 31) * 4}vh) scale(${1 + (contador - 31) * 2})`;
     })
     ProjectsimgWrapperfifth.forEach((_ , i)=>{
      ProjectsimgWrapperfifth[i].style.transform = `translate(-${(contador - 31) * 2.3}vw, ${(contador - 31) * 3}vh) scale(${1 + (contador - 31) * 0.9})`;
   })
   ProjectsimgWrapperSix.forEach((_ , i)=>{
    ProjectsimgWrapperSix[i].style.transform = `translate(-${(contador - 31) * 3}vw, -${(contador - 31) * 2}vh) scale(${1 + (contador - 31) * 0.6})`;
   })
    } else{
      ProjectsImgGallerysecond.style.opacity = `0`;
    }
    if( contador>=42){
      ProjectsImgGallerythird.style.opacity = `1`;
      ProjectsimgWrapperforth.forEach((_ , i)=>{
        ProjectsimgWrapperforth[i].style.transform = `translate(-${(contador - 31) * 6.3}vw, ${(contador - 31) * 5.6}vh) scale(${1 + (contador - 31) * 2.8})`;
     })
     ProjectsimgWrapperSeven.forEach((_ , i)=>{
      ProjectsimgWrapperSeven[i].style.transform = `translate(${(contador - 42) * 4.5}vw, -${(contador - 42) * 4}vh) scale(${1 + (contador - 42) * 2})`;
     })
     ProjectsimgWrapperEight.forEach((_ , i)=>{
      ProjectsimgWrapperEight[i].style.transform = `translate(${(contador - 42) * 1}vw, -${(contador - 42) * 2.5}vh) scale(${1 + (contador - 42) * 0.3})`;
     })
     ProjectsimgWrapperNine.forEach((_ , i)=>{
      ProjectsimgWrapperNine[i].style.transform = `translate(${(contador - 42) * 2}vw, -${(contador - 42) * 2}vh) scale(${1 + (contador - 42) * 0.3})`;
     })

    } else{
      ProjectsImgGallerythird.style.opacity = `0`;
    }

    if (contador >= 52) {
      WorkIntro.style.transform = `translateX(-${(52 - 22) * 10}vw)`;
      ProjectH4.forEach((_ , i) => {
        ProjectH4[i].style.transform = `translateX(-${(52 - 22) * 10}vw)`;
    });
    ProjectsimgWrapperforth.forEach((_ , i)=>{
      ProjectsimgWrapperforth[i].style.transform = `translate(-${(52 - 31) * 6.3}vw, ${(52 - 31) * 5.6}vh) scale(${1 + (52 - 31) * 2.8})`;
   })
   ProjectsimgWrapperSeven.forEach((_ , i)=>{
    ProjectsimgWrapperSeven[i].style.transform = `translate(${(52 - 42) * 4.5}vw, -${(52 - 42) * 4}vh) scale(${1 + (52 - 42) * 2})`;
   })
   ProjectsimgWrapperEight.forEach((_ , i)=>{
    ProjectsimgWrapperEight[i].style.transform = `translate(${(52 - 42) * 1}vw, -${(52 - 42) * 2.5}vh) scale(${1 + (52 - 42) * 0.3})`;
   })
   ProjectsimgWrapperNine.forEach((_ , i)=>{
    ProjectsimgWrapperNine[i].style.transform = `translate(${(52 - 42) * 2}vw, -${(52 - 42) * 2}vh) scale(${1 + (52 - 42) * 0.3})`;
   })
   Services.style.transform = `translateY(-${(contador - 52) * 10}%)`;
   PageContent.style.backgroundColor = "lightcyan";
   Work.style.transform = `translateY(-${(contador - 42) * 10}%)`;
    } else{
      ProjectH4.forEach((_ , i) => {
        ProjectH4[i].style.transform = `translateX(-${(contador - 22) * 10}vw)`;
    });
    PageContent.style.backgroundColor = "white";
    WorkIntro.style.transform = `translateX(-${(contador - 22) * 10}vw)`;
    }
    function toggleActiveState(counter, min, max, elements, textElement) {
      if (counter >= min && counter <= max) {
          elements.forEach(el => el.classList.add('IsActive'));
          textElement.classList.add('ServicePIsActive');
      } else {
          elements.forEach(el => el.classList.remove('IsActive'));
          textElement.classList.remove('ServicePIsActive');
      }
  }
  
  // Aplicamos la función con los tres rangos
  toggleActiveState(contador, 59, 61, firstServiceImages, firstServiceText);
  toggleActiveState(contador, 62, 64, secondServiceImages, secondServiceText);
  toggleActiveState(contador, 65, 67, thirdServiceImages, thirdServiceText);
  
  if( contador >= 67){
    Contact.style.transform = `translateY(-${(contador - 67) * 10}%)`;
    Footer.style.transform = `translateY(-${(contador - 67) * 10}%)`;
    PageContent.style.backgroundColor = "white";
    
  }
  if( contador >= 77){
    
    Footer.style.transform = `translateY(-${(77 - 67) * 10}%)`;
   
    
  }else{
    
    Footer.style.transform = `translateY(-${(contador - 67) * 10}%)`;
  }
    HeroTitleWrapper.style.top = `-${contador * 10}%`;
    console.log(contador);
});

