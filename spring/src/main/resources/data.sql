-- Truncate tables
TRUNCATE TABLE product;
TRUNCATE TABLE category CASCADE;
TRUNCATE TABLE inventory_status CASCADE;

-- Insert data into the category table
INSERT INTO category (id, label) VALUES (1, 'Accessories');
INSERT INTO category (id, label) VALUES (2, 'Fitness');
INSERT INTO category (id, label) VALUES (3, 'Clothing');
INSERT INTO category (id, label) VALUES (4, 'Electronics');

-- Insert data into the inventory_status table
INSERT INTO inventory_status (id, label) VALUES (1, 'INSTOCK');
INSERT INTO inventory_status (id, label) VALUES (2, 'LOWSTOCK');
INSERT INTO inventory_status (id, label) VALUES (3, 'OUTOFSTOCK');

-- Insert data into the product table
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1000, 'f230fh0g3', 'Bamboo Watch', 'Product Description', 'bamboo-watch.jpg', 65, 1, 24, 1, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1001, 'nvklal433', 'Black Watch', 'Product Description', 'black-watch.jpg', 72, 1, 61, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1002, 'zz21cz3c1', 'Blue Band', 'Product Description', 'blue-band.jpg', 79, 2, 2, 2, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1003, '244wgerg2', 'Blue T-Shirt', 'Product Description', 'blue-t-shirt.jpg', 29, 3, 25, 1, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1004, 'h456wer53', 'Bracelet', 'Product Description', 'bracelet.jpg', 15, 1, 73, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1005, 'av2231fwg', 'Brown Purse', 'Product Description', 'brown-purse.jpg', 120, 1, 0, 3, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1006, 'bib36pfvm', 'Chakra Bracelet', 'Product Description', 'chakra-bracelet.jpg', 32, 1, 5, 2, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1007, 'mbvjkgip5', 'Galaxy Earrings', 'Product Description', 'galaxy-earrings.jpg', 34, 1, 23, 1, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1008, 'vbb124btr', 'Game Controller', 'Product Description', 'game-controller.jpg', 99, 4, 2, 2, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1009, 'cm230f032', 'Gaming Set', 'Product Description', 'gaming-set.jpg', 299, 4, 63, 1, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1010, 'plb34234v', 'Gold Phone Case', 'Product Description', 'gold-phone-case.jpg', 24, 1, 0, 3, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1011, '4920nnc2d', 'Green Earbuds', 'Product Description', 'green-earbuds.jpg', 89, 4, 23, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1012, '250vm23cc', 'Green T-Shirt', 'Product Description', 'green-t-shirt.jpg', 49, 3, 74, 1, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1013, 'fldsmn31b', 'Grey T-Shirt', 'Product Description', 'grey-t-shirt.jpg', 48, 3, 0, 3, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1014, 'waas1x2as', 'Headphones', 'Product Description', 'headphones.jpg', 175, 4, 8, 2, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1015, 'vb34btbg5', 'Light Green T-Shirt', 'Product Description', 'light-green-t-shirt.jpg', 49, 3, 34, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1016, 'k8l6j58jl', 'Lime Band', 'Product Description', 'lime-band.jpg', 79, 2, 12, 1, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1017, 'v435nn85n', 'Mini Speakers', 'Product Description', 'mini-speakers.jpg', 85, 3, 42, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1018, '09zx9c0zc', 'Painted Phone Case', 'Product Description', 'painted-phone-case.jpg', 56, 1, 41, 1, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1019, 'mnb5mb2m5', 'Pink Band', 'Product Description', 'pink-band.jpg', 79, 2, 63, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1020, 'r23fwf2w3', 'Pink Purse', 'Product Description', 'pink-purse.jpg', 110, 1, 0, 3, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1021, 'pxpzczo23', 'Purple Band', 'Product Description', 'purple-band.jpg', 79, 2, 6, 2, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1022, '2c42cb5cb', 'Purple Gemstone Necklace', 'Product Description', 'purple-gemstone-necklace.jpg', 45, 1, 62, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1023, '5k43kkk23', 'Purple T-Shirt', 'Product Description', 'purple-t-shirt.jpg', 49, 3, 2, 2, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1024, 'lm2tny2k4', 'Shoes', 'Product Description', 'shoes.jpg', 64, 3, 0, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1025, 'nbm5mv45n', 'Sneakers', 'Product Description', 'sneakers.jpg', 78, 3, 52, 1, 4);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1026, 'zx23zc42c', 'Teal T-Shirt', 'Product Description', 'teal-t-shirt.jpg', 49, 3, 3, 2, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1027, 'acvx872gc', 'Yellow Earbuds', 'Product Description', 'yellow-earbuds.jpg', 89, 4, 35, 1, 3);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1028, 'tx125ck42', 'Yoga Mat', 'Product Description', 'yoga-mat.jpg', 20, 2, 15, 1, 5);
INSERT INTO product (id, code, name, description, image, price, category_id, quantity, inventory_status_id, rating)
VALUES (1029, 'gwuby345v', 'Yoga Set', 'Product Description', 'yoga-set.jpg', 20, 2, 25, 1, 8);