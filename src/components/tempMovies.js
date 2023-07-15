const tempMovies = () => {
  // const movies = [];
  // const movie1 = {"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975","Runtime":"124 min","Genre":"Adventure, Mystery, Thriller","Director":"Steven Spielberg","Writer":"Peter Benchley, Carl Gottlieb","Actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss","Plot":"When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.","Language":"English","Country":"United States","Awards":"Won 3 Oscars. 15 wins & 20 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"628,138","imdbID":"tt0073195","Type":"movie","DVD":"14 Jun 2005","BoxOffice":"$265,859,065","Production":"N/A","Website":"N/A","Response":"True"}
  // movies.push(movie1);
  // const movie2 = 
  // {"Title":"Indiana Jones and the Temple of Doom","Year":"1984","Rated":"PG","Released":"23 May 1984","Runtime":"118 min","Genre":"Action, Adventure","Director":"Steven Spielberg","Writer":"Willard Huyck, Gloria Katz, George Lucas","Actors":"Harrison Ford, Kate Capshaw, Ke Huy Quan","Plot":"In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.","Language":"English, Sinhala, Hindi","Country":"United States","Awards":"Won 1 Oscar. 11 wins & 21 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"7.5","imdbVotes":"512,702","imdbID":"tt0087469","Type":"movie","DVD":"13 May 2008","BoxOffice":"$179,870,271","Production":"N/A","Website":"N/A","Response":"True"}
  // movies.push(movie2);
  // const movie3 =  
  // {"Title":"Mean Girls","Year":"2004","Rated":"PG-13","Released":"30 Apr 2004","Runtime":"97 min","Genre":"Comedy","Director":"Mark Waters","Writer":"Rosalind Wiseman, Tina Fey","Actors":"Lindsay Lohan, Jonathan Bennett, Rachel McAdams","Plot":"Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.","Language":"English, German, Vietnamese, Swahili","Country":"United States, Canada","Awards":"7 wins & 25 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.1","imdbVotes":"400,967","imdbID":"tt0377092","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"$86,058,055","Production":"N/A","Website":"N/A","Response":"True"};
  // movies.push(movie3);
  // const movie4 = 
  // {"Title":"Freaky Friday","Year":"2003","Rated":"PG","Released":"06 Aug 2003","Runtime":"97 min","Genre":"Comedy, Family, Fantasy","Director":"Mark Waters","Writer":"Mary Rodgers, Heather Hach, Leslie Dixon","Actors":"Jamie Lee Curtis, Lindsay Lohan, Mark Harmon","Plot":"An overworked mother and her daughter do not get along. When they switch bodies, each is forced to adapt to the other's life for one freaky Friday.","Language":"English, Mandarin","Country":"United States","Awards":"5 wins & 11 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"6.3","imdbVotes":"144,993","imdbID":"tt0322330","Type":"movie","DVD":"21 Dec 2004","BoxOffice":"$110,230,332","Production":"N/A","Website":"N/A","Response":"True"};
  // movies.push(movie4);

  const movies = [
    {"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975","Runtime":"124 min","Genre":"Adventure, Mystery, Thriller","Director":"Steven Spielberg","Writer":"Peter Benchley, Carl Gottlieb","Actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss","Plot":"When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.","Language":"English","Country":"United States","Awards":"Won 3 Oscars. 15 wins & 20 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"628,138","imdbID":"tt0073195","Type":"movie","DVD":"14 Jun 2005","BoxOffice":"$265,859,065","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Indiana Jones and the Temple of Doom","Year":"1984","Rated":"PG","Released":"23 May 1984","Runtime":"118 min","Genre":"Action, Adventure","Director":"Steven Spielberg","Writer":"Willard Huyck, Gloria Katz, George Lucas","Actors":"Harrison Ford, Kate Capshaw, Ke Huy Quan","Plot":"In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.","Language":"English, Sinhala, Hindi","Country":"United States","Awards":"Won 1 Oscar. 11 wins & 21 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"7.5","imdbVotes":"512,702","imdbID":"tt0087469","Type":"movie","DVD":"13 May 2008","BoxOffice":"$179,870,271","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Mean Girls","Year":"2004","Rated":"PG-13","Released":"30 Apr 2004","Runtime":"97 min","Genre":"Comedy","Director":"Mark Waters","Writer":"Rosalind Wiseman, Tina Fey","Actors":"Lindsay Lohan, Jonathan Bennett, Rachel McAdams","Plot":"Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.","Language":"English, German, Vietnamese, Swahili","Country":"United States, Canada","Awards":"7 wins & 25 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.1","imdbVotes":"400,967","imdbID":"tt0377092","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"$86,058,055","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Freaky Friday","Year":"2003","Rated":"PG","Released":"06 Aug 2003","Runtime":"97 min","Genre":"Comedy, Family, Fantasy","Director":"Mark Waters","Writer":"Mary Rodgers, Heather Hach, Leslie Dixon","Actors":"Jamie Lee Curtis, Lindsay Lohan, Mark Harmon","Plot":"An overworked mother and her daughter do not get along. When they switch bodies, each is forced to adapt to the other's life for one freaky Friday.","Language":"English, Mandarin","Country":"United States","Awards":"5 wins & 11 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"6.3","imdbVotes":"144,993","imdbID":"tt0322330","Type":"movie","DVD":"21 Dec 2004","BoxOffice":"$110,230,332","Production":"N/A","Website":"N/A","Response":"True"},
    {
      "Title": "Goodfellas",
      "Year": "1990",
      "Rated": "R",
      "Released": "21 Sep 1990",
      "Runtime": "145 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Nicholas Pileggi, Martin Scorsese",
      "Actors": "Robert De Niro, Ray Liotta, Joe Pesci",
      "Plot": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
      "Language": "English, Italian",
      "Country": "United States",
      "Awards": "Won 1 Oscar. 44 wins & 38 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.7/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "92/100"
      }
      ],
      "Metascore": "92",
      "imdbRating": "8.7",
      "imdbVotes": "1,198,435",
      "imdbID": "tt0099685",
      "Type": "movie",
      "DVD": "22 Aug 1997",
      "BoxOffice": "$46,909,721",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "The Irishman",
      "Year": "2019",
      "Rated": "R",
      "Released": "27 Nov 2019",
      "Runtime": "209 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Steven Zaillian, Charles Brandt",
      "Actors": "Robert De Niro, Al Pacino, Joe Pesci",
      "Plot": "An illustration of Frank Sheeran's life, from W.W.II veteran to hit-man for the Bufalino crime family and his alleged assassination of his close friend Jimmy Hoffa.",
      "Language": "English, Italian, Latin, Spanish, German",
      "Country": "United States",
      "Awards": "Nominated for 10 Oscars. 73 wins & 356 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.8/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "95%"
      },
      {
      "Source": "Metacritic",
      "Value": "94/100"
      }
      ],
      "Metascore": "94",
      "imdbRating": "7.8",
      "imdbVotes": "405,834",
      "imdbID": "tt1302006",
      "Type": "movie",
      "DVD": "27 Nov 2019",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Taxi Driver",
      "Year": "1976",
      "Rated": "R",
      "Released": "09 Feb 1976",
      "Runtime": "114 min",
      "Genre": "Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Paul Schrader",
      "Actors": "Robert De Niro, Jodie Foster, Cybill Shepherd",
      "Plot": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
      "Language": "English, Spanish",
      "Country": "United States",
      "Awards": "Nominated for 4 Oscars. 22 wins & 21 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "94/100"
      }
      ],
      "Metascore": "94",
      "imdbRating": "8.2",
      "imdbVotes": "869,400",
      "imdbID": "tt0075314",
      "Type": "movie",
      "DVD": "14 Aug 2007",
      "BoxOffice": "$28,262,574",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "The Wolf of Wall Street",
      "Year": "2013",
      "Rated": "R",
      "Released": "25 Dec 2013",
      "Runtime": "180 min",
      "Genre": "Biography, Comedy, Crime",
      "Director": "Martin Scorsese",
      "Writer": "Terence Winter, Jordan Belfort",
      "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
      "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "Language": "English, French",
      "Country": "United States",
      "Awards": "Nominated for 5 Oscars. 37 wins & 179 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "80%"
      },
      {
      "Source": "Metacritic",
      "Value": "75/100"
      }
      ],
      "Metascore": "75",
      "imdbRating": "8.2",
      "imdbVotes": "1,472,956",
      "imdbID": "tt0993846",
      "Type": "movie",
      "DVD": "25 Mar 2014",
      "BoxOffice": "$116,900,694",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Casino",
      "Year": "1995",
      "Rated": "R",
      "Released": "22 Nov 1995",
      "Runtime": "178 min",
      "Genre": "Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Nicholas Pileggi, Martin Scorsese",
      "Actors": "Robert De Niro, Sharon Stone, Joe Pesci",
      "Plot": "In Las Vegas, two best friends - a mafia enforcer and a casino executive - compete for a gambling empire and a fast-living, fast-loving socialite.",
      "Language": "English",
      "Country": "United States, France",
      "Awards": "Nominated for 1 Oscar. 4 wins & 11 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "79%"
      },
      {
      "Source": "Metacritic",
      "Value": "73/100"
      }
      ],
      "Metascore": "73",
      "imdbRating": "8.2",
      "imdbVotes": "537,767",
      "imdbID": "tt0112641",
      "Type": "movie",
      "DVD": "26 Feb 2002",
      "BoxOffice": "$42,512,375",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "The Birds",
      "Year": "1963",
      "Rated": "PG-13",
      "Released": "29 Mar 1963",
      "Runtime": "119 min",
      "Genre": "Drama, Horror, Mystery",
      "Director": "Alfred Hitchcock",
      "Writer": "Daphne Du Maurier, Evan Hunter",
      "Actors": "Rod Taylor, Tippi Hedren, Jessica Tandy",
      "Plot": "A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 5 wins & 7 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.6/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "94%"
      },
      {
      "Source": "Metacritic",
      "Value": "90/100"
      }
      ],
      "Metascore": "90",
      "imdbRating": "7.6",
      "imdbVotes": "197,109",
      "imdbID": "tt0056869",
      "Type": "movie",
      "DVD": "02 Sep 2003",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Psycho",
      "Year": "1960",
      "Rated": "R",
      "Released": "08 Sep 1960",
      "Runtime": "109 min",
      "Genre": "Horror, Mystery, Thriller",
      "Director": "Alfred Hitchcock",
      "Writer": "Joseph Stefano, Robert Bloch",
      "Actors": "Anthony Perkins, Janet Leigh, Vera Miles",
      "Plot": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 4 Oscars. 7 wins & 14 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "97/100"
      }
      ],
      "Metascore": "97",
      "imdbRating": "8.5",
      "imdbVotes": "690,896",
      "imdbID": "tt0054215",
      "Type": "movie",
      "DVD": "04 Oct 2005",
      "BoxOffice": "$32,000,000",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Vertigo",
      "Year": "1958",
      "Rated": "PG",
      "Released": "16 Jun 1958",
      "Runtime": "128 min",
      "Genre": "Mystery, Romance, Thriller",
      "Director": "Alfred Hitchcock",
      "Writer": "Alec Coppel, Samuel A. Taylor, Pierre Boileau",
      "Actors": "James Stewart, Kim Novak, Barbara Bel Geddes",
      "Plot": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 2 Oscars. 9 wins & 7 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "92%"
      },
      {
      "Source": "Metacritic",
      "Value": "100/100"
      }
      ],
      "Metascore": "100",
      "imdbRating": "8.3",
      "imdbVotes": "411,923",
      "imdbID": "tt0052357",
      "Type": "movie",
      "DVD": "25 Jan 2001",
      "BoxOffice": "$7,705,225",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "North by Northwest",
      "Year": "1959",
      "Rated": "Approved",
      "Released": "18 Dec 1959",
      "Runtime": "136 min",
      "Genre": "Action, Adventure, Mystery",
      "Director": "Alfred Hitchcock",
      "Writer": "Ernest Lehman",
      "Actors": "Cary Grant, Eva Marie Saint, James Mason",
      "Plot": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
      "Language": "English, French",
      "Country": "United States",
      "Awards": "Nominated for 3 Oscars. 9 wins & 7 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "97%"
      },
      {
      "Source": "Metacritic",
      "Value": "98/100"
      }
      ],
      "Metascore": "98",
      "imdbRating": "8.3",
      "imdbVotes": "335,948",
      "imdbID": "tt0053125",
      "Type": "movie",
      "DVD": "03 Nov 2009",
      "BoxOffice": "$66,728",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Rear Window",
      "Year": "1954",
      "Rated": "PG",
      "Released": "01 Sep 1954",
      "Runtime": "112 min",
      "Genre": "Mystery, Thriller",
      "Director": "Alfred Hitchcock",
      "Writer": "John Michael Hayes, Cornell Woolrich",
      "Actors": "James Stewart, Grace Kelly, Wendell Corey",
      "Plot": "A photographer in a wheelchair spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 4 Oscars. 6 wins & 13 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "98%"
      },
      {
      "Source": "Metacritic",
      "Value": "100/100"
      }
      ],
      "Metascore": "100",
      "imdbRating": "8.5",
      "imdbVotes": "503,248",
      "imdbID": "tt0047396",
      "Type": "movie",
      "DVD": "07 Sep 2004",
      "BoxOffice": "$36,764,313",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Alien",
      "Year": "1979",
      "Rated": "R",
      "Released": "22 Jun 1979",
      "Runtime": "117 min",
      "Genre": "Horror, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Dan O'Bannon, Ronald Shusett",
      "Actors": "Sigourney Weaver, Tom Skerritt, John Hurt",
      "Plot": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "Language": "English",
      "Country": "United Kingdom, United States",
      "Awards": "Won 1 Oscar. 18 wins & 22 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "98%"
      },
      {
      "Source": "Metacritic",
      "Value": "89/100"
      }
      ],
      "Metascore": "89",
      "imdbRating": "8.5",
      "imdbVotes": "907,995",
      "imdbID": "tt0078748",
      "Type": "movie",
      "DVD": "01 Jun 1999",
      "BoxOffice": "$81,900,459",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Gladiator",
      "Year": "2000",
      "Rated": "R",
      "Released": "05 May 2000",
      "Runtime": "155 min",
      "Genre": "Action, Adventure, Drama",
      "Director": "Ridley Scott",
      "Writer": "David Franzoni, John Logan, William Nicholson",
      "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
      "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "Language": "English",
      "Country": "United States, United Kingdom, Malta, Morocco",
      "Awards": "Won 5 Oscars. 60 wins & 104 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "80%"
      },
      {
      "Source": "Metacritic",
      "Value": "67/100"
      }
      ],
      "Metascore": "67",
      "imdbRating": "8.5",
      "imdbVotes": "1,542,955",
      "imdbID": "tt0172495",
      "Type": "movie",
      "DVD": "26 Sep 2000",
      "BoxOffice": "$187,705,427",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Blade Runner",
      "Year": "1982",
      "Rated": "R",
      "Released": "25 Jun 1982",
      "Runtime": "117 min",
      "Genre": "Action, Drama, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Hampton Fancher, David Webb Peoples, Philip K. Dick",
      "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
      "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
      "Country": "United States",
      "Awards": "Nominated for 2 Oscars. 13 wins & 19 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "89%"
      },
      {
      "Source": "Metacritic",
      "Value": "84/100"
      }
      ],
      "Metascore": "84",
      "imdbRating": "8.1",
      "imdbVotes": "791,411",
      "imdbID": "tt0083658",
      "Type": "movie",
      "DVD": "30 Oct 2001",
      "BoxOffice": "$32,914,489",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "The Martian",
      "Year": "2015",
      "Rated": "PG-13",
      "Released": "02 Oct 2015",
      "Runtime": "144 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Drew Goddard, Andy Weir",
      "Actors": "Matt Damon, Jessica Chastain, Kristen Wiig",
      "Plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.",
      "Language": "English, Mandarin",
      "Country": "United States, United Kingdom, Hungary, Jordan",
      "Awards": "Nominated for 7 Oscars. 40 wins & 200 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.0/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "91%"
      },
      {
      "Source": "Metacritic",
      "Value": "80/100"
      }
      ],
      "Metascore": "80",
      "imdbRating": "8.0",
      "imdbVotes": "883,228",
      "imdbID": "tt3659388",
      "Type": "movie",
      "DVD": "12 Jan 2016",
      "BoxOffice": "$228,433,663",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Prometheus",
      "Year": "2012",
      "Rated": "R",
      "Released": "08 Jun 2012",
      "Runtime": "124 min",
      "Genre": "Adventure, Mystery, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Jon Spaihts, Damon Lindelof, Dan O'Bannon",
      "Actors": "Noomi Rapace, Logan Marshall-Green, Michael Fassbender",
      "Plot": "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
      "Language": "English, Gaelic",
      "Country": "United Kingdom, United States",
      "Awards": "Nominated for 1 Oscar. 6 wins & 47 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.0/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "73%"
      },
      {
      "Source": "Metacritic",
      "Value": "64/100"
      }
      ],
      "Metascore": "64",
      "imdbRating": "7.0",
      "imdbVotes": "622,356",
      "imdbID": "tt1446714",
      "Type": "movie",
      "DVD": "09 Oct 2012",
      "BoxOffice": "$126,477,084",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Unforgiven",
      "Year": "1992",
      "Rated": "R",
      "Released": "07 Aug 1992",
      "Runtime": "130 min",
      "Genre": "Drama, Western",
      "Director": "Clint Eastwood",
      "Writer": "David Webb Peoples",
      "Actors": "Clint Eastwood, Gene Hackman, Morgan Freeman",
      "Plot": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The \"Schofield Kid.\"",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 50 wins & 47 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "85/100"
      }
      ],
      "Metascore": "85",
      "imdbRating": "8.2",
      "imdbVotes": "422,266",
      "imdbID": "tt0105695",
      "Type": "movie",
      "DVD": "30 Oct 2001",
      "BoxOffice": "$101,167,799",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Gran Torino",
      "Year": "2008",
      "Rated": "R",
      "Released": "09 Jan 2009",
      "Runtime": "116 min",
      "Genre": "Drama",
      "Director": "Clint Eastwood",
      "Writer": "Nick Schenk, Dave Johannson",
      "Actors": "Clint Eastwood, Bee Vang, Christopher Carley",
      "Plot": "After a Hmong teenager tries to steal his prized 1972 Gran Torino, a disgruntled, prejudiced Korean War veteran seeks to redeem both the boy and himself.",
      "Language": "English, Hmong",
      "Country": "Germany, United States",
      "Awards": "21 wins & 22 nominations",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "81%"
      },
      {
      "Source": "Metacritic",
      "Value": "72/100"
      }
      ],
      "Metascore": "72",
      "imdbRating": "8.1",
      "imdbVotes": "792,239",
      "imdbID": "tt1205489",
      "Type": "movie",
      "DVD": "09 Jun 2009",
      "BoxOffice": "$148,095,302",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "American Sniper",
      "Year": "2014",
      "Rated": "R",
      "Released": "16 Jan 2015",
      "Runtime": "133 min",
      "Genre": "Action, Biography, Drama",
      "Director": "Clint Eastwood",
      "Writer": "Jason Hall, Chris Kyle, Scott McEwen",
      "Actors": "Bradley Cooper, Sienna Miller, Kyle Gallner",
      "Plot": "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave b...",
      "Language": "English, Arabic",
      "Country": "United States",
      "Awards": "Won 1 Oscar. 24 wins & 43 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "72%"
      },
      {
      "Source": "Metacritic",
      "Value": "72/100"
      }
      ],
      "Metascore": "72",
      "imdbRating": "7.3",
      "imdbVotes": "505,158",
      "imdbID": "tt2179136",
      "Type": "movie",
      "DVD": "19 May 2015",
      "BoxOffice": "$350,159,020",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Million Dollar Baby",
      "Year": "2004",
      "Rated": "PG-13",
      "Released": "28 Jan 2005",
      "Runtime": "132 min",
      "Genre": "Drama, Sport",
      "Director": "Clint Eastwood",
      "Writer": "Paul Haggis, F.X. Toole",
      "Actors": "Hilary Swank, Clint Eastwood, Morgan Freeman",
      "Plot": "Frankie, an ill-tempered old coach, reluctantly agrees to train aspiring boxer Maggie. Impressed with her determination and talent, he helps her become the best and the two soon form a close bond.",
      "Language": "English, Irish Gaelic",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 67 wins & 86 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "90%"
      },
      {
      "Source": "Metacritic",
      "Value": "86/100"
      }
      ],
      "Metascore": "86",
      "imdbRating": "8.1",
      "imdbVotes": "701,496",
      "imdbID": "tt0405159",
      "Type": "movie",
      "DVD": "12 Jul 2005",
      "BoxOffice": "$100,492,203",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
      {
      "Title": "Sully",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "09 Sep 2016",
      "Runtime": "96 min",
      "Genre": "Biography, Drama",
      "Director": "Clint Eastwood",
      "Writer": "Todd Komarnicki, Chesley Sullenberger, Jeffrey Zaslow",
      "Actors": "Tom Hanks, Aaron Eckhart, Laura Linney",
      "Plot": "When pilot Chesley \"Sully\" Sullenberger lands his damaged plane on the Hudson River in order to save the flight's passengers and crew, some consider him a hero while others think he was reckless.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 14 wins & 36 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2NmZDAwM2QtZmFiMS00OTJlLTgxMTItZDMyZmVhYjE1MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.4/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
      },
      {
      "Source": "Metacritic",
      "Value": "74/100"
      }
      ],
      "Metascore": "74",
      "imdbRating": "7.4",
      "imdbVotes": "284,351",
      "imdbID": "tt3263904",
      "Type": "movie",
      "DVD": "20 Dec 2016",
      "BoxOffice": "$125,070,033",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
      },
  ];

  

  return(movies);
}

export default tempMovies