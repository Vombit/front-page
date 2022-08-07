var requestTime = 100; // request interval in seconds (0; 0.5; 1; 2; etc)

/*-------AutoUpdate SVG-------*/
window.onload = function() {
    getEvents()
    setInterval(getEvents, requestTime * 1000);
};
/*-------AutoUpdate END-------*/
// 
/*-------Getting Json & calling ArrayJson()-------*/
function getEvents() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/events', true);
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
function ArrayJSON(obj_JSON) {
    obj_JSON.forEach((item) => {
        var arr = item.style.split(':');
        var styleType = arr[0];
        var styleParam = arr[1];

        var objectq = document.getElementById("svg2988"); // id div в котором лежит SVG
        var svgDocument = objectq.contentDocument;
        var svgElement = svgDocument.getElementById(item.id);

        try {
            svgElement.style[styleType] = styleParam;
        } catch (err) {console.log(err)}
    });
}
function ArrayJSON2(obj_JSON) {
    obj_JSON.forEach((item) => {
        console.log(item)

        var objectSVG = document.getElementById(item.svg); // id div в котором лежит SVG (называется так же как и SVG)
        var svgDocument = objectSVG.contentDocument;
        var svgElement = svgDocument.getElementById('g9123');
        // var svgSUBID = svgElement.contentDocument.getElementById('text9125');
        // var svgAtr = svgSUBID.getAttribute(`ksa:subid`);

        // var svgSUBID = svgElement.getAttribute("ksa:subid=\"_time\"")
        console.log(svgElement)
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