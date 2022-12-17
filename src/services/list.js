//The only goal of this function is to access the data and to convert the response into JSON using the data.json() method
export function getList() {
    return fetch('http://localhost:3333/list')
      .then(data => data.json())
}
  
//This function will take an item as an argument and will send the data using the POST method to the API
//It will add the item to the db.json file
export function setItem(item) {
   return fetch('http://localhost:3333/list', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
}