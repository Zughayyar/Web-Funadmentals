USE sakila;

-- Query #8 --

SELECT 
    film.title,
    film.description,
    film.release_year,
    film.rating,
    film.special_features,
    category.name AS 'genre',
    CONCAT(actor.first_name, actor.last_name) AS 'actor_name'
FROM
    film
        INNER JOIN
    film_category ON film_category.film_id = film.film_id
        INNER JOIN
    category ON category.category_id = film_category.category_id
        INNER JOIN
    film_actor ON film_actor.film_id = film.film_id
        INNER JOIN
    actor ON actor.actor_id = film_actor.actor_id
WHERE
    category.name = 'action'
        AND actor.first_name = 'sandra'
        AND actor.last_name = 'kilmer';