function profil(){
    let profil = document.querySelector(".profil");
    
    profil.classList.toggle("profil_show");
}

async function stage_view(stage){
    let slideV = document.querySelector('.slide_view'); 
    let gridV = document.querySelector('.grid_view');
    let menu = document.querySelector('.stage_menu');
    slideV.classList.toggle('d-none');
    gridV.classList.toggle('d-none');

    if(menu.textContent == 'grid'){
        menu.innerHTML = "slide";
    }else if(menu.textContent == 'slide'){
        menu.innerHTML = "grid";
    }
}