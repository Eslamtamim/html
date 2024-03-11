// fetch the data.json file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const string = JSON.stringify(data);
        console.log(data);
        console.log(string);
        document.getElementById('main').innerHTML = string;
    });