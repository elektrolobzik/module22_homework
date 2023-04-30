const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    console.log('Ширина вашего экрана в px', window.screen.width)
    console.log('Высота вашего экрана в px', window.screen.height)
})



const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          console.log(coords.latitude, coords.longitude);
        });
      } else {
        console.log('Информация о местоположении недоступна')
      }
})