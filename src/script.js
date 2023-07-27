const monthText = document.querySelector('#monthText');
const todayBtn = document.querySelector('#today');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const days = document.querySelector('.days');

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const nameDays = document.querySelector('.nameDays');

for (let index = 0; index < weekDays.length; index += 1) {
  const dayIndex = weekDays[index];
  const day = document.createElement('li');
  day.classList = 'dayName list-none border-2 border-solid border-blue-300 w-[45px] ml-1 text-center';
  day.innerHTML = dayIndex;
  nameDays.appendChild(day);
}

// Data atual
let date = new Date();

// Mês atual
let currentMonth = date.getMonth();

// Ano atual
let currentYear = date.getFullYear();

// Criando o calendario

// A função vai pegar o mes atual, o ultimo mes, o proximo mes, o dia que o mes acaba e o dia q o proximo mes começa
const generateCalendar = () => {
  date.setDate(1);

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth +1, 0);
  const lastDayPosition = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const lastDayPreviousMonth = new Date(currentYear, currentMonth, 0);
  const lastDayPreviousMonthDate = lastDayPreviousMonth.getDate();
  const startDayNextMonth = 7 - lastDayPosition - 1;

  monthText.innerHTML = `${months[currentMonth]}, ${currentYear}`;
  
  
  // Cria os dias do mes anterior que está no calendário
  
  
  for (let indexDay = firstDay.getDay(); indexDay > 0; indexDay -= 1) {
    const numberDay = document.createElement('li');
    numberDay.innerHTML = '';
    numberDay.classList = 'day-previous w-[45px] h-[45px] text-slate-400 text-center align-center';
    numberDay.innerHTML = `${lastDayPreviousMonthDate - indexDay + 1}`;
    days.appendChild(numberDay)
  }

  // Crias os dias do mes atual no calendário


  for (let indexD = 1; indexD <= lastDayDate; indexD += 1) {
    const numberDay = document.createElement('li');
    numberDay.innerHTML = '';
    if (indexD === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
      numberDay.classList = 'day-actual w-[45px] h-[45px] text-center align-center bg-blue-100';
      numberDay.innerHTML = `${indexD}`;
      days.appendChild(numberDay);
    } else {
      // const numberDay = document.createElement('li');
      // numberDay.innerHTML = '';
      numberDay.classList = 'day w-[45px] h-[45px] text-center align-center';
      numberDay.innerHTML = `${indexD}`;
      days.appendChild(numberDay);
    }
  }

  // Cria os dias do próximo mês
  for (let indexNext = 1; indexNext <= startDayNextMonth; indexNext += 1) {
    const numberDay = document.createElement('li');
    numberDay.innerHTML = '';
    numberDay.classList = 'next-month-day w-[45px] h-[45px] text-slate-400 text-center align-center';
    numberDay.innerHTML = `${indexNext}`;
    days.appendChild(numberDay);
  }
  hideTodayButton();
}
generateCalendar()

// Botao do mes seguinte

nextBtn.addEventListener('click', () => {
  days.innerHTML = '';
  currentMonth +=1;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear += 1;
  }
  
  generateCalendar();
});

// Botao do mes anterior

prevBtn.addEventListener('click', () => {
  days.innerHTML = '';
  currentMonth -=1;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear -= 1;
  }
  generateCalendar();
})

days.addEventListener('mouseover', (event) => {
  const focusDay = event.target;
  focusDay.classList.add('bg-blue-100');
})

days.addEventListener('mouseout', (event) => {
  const focusDay = event.target;
  focusDay.classList.remove('bg-blue-100')
})

// Botao do dia atual

todayBtn.addEventListener('click', () => {
  days.innerHTML = '';
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  generateCalendar();
})

function hideTodayButton() {
  if (currentMonth == new Date().getMonth() && currentYear == new Date().getFullYear()) {
    todayBtn.style.display = 'none';
  } else {
    todayBtn.style.display = 'inline-block';
  }
}

