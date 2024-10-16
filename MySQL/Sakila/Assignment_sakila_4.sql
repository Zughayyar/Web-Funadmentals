USE sakila;

-- Query #4 --

SELECT 
    customer.first_name,
    customer.last_name,
    customer.email,
    address.address
FROM
    customer
        INNER JOIN
    address ON address.address_id = customer.address_id
        INNER JOIN
    store ON store.store_id = customer.store_id
WHERE
    store.store_id = 1
        AND (address.city_id = 1
        OR address.city_id = 42
        OR address.city_id = 312
        OR address.city_id = 459);