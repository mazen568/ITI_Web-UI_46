export const validateProduct = (data) => {
  let errors = {};
  if (!data.title) errors.title = "title is required";
  if (!data.description) errors.description = "description is required";
  if(!data.price) errors.price = "price is required";
  if(!data.thumbnail) errors.thumbnail = "image is required";
  if(!data.stock) errors.stock = "stock is required";
  if(!data.brand) errors.brand = "brand is required";
  if(!data.category) errors.category = "category is required";

  return errors;
};
