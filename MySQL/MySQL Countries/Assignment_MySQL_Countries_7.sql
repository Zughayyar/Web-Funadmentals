USE world;

--  Query #7 --

SELECT 
    countries.name AS 'Country Name',
    cities.name AS 'City Name',
    district AS 'District',
    cities.population AS 'Population'
FROM
    cities
        JOIN
    countries ON countries.id = cities.country_id
WHERE
    district = 'Buenos Aires'
        AND cities.population > 500000;
