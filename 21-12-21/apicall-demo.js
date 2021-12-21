//making an API call
fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(err => console.error(err))


