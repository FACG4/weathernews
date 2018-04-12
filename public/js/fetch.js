
//
const input = document.getElementById('city');
const code = document.querySelector('#countryCode');
let info;

const fetch = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        console.log('error');
      }
    }
  };
  xhr.open('POST', url, true);
  xhr.send(JSON.stringify(info));
};

const form = document.querySelector('#form');
document.getElementById('search').addEventListener('click', (e) => {
  e.preventDefault();
  info = {
    city: input.value,
    code: code.value,
  };

  fetch('/city', (data) => {
    console.log(data);
    const container = document.querySelector('.container');
    const news = document.getElementById('news');
    const weather = document.getElementById('weather');
    news.textContent = '';
    for (const item of data.arr) {
      const section = document.createElement('section');
      const img = document.createElement('img');
      img.src = item.image;
      const link = document.createElement('a');
      link.href = item.reportUrl;
      link.setAttribute('target', '_blank');
      const snippet = document.createElement('p');
      snippet.textContent = item.snippet;

      link.appendChild(img);
      section.appendChild(link);
      section.appendChild(snippet);

      news.appendChild(section);
    }

    const icon = document.createElement('img');
    icon.src = data.body.iconUrl;
    const temp = document.createElement('p');
    temp.textContent = data.body.temp;
    const pressure = document.createElement('p');
    pressure.textContent = data.body.pressure;
    const speed = document.createElement('p');
    speed.textContent = data.body.speed;
    const humidity = document.createElement('p');
    humidity.textContent = data.body.humidity;
    const description = document.createElement('p');
    description.textContent = data.body.description;
    weather.textContent = '';
    const sectionWeather = document.createElement('section');
    sectionWeather.appendChild(icon);
    sectionWeather.appendChild(description);
    sectionWeather.appendChild(temp);
    sectionWeather.appendChild(pressure);
    sectionWeather.appendChild(speed);
    sectionWeather.appendChild(humidity);
    weather.appendChild(sectionWeather);
  });
});
