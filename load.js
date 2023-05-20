const load = document.querySelector(".load");
// const datas =  getJSON('stage.json');
const slideView = document.querySelector(".slide_view");
const gridView = document.querySelector(".grid_view");

async function getJSON(json_file) {
    const response = await fetch(json_file);
    const json = await response.json();
    return json;
    // console.log(json[0]);
}

function loadin(){
    load.classList.toggle("load_hide");
    load.innerHTML = "Loading...";
}

function loadout(){
    load.innerHTML = "";
    load.classList.toggle("load_hide");
}

function slideV(stages){
    let section = document.createElement("section");
    section.setAttribute("id","image-carousel");
    section.setAttribute("class","splide");
    section.setAttribute("aria-label","Beautiful Images");

    let div = document.createElement("div");
    div.classList.add("splide__track");

    let ul = document.createElement("ul");
    ul.classList.add("splide__list");

    stages.forEach(s => {
        let li = document.createElement("li");
        li.classList.add("splide__slide")
        li.innerHTML = `
        <h2>${s.name}</h2>
                <img src="${s.url}" alt="">
                <div class="level">
                  <button class="btn btn-success">Eazy<span>${s.eazy}</span></button>
                  <button class="btn btn-primary">Medium<span>${s.medium}</span></button>
                  <button class="btn btn-danger">Hard<span>${s.hard}</span></button>
        </div>
        ` 
        // console.log(s);

        ul.append(li);        
    });

    div.append(ul);
    section.append(div)

    slideView.append(section)
}
function gridV(stages){
    let section = document.createElement("section");
    section.classList.add("row");
    stages.forEach(s => {
        let div = document.createElement("div");
        div.setAttribute("class","stage col-4 p-2");
        div.innerHTML = `
        <h2>${s.name}</h2>
            <img src="${s.url}" alt="">
            <div class="level">
              <button class="btn btn-success">Eazy</button>
              <button class="btn btn-primary">Medium</button>
              <button class="btn btn-danger">Hard</button>
        </div>
        `
        section.append(div);
    });

    gridView.append(section);
}
function splide(){
    new Splide( '#image-carousel', {
        type   : 'loop',
        padding: '20%',
    }  ).mount();
}
async function loading(){
    loadin();

    let d = await getJSON('stage.json');
    
    await slideV(d[0].stages);
    await gridV(d[0].stages);

    await splide();

    loadout();
}

loading();

