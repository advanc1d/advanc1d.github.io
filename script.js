const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('#modalOverlay')
const modalClose = document.querySelector('#modalClose')
const modalTitle = document.getElementById('modalTitle')
const modalDescription = document.getElementById('modalDescription')
const modalPrice = document.getElementById('modalPrice')

cards.forEach(element => {
  element.addEventListener('click', () => {
    const titleText = element.querySelector('.product-name').textContent
    const descText = element.querySelector('.description').textContent

    modalTitle.textContent = titleText
    modalDescription.textContent = descText
    modalPrice.textContent = '100 грн'

    modalOverlay.classList.add('active')
  })
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active')
})

modalOverlay.addEventListener('click', () => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active')
  }
})

// Знаходимо кнопку та меню магазинів
const shopsBtn = document.getElementById('shopsBtn');
const shopsMenu = document.getElementById('shopsMenu');

// Перемикаємо випадаюче меню при кліку
shopsBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Відміняємо стандартний перехід по посиланню #
    shopsMenu.classList.toggle('active'); // Якщо є клас active — прибирає, якщо немає — додає
});

window.addEventListener('click', (event) => {
  // Перевіряємо: якщо клік був НЕ по кнопці "Магазини" І НЕ всередині самого меню
  if (!shopsBtn.contains(event.target) && !shopsMenu.contains(event.target)) {
    shopsMenu.classList.remove('active'); // Закриваємо меню
  }
});

const contBtn = document.getElementById('contBtn');
const contMenu = document.getElementById('contMenu');

// Перемикаємо випадаюче меню при кліку
contBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Відміняємо стандартний перехід по посиланню #
    contMenu.classList.toggle('active'); // Якщо є клас active — прибирає, якщо немає — додає
});

window.addEventListener('click', (event) => {
  // Перевіряємо: якщо клік був НЕ по кнопці "Магазини" І НЕ всередині самого меню
  if (!contBtn.contains(event.target) && !contMenu.contains(event.target)) {
    contMenu.classList.remove('active'); // Закриваємо меню
  }
});