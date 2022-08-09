var requestTime = 0.3; // request interval in seconds (0; 0.5; 1; 2; etc)
var requestTimeAll = 3; // request interval in seconds (0; 0.5; 1; 2; etc)

/*-------AutoUpdate SVG-------*/
window.onload = function() {
    getEvents('/events?fullState=true');

    setInterval(() => {
        getEvents('/events?fullState=true');
    }, requestTimeAll * 1000);

    setInterval(() => {
        getEvents('/events');
    }, requestTime * 1000);
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
                ArrayJSON2(xhr.response.messages)
            }
        }
    }
    xhr.send(null);
}
/*-------Getting Json & calling ArrayJson() END-------*/
// 
/*-------Changer Style SVG-------*/
function ArrayJSON2(obj_JSON) {
    obj_JSON.forEach((item) => {
        console.log(item)
        var objectSVG = document.getElementById(item.svg); // id div в котором лежит SVG (называется так же как и SVG)
        var svgDocument = objectSVG.contentDocument;

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
    document.title = newTitle;
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
function SVG_Timer_Now() {
    var date = new Date();
    var year_now, month_now, day_now, hour, min, sec;
    year_now = date.getFullYear();
    month_now = date.getMonth();
    day_now = date.getDay();

    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    console.log(year_now, month_now, day_now, hour, min, sec)
}
/*-------Station SVG options END-------*/
// 
/*-------Infrastructure SVG options-------*/

/*-------Infrastructure SVG options END-------*/
// 
/*-------Isolation SVG options-------*/

/*-------Isolation SVG options END-------*/
