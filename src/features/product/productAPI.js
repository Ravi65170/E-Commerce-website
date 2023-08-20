export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllProductsByFilters(filter) {
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3004/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
