const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Error fetching products");
  }
  return response.json();
};

export const getProductsByCategory = async (categoryId) => {
  const response = await fetch(`${API_URL}/products/category/${categoryId}`);
  if (!response.ok) {
    throw new Error("Error fetching products by category");
  }
  return response.json();
};
