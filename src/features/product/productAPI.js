export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllProductsByFilters(filter, sort, pagination) {
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    console.log("cat", categoryValues);
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
    console.log("page quanri", queryString);
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3004/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3004/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3004/brands");
    const data = await response.json();
    resolve({ data });
  });
}
