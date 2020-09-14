function duracionParaHumanos(segundos) {
  var years = Math.trunc(segundos / 60 / 60 / 24 / 365);
  var months = Math.trunc(segundos / 60 / 60 / 24 / 30);
  var days = Math.trunc(segundos / 60 / 60 / 24);
  var hours = Math.trunc(segundos / 60 / 60);
  var minutes = Math.trunc(segundos / 60);

  var years_c = Math.trunc(segundos / 60 / 60 / 24 / 365);
  var months_c = Math.trunc(segundos / 60 / 60 / 24 / 30 - years * 365);
  var days_c = Math.trunc(segundos / 60 / 60 / 24 - months * 30);
  var hours_c = Math.trunc(segundos / 60 / 60 - days * 24);
  var minutes_c = Math.trunc(segundos / 60 - hours * 60);

  console.log(years_c, months_c, days_c, hours_c, minutes_c);

  if (segundos == 0) {
    console.log("ahora");
  }
  if (years_c !== 0) {
    console.log(
      years_c + " years,",
      months_c + " months,",
      days_c + " days,",
      hours_c + " hours,",
      minutes_c + " munutes"
    );
  } else if (months_c !== 0) {
    console.log(
      months_c + " months,",
      days_c + " days,",
      hours_c + " hours,",
      minutes_c + " munutes"
    );
  } else if (days_c !== 0) {
    console.log(days_c + " days,", hours_c + " hours,", minutes_c + " munutes");
  } else if (days_c !== 0) {
    console.log(hours_c + " hours,", minutes_c + " munutes");
  } else if (minutes_c !== 0) {
    console.log(minutes_c + " munutes");
  }
}

duracionParaHumanos(112131);
