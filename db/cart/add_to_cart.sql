INSERT INTO wlr1_product_cart_junction
(cart_id, product_id, quantity)
VALUES
($1,$2, 1);
SELECT * FROM wlr1_product_cart_junction pc 
JOIN wlr1_products p ON pc.product_id = p.product_id
where pc.cart_id = $1
ORDER BY pc.product_id;