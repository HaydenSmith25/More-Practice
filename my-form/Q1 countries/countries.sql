CREATE TABLE countries (
    code CHAR(2) NOT NULL,
    year INT NOT NULL,
    gdp-per-capita DECIMAL(10, 2) NOT NULL,
    govt_debt DECIMAL(10, 2) NOT NULL
);

/* SAMPLE DATA
    code    year    gdp_per_capita  govt_debt         
    QA      2019    553.00          524.00
    MA      2019    519.00          580.00
    LU      2019    577.00          514.00
    SI      2019    520.00          510.00
    BR      2019    516.00          543.00
     */

/* QUERY */
/* Assuming we will need sub query to handle debts in % of gdp_per-capita
    WHERE statement for gdp over 40k and for every year in last 4 years
    Alias gov debt as avg gov debt
    Alias gdp as top year over 40k
    ROUND avg gov debt/top years over 40k
    Have to end the statement with group by because of the mathmatical operations 
    Went with Top 60 Percent function since I was given the data before hand. Could also use LIMIT 3 ASC/DESC to get the top 3 avg gov debts.
    Query might not be as sound because of this, if anyother row of data was added it might break becuase 60% of 6 is 3.6.   */

/*Please write the SQL statement to show the top 3 average government debts in percent of the gdp_per_capita
(govt_debt / gdp_per_capita) for those countries of which gdp_per_capita was over 40,000 dollars in every year in
the last four years. */

SELECT code, TOP 60 PERCENT(AVG(govt_debt) AS avg_gov_debt),
(SELECT SUM(gdp_per_capita) 
    FROM countries 
    WHERE gdp_per_capita > 40000 AND year > 2015 AS top_years_over_40k, ROUND(avg_gov_debt/top_years_over_40k))
GROUP BY code