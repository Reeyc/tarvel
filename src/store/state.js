let city = '上海';
try {
  if (localStorage.city) {
    city = localStorage.city;
  }
} catch (e) {
  console.log(e);
}

export default {
  city: city
}
