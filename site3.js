let title = "Muntii Rodnei: Varful Pietrosul Rodnei (2303 m)";
document.getElementById('titlu-traseu').innerHTML = title;
console.log('muntii rodnei');

let description ="Traseu";
document.getElementById('description-of-route').innerHTML = description ;

let monastery = "Manastirea Pietroasa";
document.getElementById('pietroasa-monastery').innerHTML = monastery + '(970m) -';

let station = "Statia Meteorologica Iezer";
document.getElementById('iezer-station').innerHTML = station + '(1760 m) -';

let lake = "Lacul Iezer";
document.getElementById('iezer-lake').innerHTML = lake + '(1786 m) -';

let peak = "Varful Pietrosul Rodnei";
document.getElementById('mountain-peak').innerHTML = peak + '( 2303 m)'; 
console.log(title + description + monastery + station + lake + peak);

let markingRoute = "Marcaj: banda albastra";
document.getElementById('marking').innerHTML = markingRoute; 

var img = document.createElement('img');
img.src = './assets/banda_albastra.jpg';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "marcaj banda albastra"
document.getElementById('marking-img').appendChild(img);

var img = document.createElement('img');
img.src = './assets/time.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "time";
document.getElementById('route-time-img').appendChild(img);

let routeTime= "Durata: 7h dus - intors";
document.getElementById('route-time').innerHTML = routeTime; 

var img = document.createElement('img');
img.src = './assets/distance.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "distance" ;
document.getElementById('distance-route-img').appendChild(img);

let distanceRoute= "Distanta: 15 km dus - intors";
document.getElementById('distance-route').innerHTML = distanceRoute; 

var img = document.createElement('img');
img.src = './assets/route_dificulties.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "route_dificulties";
document.getElementById('route_dificulties-img').appendChild(img);

let routeDificulties= "Dificultate: medie";
document.getElementById('route_dificulties').innerHTML = routeDificulties;

var img = document.createElement('img');
img.src = './assets/difference in level.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = 'difference-in-level';
document.getElementById('difference-in-level-img').appendChild(img);

let routeDifferenceLevel = "Diferenta de nivel: +/- 1330 m";
document.getElementById('difference-in-level').innerHTML = routeDifferenceLevel;

var img = document.createElement('img');
img.src = './assets/season.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "season";
document.getElementById('season-img').appendChild(img);

let seasonRoute= "Sezon: calduros, luna august";
document.getElementById('seson').innerHTML = seasonRoute;


var img = document.createElement('img');
img.src = './assets/trekking.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "equipment";
document.getElementById('equipment-img').appendChild(img);

let equipmentRoute= "Echipament de sezon: bocanci/ghete adecvate, bete de trekking, sapca, ochelari de soare, crema cu SPF";
document.getElementById('equipment').innerHTML = equipmentRoute;

let routeDescription= "Descriere traseu:";
document.getElementById('route-description').innerHTML = routeDescription;

var img = document.createElement('img');
img.src = './assets/location.png';
img.setAttribute('height', '40px');
img.setAttribute('width', '40px');
img.alt = "start_location"
document.getElementById('starting_point-img').appendChild(img);


var paragraph = document.createElement("p");
var paragraphText = document.createTextNode("Traseul porneste de la ");
paragraph.appendChild(paragraphText);

var link = document.createElement("a");
link.innerHTML = "Manastirea Pietroasa";
link.href = "#";
paragraph.appendChild(link);
var subText = document.createTextNode(" (altitudine 980 m), de aici si pana in statiunea Borsa sunt aproximativ 5 km, distanta ce poate fi parcursa cu autoturismul.");
paragraph.appendChild(subText);
var container = document.getElementById("startingPointPartOne");
startingPointPartOne.appendChild(paragraph);


let firstPartRoute = 'Prima parte de traseu incepe cu un urcus pe un drum forestier, pietros, dupa care intram in padure si asa continuam pana la Statia Meteorologica Iezer.';
document.getElementById('the-first-part-of-the-route').innerHTML = firstPartRoute ;

var img = document.createElement('img');
img.src = './assets/1_inceput_de_traseu.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = "beginning-of-the-route"
document.getElementById('beginning-of-the-route').appendChild(img);

var figcaption = document.createElement("figcaption");
var captionText = document.createTextNode("Fig. 1 - Inceput de traseu");
figcaption.appendChild(captionText);
var figure = document.getElementById("figure-beginning-of-the-route");
figure.appendChild(figcaption);

var img = document.createElement('img');
img.src = './assets/2_intrarea_in_parc.jpg';
img.setAttribute('height', '300px');
img.setAttribute('width', '100%');
img.alt = 'entrance_in_park';
document.getElementById('entrance_in_park').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 2 - Intrarea in rezervatie');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure-entrance_in_park');
figure.appendChild(figcaption);

let mountain_trail = 'Timpul efectiv de la punctul de plecare si pana la Statia Meteo este de 2h.'
document.getElementById('mountain_trail').innerHTML = mountain_trail;

var img = document.createElement('img');
img.src = './assets/3_jnepeni.jpg'
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'among-the-junipers';
document.getElementById('among-the-junipers').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 3 - Printre Jnepeni');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure-among-the-junipers');
figure.appendChild(figcaption);

var img = document.createElement('img');
img.src = './assets/3_statia_meteo.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'weather_station';
document.getElementById('weather_station').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 4 - Statia Meteorologica Iezer');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure-weather_station');
figure.appendChild(figcaption);

let campingArea = 'In aceasta zona este permisa camparea.'
document.getElementById('campingArea').innerHTML = campingArea;

var img = document.createElement('img');
img.src = './assets/4_loc_de_campare.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'camping_place';
document.getElementById('camping_place').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 5 - Zona de campare');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure-camping_place');
figure.appendChild(figcaption);

var img = document.createElement('img');
img.src = './assets/4_loc de campare.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'camping_place';
document.getElementById('camping_place_two').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 6 - Zona de campare din departare');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure-camping_place_two');
figure.appendChild(figcaption);

// Creez elementele necesare
var paragraf = document.createElement('p');
var textInainte = document.createTextNode('De la ');
var link = document.createElement('a');
var textDupaLink = document.createTextNode(' continuam drumul printre jnepeni si in 10 minute ajungem la faimosul lac glaciar Iezer, care are o suprafata de 3450 mp.');
// Setez URL-ul linkului
link.href = '#';
// Adaug textul în interiorul paragrafului
paragraf.appendChild(textInainte);
// Adaug linkul în interiorul paragrafului
link.appendChild(document.createTextNode('Statia Meteorologica Iezer'));
paragraf.appendChild(link);
// Adaug textul după link în interiorul paragrafului
paragraf.appendChild(textDupaLink);
// Caut elementul <div> cu ID-ul specificat
var divElement = document.getElementById('meteorologicalStationIezer')
// Adaug paragraful în interiorul div-ului
divElement.appendChild(paragraf);


var img = document.createElement('img');
img.src = './assets/5_lacul_iezer.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'lakeIezer';
document.getElementById('lakeIezer').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 7 - Lacul Iezer');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure-lake-iezer');
figure.appendChild(figcaption);

var img = document.createElement('img');
img.src = './assets/6_lacul_iezer.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'lakeIezerTwo';
document.getElementById('lakeIezerTwo').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 8 - Lacul Iezer');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure_lakeIezerTwo');
figure.appendChild(figcaption);

var button = document.getElementById("glacial_lake_iezer_button");
button.addEventListener("click", function() {
  console.log("Butonul a fost apăsat!");
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let glacial_lake_iezer = 'Lacul Iezer &#9432;'
document.getElementById('glacial_iezer').innerHTML = glacial_lake_iezer;

let content_glacial_lake_iezer = 'Lacul Iezer este un lac glaciar. Este localizat in muntii Rodnei, sub varful Pietrosu, la o altitudine de 1.825 m. Are suprafata de 3450 mp, adancimea maxima de 2,5 m si lungimea de 84 m. Face parte din rezervatia naturala ˝Pietrosu Mare˝.'
document.getElementById('content_glacial_lake_iezer').innerHTML = content_glacial_lake_iezer;

let the_mysteries_of_the_lake = 'Misterele lacului - despre Lacul Iezer circula multe zvonuri, unul dintre ele ar fi ca, acesta comunica cu Marea Neagra, unii spun ca s-au aruncat in lac niste lemne, si ca acestea au iesit in mare, de aici si legenda ˝lacului fara fund˝.';
document.getElementById('the_mysteries_of_the_lake').innerHTML = the_mysteries_of_the_lake;

let top_view = 'Lacul Iezer mai este cunoscut si pentru forma sa, care seamana cu harta Romaniei. Daca il privesti de sus iti poti da seama de acet lucru.'
document.getElementById('top_view').innerHTML = top_view;

var img = document.createElement('img');
img.src = './assets/7_lacul_iezer_harta_romaniei.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'lake_iezer_map_of_Romania';
document.getElementById('lake_iezer_map_of_Romania').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 9 - Din serpentine- vedere spre Lacul Iezer');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure_lake_iezer_map_of_Romania');
figure.appendChild(figcaption);

var videoContainer = document.getElementById('peak_ascent_video');
var video = document.createElement("video");
video.src = 'assets/8_ascensiunea spre varf.mp4';
video.controls = true;
video.setAttribute('height', '300px');
video.setAttribute('width', '100%');
video.setAttribute('type', 'video/mp4');
video.alt = 'Ascent to the Peak Pietrosul Rodnei';
videoContainer.appendChild(video);

let description_of_the_route_to_the_top = 'Continuam traseul, ocolind lacul prin stanga, si incepem usor ascensiunea pe serpentine, pana ajungem la o intersectia cu traseul ce duce spre Lacul Buhaiescu la stanga, iar noi continuam disrect spre varf, pe tarseul din dreapta.'
document.getElementById('description_of_the_route_to_the_top').innerHTML = description_of_the_route_to_the_top;

let distance_to_the_lake = 'Distanta de la Lacul Iezer si pana la Varful Pietrosul Rodnei este de 2.5 km parcursa in aproximativ 1.5 h de ascensiune, apoi ajunsi pe creasta, la Parul de Fier, unde avem vedere catre Gargalau (2159 m) si Inau (2279 m). .'
document.getElementById('distance_to_the_lake').innerHTML = distance_to_the_lake;

var img = document.createElement('img');
img.src = './assets/9_pe platou.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'view_to_buhaiescu_peak';
document.getElementById('view_to_buhaiescu_peak').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 10 - Vedere spre Vf Buhaescu Mare (2268 m)');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure_view_to_buhaiescu_peak');
figure.appendChild(figcaption);

var videoContainer = document.getElementById('ascent_to_the_top');
var video = document.createElement("video");
video.src = 'assets/9_ascensiune_spre varf.mp4';
video.controls = true;
video.setAttribute('height', '300px');
video.setAttribute('width', '100%');
video.setAttribute('type', 'video/mp4');
video.alt = 'Ascent to the Peak Pietrosul Rodnei';
videoContainer.appendChild(video);

let iron_boot = 'De la Parul de Fier continuam la dreapta spre Varf pe o poteca timp de 20 minute;'
document.getElementById('iron_boot').innerHTML = iron_boot;

var img = document.createElement('img');
img.src = './assets/10 spre varf.jpg'
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'ascent_to_Pietrosul_Rodnei_Peak';
document.getElementById('ascent_to_Pietrosul_Rodnei_Peak').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 11 - Urcare spre Vf Pietrosul Rodnei');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure_ascent_to_Pietrosul_Rodnei_Peak');
figure.appendChild(figcaption);

var img = document.createElement('img');
img.src= './assets/10.spre varful Pietrosul Rodnei.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'descent_from_Pietrosul_Rodnei_Peak';
document.getElementById('descent_from_Pietrosul_Rodnei_Peak').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 12 - Coborare din Vf Pietrosul Rodnei');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure_descent_from_Pietrosul_Rodnei_Peak');
figure.appendChild(figcaption);

var paragraph = document.createElement('p');
var link = document.createElement('a');
link.href = '#';
link.textContent = 'Varful Pietrosul Rodnei';
var textDupaLink = document.createTextNode(', este cel mai inalt pisc muntos din Muntii Rodnei, are o inaltime de 2303 m, de asemenea este si cel mai inalt varf din intregul lant al Carpatilor Orientali.');
paragraph.appendChild(link);
paragraph.appendChild(textDupaLink);
var rokyPeak = document.getElementById('roky_peak');
rokyPeak.appendChild(paragraph);

var img = document.createElement('img');
img.src = './assets/11_vedere din varf.jpg';
img.setAttribute('heigt', '300px');
img.setAttribute('width', '100%');
img.alt = 'view_from_Pietrosul_Rodnei';
document.getElementById('view_from_Pietrosul_Rodnei').appendChild(img);

var figcaption = document.createElement('figcaption');
var captionText = document.createTextNode('Fig. 13 - Vf. Pietrosul Rodnei - vedere spre zona Maramuresului');
figcaption.appendChild(captionText);
var figure = document.getElementById('figure_view_from_Pietrosul_Rodnei');
figure.appendChild(figcaption);

let description_of_the_rodnei_mountains = 'Muntii Rodnei &#9432;'
document.getElementById('description_of-the_rodnei_mountains_button').innerHTML = description_of_the_rodnei_mountains;

let description_of_the_rodnei_mountains_one_paragraph_one = 'Muntii Rodnei fac parte din grupul de nord al Carpatilor Orientali. Cu inăltimea maximă de 2.303 de metri, atinsa de piscul Pietrosul, Muntii Rodnei sunt cei mai inalli si mai greu de străbătut din lantul Carpatilor Orientali.'
document.getElementById('description_of_the_rodnei_mountains_one_paragraph_one').innerHTML = description_of_the_rodnei_mountains_one_paragraph_one;

let description_of_the_rodnei_mountains_one_paragraph_two = 'Parcul National Muntii Rodnei reprezinta cea mai mare arie protejata, localizata în grupul nordic al Carpatilor Orientali, pe o suprafata de 47.227 de hectare, din care 3.300 hectare au fost declarate in anul 1979 rezervatie a biosferei.'
document.getElementById('description_of_the_rodnei_mountains_one_paragraph_two').innerHTML = description_of_the_rodnei_mountains_one_paragraph_two;

let localization = 'Localizare pe Google Maps:';
document.getElementById('localization').innerHTML = localization;

var videoContainer = document.getElementById('video_view_from_the_top');
var video = document.createElement("video");
video.src = 'assets/11 vedere din varf.mp4';
video.controls = true;
video.setAttribute('height', '300px');
video.setAttribute('width', '100%');
video.setAttribute('type', 'video/mp4');
video.alt = 'Pietrosul Rodnei view_from_the_top';
videoContainer.appendChild(video);
console.log(video);

// Adaugare mapa google Obțin elementul  unde vreau sa l introduc:
var container = document.getElementById("adressonmap");
// Creez elementul iframe
var iframe = document.createElement("iframe");
// Setez atributele iframe-ului
iframe.src = "https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d21517.64395896945!2d24.62618723584073!3d47.612415949052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x473613482c46f373%3A0x5918010090e7f74d!2sM%C4%83n%C4%83stirea%20Bor%C8%99a%20Pietroasa%2C%20Schitul%20Borsa%20Pietroasa%2C%20Strada%20G%C3%AErlei%20nr.%2080B%2C%20Bor%C8%99a%20435200!3m2!1d47.629800599999996!2d24.6526958!4m5!1s0x4736130432c761e1%3A0x6964f8085dca0199!2sSta%C8%9Bia%20Meteorologic%C4%83%20Iezer%2C%20Vf.%20Pietrosu%20-%20Lacul%20Iezer%2C%20Bor%C8%99a!3m2!1d47.6026731!2d24.6490947!4m5!1s0x473613a0af1002c9%3A0xd02d05c7da4ea3c7!2sPietrosul%20Rodnei!3m2!1d47.599999999999994!2d24.6333333!5e0!3m2!1sen!2sro!4v1680440637110!5m2!1sen!2sro";
iframe.width = "600";
iframe.height = "450";
iframe.style.border = "0";
iframe.allowFullscreen = true;
iframe.loading = "lazy";
// Adaug iframe-ul în container
container.appendChild(iframe);

var img = document.createElement('img');
img.src = './assets/hydration.png'
img.setAttribute('height', '30');
img.setAttribute('width', '30');
img.alt = 'hydration';
document.getElementById('hydration').appendChild(img);

let hydration_during_mountain_hikes = 'Hidratarea in timpul drumetiilor montane';
document.getElementById('hydration_during_mountain_hikes').innerHTML = hydration_during_mountain_hikes;

let water_source = 'Surse de apa: izvor în urcare spre statia Meteo, lacul Iezer.';
document.getElementById('water_source').innerHTML = water_source;

let hydration_button = 'Hidratarea &#9432;'
document.getElementById('hydration_button').innerHTML = hydration_button;

let hydration_tips_one = 'Hidratarea este foarte importanta pentru o buna functionare a organismului, iar pe timpul verii pentru a evita afectiunile cauzate de caldura, dar in acelasi timp este o sursa de energie , de aceea este foarte important, inainte de a pleca la drum, sa verificam daca pe traseul nostru avem puncte de alimentare. Trebuie sa evitam deshidratarea, intruct aceasta este periculoasa, mai ales pe tarsee lungi, ofera senzatia de slabiciune dar si de dezorientare de la traseu.'
document.getElementById('hydration_tips_one').innerHTML = hydration_tips_one;

let hydration_tips_two = 'Recomandat ar fi sa bei 1l de apa la fiecare 2h de activitate, insa la intervale regulate de timp si nu toata odata consumata. Este important sa bei apa chiar daca nu iti este sete, deoarece din cauza efortului pierzi apa constant prin transpiratie, mai ales in sezonul calduros.'
document.getElementById('hydration_tips_two').innerHTML = hydration_tips_two;