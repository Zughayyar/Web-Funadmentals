USE sakila;

-- Query #7 --

SELECT 
    film.title,
    film.description,
    film.release_year,
    film.rating,
    film.special_features,
    category.name
FROM
    film
        INNER JOIN
    film_category ON film_category.film_id = film.film_id
        INNER JOIN
    category ON category.category_id = film_category.category_id
WHERE
    category.name = 'Drama' AND film.rental_rate = 2.99;
    
    