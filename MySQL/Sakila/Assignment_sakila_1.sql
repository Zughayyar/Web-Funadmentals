USE sakila;

-- Query #1 --

SELECT 
    city.city_id,
    customer.first_name,
    customer.last_name,
    customer.email,
    address.address,
    city.city,
	country.country
FROM
    customer
        INNER JOIN
    address ON address.address_id = customer.address_id
        INNER JOIN
    city ON city.city_id = address.city_id
		INNER JOIN
	country ON country.country_id = city.country_id
WHERE
    city.city_id = 312;