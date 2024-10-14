USE world;

--  Query #8 --

SELECT 
    region, COUNT(name) AS 'countries'
FROM
    countries
GROUP BY region
ORDER BY COUNT(name) DESC;