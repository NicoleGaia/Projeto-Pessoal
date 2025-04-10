function clicarSkills(){
    var skills = document.getElementsByClassName("skills")[0]
    var skillsList = document.getElementsByClassName("skills-list")[0]

    if(skillsList.style.display = 'none'){
        skillsList.style.display = 'block'
        skills.style.backgroundColor = '#594fb1'
        skills.style.border = 'none'
    } else if(skillsList.style.display = 'block'){
        skillsList.style.display = 'none'
    }
    /*if(display == 0){
        skillsList.style.display = 'none'
        display = 1
    } else {
        skillsList.style.display = 'block'
        display = 0
    }*/
}
function clicarIdiomas(){
    var idiomas = document.getElementsByClassName("idiomas")[0]
    var idiomasList = document.getElementsByClassName("idiomas-list")[0]

    if(idiomasList.style.display = 'none'){
        idiomasList.style.display = 'block'
        idiomas.style.backgroundColor = '#594fb1'
        idiomas.style.border = 'none'
    } else if(idomasList.style.display = 'block'){
        idomasList.style.display = 'none'
    } 
}

function clicarPortfolio(){
    var portfolio = document.getElementsByClassName("portfolio")[0]
    var portfolioList = document.getElementsByClassName("portfolio-list")[0]

    if(portfolioList.style.display = 'none'){
        portfolioList.style.display = 'block'
        portfolio.style.backgroundColor = '#594fb1'
        portfolio.style.border = 'none'
    } else if(portfolioList.style.display = 'block'){
        portfolioList.style.display = 'none'
    } 
}

function clicarExperiencia(){
    var experiencia = document.getElementsByClassName("experiencia")[0]
    var experienciaList = document.getElementsByClassName("experiencia-list")[0]

    if(experienciaList.style.display = 'none'){
        experienciaList.style.display = 'block'
        experiencia.style.backgroundColor = '#594fb1'
        experiencia.style.border = 'none'
    } else if(experienciaList.style.display = 'block'){
        experienciaList.style.display = 'none'
    } 
}