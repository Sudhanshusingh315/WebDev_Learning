// this is asynchronous

function myAxios(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.log('Failed!!')
        
      } 
      else {
        resolve(xhr.response)
        
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

const url = "https://jsonplaceholder.typicode.com/users";

// myAxios('GET',url);

myAxios("POST", url, {
  name: "Suddhanshu",
  job: "Software developer",
}).then((res)=>{
    console.log('Message from Then',res)
}).catch((err)=>{

});

// third argument ko request ki body bhi bola jata hai
