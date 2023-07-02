// Methos of string
// IMP:- string are immutable, kabhi change nhi hogi, vo manipulate krke =, methods lagke dusre variable mai store kar sakte hai, it will always return another new string (also add this to excalidraw later)


let Name = "Sudhanshu";
console.log(Name.console);

// To uppercase

console.log(Name.toUpperCase);

// to lowercase
let Name2 = "leaderofmeow";
console.log(Name2.toLowerCase);

// indexing in string

console.log(Name.slice(2,5));
console.log(Name.slice(2));

// . replace() method
// Exact characters hone chaiye.
let name_of_my_friend = "krishan";

console.log(name_of_my_friend.replace("krishan","Nitin"));

// Concatinate

let friend = "Naman";

console.log(Name.concat(" is a friend of",name_of_my_friend));

// Trime (most imp)

let friend2 = "  batmeezChora       "
console.log(friend2);
console.log(friend2.trim());
