CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

CREATE TABLE IF NOT EXISTS producto (
    identificador INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    unidades_vendidas INT NOT NULL DEFAULT 0
);

INSERT INTO producto 
(nombre, categoria, precio, stock, unidades_vendidas)
VALUES
('Laptop Lenovo IdeaPad 3', 'Laptops', 4200.00, 15, 8),
('Laptop HP 15', 'Laptops', 3900.00, 12, 6),
('Laptop ASUS VivoBook', 'Laptops', 4500.00, 10, 5),
('Monitor Samsung 24"', 'Monitores', 1200.00, 18, 10),
('Monitor LG 27"', 'Monitores', 1650.00, 14, 7),
('Teclado Mecánico Redragon', 'Accesorios', 280.00, 25, 15),
('Teclado Logitech K380', 'Accesorios', 350.00, 20, 12),
('Mouse Logitech M185', 'Accesorios', 90.00, 30, 20),
('Mouse Gamer Redragon', 'Accesorios', 180.00, 22, 14),
('Audífonos Bluetooth JBL', 'Audio', 450.00, 16, 9),
('Audífonos Sony WH-CH520', 'Audio', 550.00, 13, 8),
('Parlante Bluetooth JBL', 'Audio', 700.00, 11, 6),
('Memoria USB 64GB Kingston', 'Almacenamiento', 75.00, 40, 25),
('Memoria USB 128GB Kingston', 'Almacenamiento', 120.00, 35, 18),
('Disco SSD 500GB Kingston', 'Almacenamiento', 420.00, 17, 9),
('Disco SSD 1TB Kingston', 'Almacenamiento', 750.00, 12, 5),
('Disco Duro Externo 1TB', 'Almacenamiento', 580.00, 15, 7),
('Webcam Logitech C270', 'Accesorios', 280.00, 19, 11),
('Impresora Epson EcoTank', 'Impresoras', 1450.00, 9, 4),
('Impresora HP DeskJet', 'Impresoras', 850.00, 13, 6),
('Tablet Samsung Galaxy Tab A9', 'Tablets', 1350.00, 10, 5),
('Tablet Lenovo M10', 'Tablets', 1200.00, 8, 4),
('Smartphone Samsung Galaxy A15', 'Celulares', 1450.00, 20, 13),
('Smartphone Xiaomi Redmi Note 13', 'Celulares', 1750.00, 18, 10),
('Smartphone Motorola G54', 'Celulares', 1600.00, 15, 8),
('Cargador USB-C 25W', 'Accesorios', 120.00, 35, 22),
('Cable USB-C 1 metro', 'Accesorios', 45.00, 50, 30),
('Power Bank 10000mAh', 'Accesorios', 180.00, 25, 16),
('Router TP-Link WiFi', 'Redes', 320.00, 14, 8),
('Switch TP-Link 8 puertos', 'Redes', 250.00, 10, 5);