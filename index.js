const json = "fish.json";

fetch(json)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
