/*
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name + ', ' + data.main.temp_max + ', ' + data.main.temp_min);
*/

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

function sendRequest() {
  let id = document.getElementById("town-select").value;
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id +'.json';
  
  body{
    if(id === 1850147){
      margin: 0;
      width: 100vw;
      height: 100vh;
      background-image:url
      }
  }


	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
	let data = resp.data;
  let pn = document.querySelector('span#name');
  let pw = document.querySelector('span#weather_description');
  let pma = document.querySelector('span#temp_max');
  let pmi = document.querySelector('span#temp_min');
  let ph = document.querySelector('span#humidity');
  let pws = document.querySelector('span#wind_speed');
  let pwd = document.querySelector('span#wind_deg');
  let pclo = document.querySelector('span#coord_lon');
  let pcla = document.querySelector('span#coord_lat');
  pn.textContent = '都市名：' + data.name;
  pw.textContent = '天気：' + data.weather[0].description;
  pma.textContent = '最高気温：' + data.main.temp_max;
  pmi.textContent = '最低気温：' + data.main.temp_min;
  ph.textContent = '湿度：' + data.main.humidity;
  pws.textContent = '風速：' + data.wind.speed;
  pwd.textContent = '風向：' + data.wind.deg;
  pclo.textContent = '緯度：' + data.coord.lon;
  pcla.textContent = '経度：' + data.coord.lat;


  if(id === 1850147){
    let img = document.getElementById("https://freesozai.jp/sozai/nation_flag/ntf_131.svg");
    img.src = "image1.jpg";
  }




	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	console.log(data);
}

function showError(err) {
	console.log(err);
}	

function finish() {
	console.log('Ajax 通信が終わりました');
}