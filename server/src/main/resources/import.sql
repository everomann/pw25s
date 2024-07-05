INSERT INTO tb_user(display_name, username, password) VALUES ( 'Administrador', 'admin','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');
INSERT INTO tb_user(display_name, username, password) VALUES ( 'Teste', 'test','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');

INSERT INTO tb_category(name) VALUES ('CamisetaS')
INSERT INTO tb_category(name) VALUES ('Calças')
INSERT INTO tb_category(name) VALUES ('Camisas Polo')
INSERT INTO tb_category(name) VALUES ('Casacos')
INSERT INTO tb_category(name) VALUES ('Jaquetas')
INSERT INTO tb_category(name) VALUES ('Jeans')
INSERT INTO tb_category(name) VALUES ('Moletons')
INSERT INTO tb_category(name) VALUES ('Shots & Bermudas')
INSERT INTO tb_category(name) VALUES ('Ternos')



INSERT INTO tb_product (name, description, price, category_id) VALUES ('Camiseta 1', 'Desc camiseta 1', 99.90, 1)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Calça 1', 'Desc calça 1', 129.90, 2)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Camisa Polo 1', 'Camisa Polo 1', 229.90, 3)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Casaco 1', 'Desc casaco 1', 429.90, 4)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Jaqueta 1', 'Desc Jaqueta 1', 329.90, 5)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Jeans 1', 'Desc Jeans 1', 129.90, 6)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Moletons 1', 'Desc Moleton 1', 229.90, 7)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Camiseta 1', 'Desc camiseta 1', 99.90, 1)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Calça 1', 'Desc calça 1', 129.90, 2)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Camisa Polo 1', 'Camisa Polo 1', 229.90, 3)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Casaco 1', 'Desc casaco 1', 429.90, 4)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Jaqueta 1', 'Desc Jaqueta 1', 329.90, 5)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Jeans 1', 'Desc Jeans 1', 129.90, 6)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Moletons 1', 'Desc Moleton 1', 229.90, 7)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Camiseta 1', 'Desc camiseta 1', 99.90, 1)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Calça 1', 'Desc calça 1', 129.90, 2)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Camisa Polo 1', 'Camisa Polo 1', 229.90, 3)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Casaco 1', 'Desc casaco 1', 429.90, 4)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Jaqueta 1', 'Desc Jaqueta 1', 329.90, 5)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Jeans 1', 'Desc Jeans 1', 129.90, 6)
INSERT INTO tb_product (name, description, price, category_id) VALUES ('Moletons 1', 'Desc Moleton 1', 229.90, 7)


INSERT INTO tb_product_images (image_url, product_id) VALUES ('url1', 1)
INSERT INTO tb_product_images (image_url, product_id) VALUES ('url2', 1)
INSERT INTO tb_product_images (image_url, product_id) VALUES ('url3', 2)
INSERT INTO tb_product_images (image_url, product_id) VALUES ('url4', 2)

INSERT INTO tb_order (total_price,order_date, user_id) VALUES (200.00, '2024-04-23 12:36:21.875' , 1)
INSERT INTO tb_order (total_price,order_date, user_id) VALUES (150.00, '2024-04-23 11:56:21.875' , 2)

INSERT INTO tb_order_item (quantity, price, order_id, product_id) VALUES(2,99.90, 1, 1)
INSERT INTO tb_order_item (quantity, price, order_id, product_id) VALUES(4,499.90, 2, 2)







----INSERT INTO () VALUES ()