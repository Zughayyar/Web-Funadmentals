USE world;

--  Query #3 --

SELECT 
    cities.name AS 'City (Mexico)',
    cities.population,
    country_id
FROM
    cities
        JOIN
    countries ON countries.id = cities.country_id
WHERE
    countries.name = 'Mexico'
        AND cities.population > 500000
ORDER BY cities.population DESC;