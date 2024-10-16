USE sakila;

-- Query #6 --

SELECT 
    film.film_id,
    film.title,
	actor.actor_id,
    CONCAT(actor.first_name, ' ', actor.last_name) AS 'actor_name'
FROM
    film
        INNER JOIN
    film_actor ON film_actor.film_id = film.film_id
        INNER JOIN
    actor ON actor.actor_id = film_actor.actor_id
WHERE
    film.film_id = 369;
