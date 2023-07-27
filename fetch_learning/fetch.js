const url = "https://jsonplaceholder.typicode.com/users";
/*

// get request


function myAxios(method,url,body){
    return fetch(url).then((res)=>{
        return res.json();  
    });
}



myAxios('GET',url).then((res)=>{
    console.log(res)
}).catch(()=>{

});

*/


// Post request 



function myAxios(method,url,body=null)
{   const headers = {
    'content-Type' : 'application/json',
}
    return fetch(url,{
        method:method,
        headers: headers,
        body:JSON.stringify(body),
    
    }).then((res)=> res.json())
}

myAxios('POST', url, {
    name:'Rakesh', job : 'Software developer'
}).then((res)=>{
    console.log("this came from then", res)

}).catch((err)=>{
    console.log(err);
});