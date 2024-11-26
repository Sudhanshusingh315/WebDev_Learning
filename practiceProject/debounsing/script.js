let input = document.querySelector("input");

const handler = async (e) => {
  let search = e.target.value;
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${search}`
  );
  const data = await response.json();
  console.log(data);
};


input.addEventListener("input",handler);



