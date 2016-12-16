//fucked up with day-by-day output

var d = new Date();
var timeBeg = d.getTime();
console.log(typeof timeBeg);
var timeEnd = timeBeg + 604800000;
console.log(timeBeg, timeEnd);
var city = 'Palo+Alto';
var results = [];

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.meetup.com/2/open_events?and_text=False&country=us&offset=0&city='+city+'&format=json&limited_events=False&state=ma&photo-host=public&page=20&time='+timeBeg+'%2C'+timeEnd+'&radius=25.0&category=2&desc=False&status=upcoming&sig_id=216991390&sig=1a7da7efe8b05e97a4c8713780a4340530568a41&key=28622f79165d7236e367e6317536', false);
xhr.send();

if (xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText );
} else {
  var RespObj = JSON.parse(xhr.responseText);
}
for (var i = 0; i < RespObj.results.length; i++) {
	currRes = []
	currRes.push(RespObj.results[i].time);
	currRes.push(RespObj.results[i].group.name);
	currRes.push(RespObj.results[i].description);
	try {
		currRes.push(RespObj.results[i].venue.address_1);
	}
	catch (e) {
		console.log(e)
	}
	results.push(currRes);
}

function output() {
	results.forEach(document.write(results));
	document.write('<br></br><br></br><br></br><br></br><br></br>');
}
currentTime = timeBeg;
document.addEventListener
(
    'DOMContentLoaded', function () 
    {
    	var result = document.querySelector(".result");
    	for (var i = 0; i < 8; i++) {
    		currentTime += 86400000;
    		result.innerHTML += '<br></br>Day'+String(i)+'<br></br>';
    		for (var j = 0; j < results.length; j++) {
    			if ((results[j][0] > currentTime) && (results[j][0] < (currentTime + 86400000))) {
    				result.innerHTML += results[j];
    				result.innerHTML += '<br></br><br></br>';
    			}
    		}
    	result.innerHTML += '<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>';
		// currentTime += 86400000;
		}
	}
)
console.log(results);





