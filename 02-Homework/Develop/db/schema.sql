-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

process.env.DB_NAME;

-- CREATE TABLE Category(
--     id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY; 
--     category_name VARCHAR(30) NOT NULL;
    
--     );
    

-- CREATE TABLE Product(
--     id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY;
--     product_name VARCHAR(30) NOT NULL;
--     price DECEMIL NOT NULL ;
--     stock INT(6) NOT NULL DEFALT(10);
--     category_id INT(6)
--     FOREIGN KEY (category_id), REFRENCES Category(id)
    
-- );

-- CREATE TABLE Tag(
--     id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY;
--     tag_name VARCHAR(30) NOT NULL;
-- );

-- CREATE TABLE ProductTag(
--     id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY;
--     product_id INT(6)
--     FOREIGN KEY (product_id), REFRENCES Product(id)
--     tag_id INT(6)
--     FOREIGN KEY (tag_id), REFRENCES Tag(id)
-- );



    

-- CREATE DATABASE
CREATE DATABASE ecommerce_db ; 

-- process.env.DB_NAME;

