var requestTime = 1; // request interval in seconds (0; 0.5; 1; 2; etc)
var requestTimeAll = 3; // request interval in seconds (0; 0.5; 1; 2; etc)

/*-------AutoUpdate SVG-------*/
window.onload = function() {
    getEvents('/events?fullState=true');        // для быстрого вызова полной функции после загрузки страницы

    setInterval(() => {
        getEvents('/events?fullState=true');    // вызов полного json по интервалу requestTimeAll
    }, requestTimeAll * 1000);

    setInterval(() => {
        getEvents('/events');                   // вызов json по интервалу requestTime
    }, requestTime * 1000);

    var cric_fill = '#ffffff00';
    var cric_stroke = '#ffffff00';

    var objectSVG = document.getElementById('svg2988');
    var svgDocument = objectSVG.contentDocument;
    var chlds = svgDocument.querySelectorAll('circle');
    for (let i = 0; i < chlds.length; i++) {
        chlds[i].style.fill = cric_fill;
        chlds[i].style.stroke = cric_stroke;
    }

};
/*-------AutoUpdate END-------*/
// 
/*-------Getting Json & calling ArrayJson()-------*/
function getEvents(eve) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', eve, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                ArrayJSON(xhr.response.messages)    // если подключилось начинает парсить полученные данные
            }
        }
    }
    xhr.send(null);
}
/*-------Getting Json & calling ArrayJson() END-------*/
// 
/*-------Changer Style SVG-------*/
function ArrayJSON(obj_JSON) {
    obj_JSON.forEach((item) => {
        var objectSVG = document.getElementById(item.svg); // id div в котором лежит SVG (называется так же как и SVG)
        var svgDocument = objectSVG.contentDocument;


        // var test = document.querySelector('#svg_serial');
        // test
        //         // var objectSVG = test.getElementById('svg_serial');

        // console.log(objectSVG)
        // console.log(svgDocument)
        var childs = svgDocument.querySelectorAll(`#${item.id} > *`)    // выбор элементов внутри messages.id
        for (let i = 0; i < childs.length; i++) {                       // перебор элементов
            if (childs[i].getAttribute('ksa:subid') == item.subid) {    // проверка элемента на соответсвие subid и дальнейшая обработка
                item.style.split(';').filter(function(el){return el.length != 0}).map(function (pars) {
                    var elems = pars.split(/:(.*)/s).filter(function(el){return el.length != 0});
                    if (elems[0] == 'text') {
                            childs[i].textContent = elems[1];
                    } else if (elems[0] == 'fill' && elems[1].length == 9) {
                        childs[i].style[elems[0]] = elems[1].slice(0, 7);
                    } else {
                        childs[i].style[elems[0]] = elems[1];
                    }
                });
            }
        }
    });
}
/*-------Changer Style SVG END-------*/
// 
/*-------Change Tile-------*/
function ChangeTitle(newTitle){
    document.title = newTitle;  // меняет название страницы в соответсвии с вкладкой
}
/*-------Change Tile END-------*/
// 
/*-------Checkbox's in event page-------*/
var expanded = false;
function showCheckboxes(checkboxes_id) {
  var checkboxes = document.getElementById(checkboxes_id);
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
    
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
/*-------Checkbox's in event page END-------*/
// 
/*-------Station SVG options-------*/
    var cric_fill = '#ffffff00';
    var cric_stroke = '#ffffff00';


/*-------Station SVG options END-------*/
// 
/*-------Infrastructure SVG options-------*/




dragElement(document.getElementById("mydiv")); // функция позволяющая перетаскивать окно
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/*-------Infrastructure SVG options END-------*/
// 
/*-------Isolation SVG options-------*/

/*-------Isolation SVG options END-------*/
// 
/*-------Events options-------*/

/*-------Events options END-------*/
