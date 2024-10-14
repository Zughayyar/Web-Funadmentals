USE world;

--  Query #4 --

SELECT 
    countries.name, language, percentage
FROM
    languages
        JOIN
    countries ON countries.id = languages.country_id
WHERE
    percentage > 89
ORDER BY percentage DESC;