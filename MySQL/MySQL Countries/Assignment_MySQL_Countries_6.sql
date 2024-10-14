USE world;

--  Query #6 --

SELECT 
    name, government_form, capital, life_expectancy
FROM
    countries
WHERE
    government_form = 'Constitutional Monarchy'
        AND capital > 200
        AND life_expectancy > 75;