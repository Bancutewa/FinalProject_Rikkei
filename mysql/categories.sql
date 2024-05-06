use rikkei_finalproject;


SELECT * FROM rikkei_finalproject.categories;

INSERT INTO categories (id, created_at, updated_at, name)
VALUES 
(1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Category 1'),
(2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Category 2'),
(3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Category 3'),
(4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Category 4');