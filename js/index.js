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


let contador = 0;



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
    } else {
        HeroVideo.style.transform = `rotate(0) scale(1)`;
        HeroVideo.style.width = "80vw";
        HeroVideo.style.height = "80vh";
        HeroVideoWrapper.style.top = `-${(contador - 12) * 10}%`;
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

    } else{
      ProjectH4.forEach((_ , i) => {
        ProjectH4[i].style.transform = `translateX(-${(contador - 22) * 10}vw)`;
    });
    WorkIntro.style.transform = `translateX(-${(contador - 22) * 10}vw)`;
    }

    HeroTitleWrapper.style.top = `-${contador * 10}%`;
    console.log(contador);
});

