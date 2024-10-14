USE world;

--  Query #1 --

SELECT 
    countries.name, language, percentage
FROM
    languages
        JOIN
    countries ON countries.id = languages.country_id
WHERE
    language = 'Slovene'
ORDER BY percentage DESC;
