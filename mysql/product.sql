-- create database rikkei_finalproject;
use rikkei_finalproject;

SELECT * FROM rikkei_finalproject.products;

INSERT INTO products (id, created_at, updated_at, name, price, image, description,storage, quantity, category_id)
VALUES 
(1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 1', 10.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 1',0, 100, 1),
(2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 2', 19.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 2',1, 50, 1),
(3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 3', 29.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 3',1, 200, 2),
(4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 4', 14.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 4',1, 75, 2),
(5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 5', 9.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 5', 1,150, 3),
(6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 6', 24.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 6', 1,30, 3),
(7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 7', 34.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 7', 1,80, 4),
(8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 8', 16.99, 'path/to/image8.jpg', 'Description for Product 8', 1,90, 4),
(9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 9', 12.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 9', 1,120, 1),
(10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 10', 39.99, 'https://firebasestorage.googleapis.com/v0/b/fir-img-4719c.appspot.com/o/productImages%2Fz5114558913898_eeb5591dc46b0e5b8be05b6ad87cce9f.jpg?alt=media&token=c8160c28-2703-4c5a-a776-4f900a9205b9', 'Description for Product 10',1, 25, 2);