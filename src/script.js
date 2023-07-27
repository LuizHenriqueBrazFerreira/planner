const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


let date = new date();

// Mês atual
const currentMonth = date.currentMonth();

// Ano atual

const currentYear = date.currentYear();

// Ultimo dia do mês
const lastMonthDay = new date(date.currentYear(), date.currentMonth() + 1, 0);

//