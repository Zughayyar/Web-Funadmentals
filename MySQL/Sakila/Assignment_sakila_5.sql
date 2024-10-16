USE sakila;

-- Query #5 --

SELECT 
    film.title,
    film.description,
    film.release_year,
    film.rating,
    film.special_features
FROM
    film
        INNER JOIN
    film_actor ON film_actor.film_id = film.film_id
WHERE
    film.rating = 'G'
        AND film.special_features LIKE '%Behind%'
        AND film_actor.actor_id = 15;
