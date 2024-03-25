const sonad=[
    'teostus',
    'algorütm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus'
];
const venesonad=[
    'реализация',
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление'
];
function randomSonad(){

    //random sõnad - arv
    const juhuslikSona = Math.floor(Math.random()*sonad.length);

    //võtme random sõna massivist
    const sona = sonad[juhuslikSona];

    //lisame HTML lehele

    document.getElementById("random-sona").innerHTML=sona;
}

function kontrollima() {
    const sona = document.getElementById("random-sona").innerText;
    const venesona = document.getElementById("kontroll").value;

    const indEesti = sonad.indexOf(sona);
    const indVene = venesonad.indexOf(venesona);

    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastus").innerHTML = "Õige vastus!";
    } else {
        document.getElementById("vastus").innerHTML = "Vale vastus(((";
    }
}
