USE world;

--  Query #2 --

SELECT 
    countries.name, COUNT(*) AS 'cities'
FROM
    cities
        JOIN
    countries ON countries.id = cities.country_id
GROUP BY country_id
ORDER BY COUNT(*) DESC;

