CREATE SCHEMA ing;

CREATE TABLE ing.products (
	product_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	, name VARCHAR(255) NOT NULL
);

CREATE TABLE ing.ingredients (
	ingredient_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	, name VARCHAR(255) NOT NULL
);

CREATE TABLE ing.products_ingredients_mapping (
	product_id INT NOT NULL REFERENCES ing.products(product_id)
	, ingredient_id INT NOT NULL REFERENCES ing.ingredients(ingredient_id)
	, PRIMARY KEY(product_id, ingredient_id)
);