USE sakila;

-- Query #3 --

SELECT 
    actor.actor_id,
    CONCAT(actor.first_name, ' ' , actor.last_name) AS 'actor_name',
    film.title,
    film.description,
    film.release_year
FROM
    film
        INNER JOIN
    film_actor ON film_actor.film_id = film.film_id
        INNER JOIN
    actor ON actor.actor_id = film_actor.actor_id
WHERE
    actor.actor_id = 5;