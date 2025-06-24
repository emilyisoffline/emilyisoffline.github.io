let options = {
    timeZone: 'Australia/Melbourne',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
},
formatter = new Intl.DateTimeFormat([], options);
time_element = document.getElementById("timeInsert")
time_element.innerText = `${formatter.format(new Date())}`;