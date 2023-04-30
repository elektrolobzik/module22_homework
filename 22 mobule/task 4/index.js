const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', () => {
    if('geolocation' in navigator) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords
              const apiKey = `32bcd4a6e4b548968e7afcdb682ac679`
              const apiUrl = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${latitude}&long=${longitude}`
              fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const timezone = data.timezone
                    const date_time_txt = data.date_time_txt
                    result.innerHTML = `<p>timezone: ${timezone}</p> <p>Точная дата и время: ${date_time_txt}</p>`
                })
                .catch(error => {
                    console.error(error)
                    result.innerHTML(`<p> Произошла ошибка при получении геопозиции </p>`)
                })

              console.log(coords.latitude, coords.longitude);
            });
          }
    } else {
        result.innerHTML = `<p>Информация о местоположении недоступна.</p>`
    }
})
