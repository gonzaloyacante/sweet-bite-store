const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  const response = await fetch(`${API_URL}/products/category/${categoryId}`);
  if (!response.ok) {
    throw new Error("Error fetching products by category");
  }
  return response.json();
};
