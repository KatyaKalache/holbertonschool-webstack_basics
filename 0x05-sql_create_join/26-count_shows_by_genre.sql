-- lists all genres and number of shows linked to each
SELECT tv_genres.name, COUNT(tv_shows.title) AS number_shows
  FROM tv_genres, tv_show_genres
  JOIN tv_shows
  ON tv_shows.id = tv_show_genres.show_id
  GROUP BY tv_genres.name;
