function getData() {
    let dataContainer = document.getElementById("ApiData");
    let parsedData = ""
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(json => {
            parsedData = json.data;

            for (key of parsedData) {
                dataContainer.innerHTML += key.email +"<br>";
            }
        })
}

getData();
