// This is a feature-rich quiz logic starter. Each feature is modular for easy expansion.
// Features: categories, difficulty, timer, progress, sound, leaderboard, fun facts, images, dark mode, share, streaks, user questions, animation, accessibility, daily challenge.

// --- Sample Data ---
const questionsDB = {
  general: {
    easy: [
      { q: "What is the capital of France?", o: ["Berlin", "London", "Paris", "Madrid"], a: 2, img: "", fact: "Paris is known as the City of Light." },
      { q: "What color is the sky on a clear day?", o: ["Blue", "Green", "Red", "Yellow"], a: 0, img: "", fact: "The sky appears blue due to Rayleigh scattering." },
      { q: "How many days are in a week?", o: ["5", "6", "7", "8"], a: 2, img: "", fact: "There are 7 days in a week." },
      { q: "Which animal barks?", o: ["Cat", "Dog", "Cow", "Sheep"], a: 1, img: "", fact: "Dogs bark!" },
      { q: "What is 2 + 2?", o: ["3", "4", "5", "6"], a: 1, img: "", fact: "2 + 2 = 4." },
      { q: "Which is a fruit?", o: ["Carrot", "Apple", "Potato", "Lettuce"], a: 1, img: "", fact: "Apple is a fruit." },
      { q: "What do you use to write?", o: ["Spoon", "Pen", "Fork", "Plate"], a: 1, img: "", fact: "You write with a pen." },
      { q: "Which is a color?", o: ["Dog", "Blue", "Table", "Chair"], a: 1, img: "", fact: "Blue is a color." },
      { q: "What do you drink?", o: ["Water", "Rock", "Sand", "Paper"], a: 0, img: "", fact: "You drink water." },
      { q: "Which is a vehicle?", o: ["Tree", "Car", "Book", "Shoe"], a: 1, img: "", fact: "A car is a vehicle." }
    ],
    medium: [
      { q: "Which planet is known as the Red Planet?", o: ["Earth", "Mars", "Jupiter", "Saturn"], a: 1, img: "", fact: "Mars appears red due to iron oxide." },
      { q: "What is the largest ocean?", o: ["Atlantic", "Indian", "Arctic", "Pacific"], a: 3, img: "", fact: "The Pacific is the largest ocean." },
      { q: "Who wrote 'Romeo and Juliet'?", o: ["Dickens", "Shakespeare", "Twain", "Austen"], a: 1, img: "", fact: "Shakespeare wrote 'Romeo and Juliet'." },
      { q: "What is 12 x 3?", o: ["36", "24", "15", "30"], a: 0, img: "", fact: "12 x 3 = 36." },
      { q: "Which is a mammal?", o: ["Shark", "Frog", "Dolphin", "Eagle"], a: 2, img: "", fact: "Dolphins are mammals." },
      { q: "What is the boiling point of water?", o: ["90°C", "100°C", "80°C", "120°C"], a: 1, img: "", fact: "Water boils at 100°C." },
      { q: "Which is a prime number?", o: ["4", "6", "7", "8"], a: 2, img: "", fact: "7 is a prime number." },
      { q: "What is the main language in Brazil?", o: ["Spanish", "Portuguese", "French", "English"], a: 1, img: "", fact: "Portuguese is spoken in Brazil." },
      { q: "Which is a continent?", o: ["Africa", "Greenland", "Hawaii", "Iceland"], a: 0, img: "", fact: "Africa is a continent." },
      { q: "What is the square root of 81?", o: ["7", "8", "9", "10"], a: 2, img: "", fact: "√81 = 9." }
    ],
    hard: [
      { q: "What is the chemical symbol for gold?", o: ["Au", "Ag", "Gd", "Go"], a: 0, img: "", fact: "Gold's symbol is Au." },
      { q: "Who painted the Mona Lisa?", o: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"], a: 1, img: "", fact: "Da Vinci painted the Mona Lisa." },
      { q: "What is the capital of Iceland?", o: ["Oslo", "Reykjavik", "Helsinki", "Stockholm"], a: 1, img: "", fact: "Reykjavik is Iceland's capital." },
      { q: "What is 17 x 19?", o: ["323", "289", "342", "361"], a: 0, img: "", fact: "17 x 19 = 323." },
      { q: "Who discovered penicillin?", o: ["Newton", "Fleming", "Curie", "Einstein"], a: 1, img: "", fact: "Alexander Fleming discovered penicillin." },
      { q: "What is the largest desert?", o: ["Sahara", "Gobi", "Arctic", "Antarctica"], a: 3, img: "", fact: "Antarctica is the largest desert." },
      { q: "What is the speed of light?", o: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], a: 0, img: "", fact: "Speed of light ≈ 300,000 km/s." },
      { q: "Who wrote 'The Odyssey'?", o: ["Homer", "Virgil", "Sophocles", "Plato"], a: 0, img: "", fact: "Homer wrote 'The Odyssey'." },
      { q: "What is the hardest natural substance?", o: ["Gold", "Iron", "Diamond", "Quartz"], a: 2, img: "", fact: "Diamond is the hardest." },
      { q: "What is the currency of Japan?", o: ["Yen", "Won", "Dollar", "Peso"], a: 0, img: "", fact: "Japan uses the Yen." }
    ]
  },
  science: {
    easy: [
      { q: "What gas do plants absorb?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], a: 1, img: "", fact: "Plants absorb CO2 for photosynthesis." },
      { q: "What is H2O?", o: ["Hydrogen Peroxide", "Water", "Hydrochloric Acid", "Ammonia"], a: 1, img: "", fact: "H2O is water." },
      { q: "What is the chemical formula for methane?", o: ["CH4", "C2H5OH", "CO2", "NH3"], a: 0, img: "", fact: "Methane's formula is CH4." },
      { q: "What element does 'O' represent on the periodic table?", o: ["Gold", "Oxygen", "Silver", "Hydrogen"], a: 1, img: "", fact: "O is for Oxygen." },
      { q: "What is the most abundant gas in Earth's atmosphere?", o: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], a: 1, img: "", fact: "Nitrogen makes up 78% of the atmosphere." },
      { q: "What is the chemical symbol for sodium?", o: ["Na", "S", "So", "N"], a: 0, img: "", fact: "Sodium's symbol is Na." },
      { q: "What is the pH level of water?", o: ["7", "0", "14", "10"], a: 0, img: "", fact: "Pure water has a pH of 7." },
      { q: "What gas do we breathe in?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], a: 0, img: "", fact: "We breathe in Oxygen." },
      { q: "What is the chemical formula for ammonia?", o: ["NH3", "H2O", "CO2", "CH4"], a: 0, img: "", fact: "Ammonia's formula is NH3." },
      { q: "What is the most common element in the universe?", o: ["Hydrogen", "Helium", "Carbon", "Oxygen"], a: 0, img: "", fact: "Hydrogen is the most abundant element." }
    ],
    medium: [
      { q: "What is the atomic number of carbon?", o: ["6", "12", "14", "8"], a: 0, img: "", fact: "Carbon's atomic number is 6." },
      { q: "What is the chemical formula for sulfuric acid?", o: ["H2SO4", "HCl", "NaOH", "CH3COOH"], a: 0, img: "", fact: "Sulfuric acid's formula is H2SO4." },
      { q: "What is the main gas found in the air we breathe?", o: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], a: 1, img: "", fact: "Nitrogen is the main component of air." },
      { q: "What is the chemical symbol for potassium?", o: ["K", "P", "Po", "Pt"], a: 0, img: "", fact: "Potassium's symbol is K." },
      { q: "What is the most abundant element in Earth's crust?", o: ["Iron", "Oxygen", "Silicon", "Aluminum"], a: 1, img: "", fact: "Oxygen is the most abundant element in the crust." },
      { q: "What is the chemical formula for glucose?", o: ["C6H12O6", "C5H10O5", "C6H10O5", "C6H12O7"], a: 0, img: "", fact: "Glucose's formula is C6H12O6." },
      { q: "What is the atomic number of oxygen?", o: ["6", "8", "16", "12"], a: 1, img: "", fact: "Oxygen's atomic number is 8." },
      { q: "What is the chemical symbol for calcium?", o: ["Ca", "C", "Cl", "Co"], a: 0, img: "", fact: "Calcium's symbol is Ca." },
      { q: "What is the most abundant metal in Earth's crust?", o: ["Iron", "Aluminum", "Copper", "Lead"], a: 0, img: "", fact: "Iron is the most abundant metal in the crust." },
      { q: "What is the chemical formula for acetic acid?", o: ["CH3COOH", "C2H5OH", "H2SO4", "NaOH"], a: 0, img: "", fact: "Acetic acid's formula is CH3COOH." }
    ],
    hard: [
      { q: "What is the chemical formula for ozone?", o: ["O3", "O2", "CO2", "H2O"], a: 0, img: "", fact: "Ozone's formula is O3." },
      { q: "What is the atomic number of gold?", o: ["79", "47", "86", "74"], a: 0, img: "", fact: "Gold's atomic number is 79." },
      { q: "What is the chemical symbol for mercury?", o: ["Hg", "Mc", "Mn", "Mo"], a: 0, img: "", fact: "Mercury's symbol is Hg." },
      { q: "What is the atomic number of lead?", o: ["82", "78", "74", "80"], a: 0, img: "", fact: "Lead's atomic number is 82." },
      { q: "What is the chemical formula for hydrogen peroxide?", o: ["H2O2", "H2O", "O2", "HO"], a: 0, img: "", fact: "Hydrogen peroxide's formula is H2O2." },
      { q: "What is the atomic number of silver?", o: ["47", "42", "29", "79"], a: 0, img: "", fact: "Silver's atomic number is 47." },
      { q: "What is the chemical symbol for tin?", o: ["Sn", "Si", "Ti", "S"], a: 0, img: "", fact: "Tin's symbol is Sn." },
      { q: "What is the atomic number of copper?", o: ["29", "35", "26", "30"], a: 0, img: "", fact: "Copper's atomic number is 29." },
      { q: "What is the chemical formula for sodium chloride?", o: ["NaCl", "KCl", "CaCl2", "MgCl2"], a: 0, img: "", fact: "Sodium chloride's formula is NaCl." },
      { q: "What is the atomic number of zinc?", o: ["30", "25", "35", "40"], a: 0, img: "", fact: "Zinc's atomic number is 30." }
    ]
  },
  history: {
    easy: [
      { q: "Who was the first President of the USA?", o: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"], a: 1, img: "", fact: "George Washington served from 1789 to 1797." },
      { q: "In which year did the Titanic sink?", o: ["1912", "1905", "1898", "1923"], a: 0, img: "", fact: "The Titanic sank in 1912." },
      { q: "Who was the first man on the moon?", o: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], a: 1, img: "", fact: "Neil Armstrong was the first man on the moon." },
      { q: "What was the name of the ship that brought the Pilgrims to America?", o: ["Mayflower", "Santa Maria", "Pinta", "Nina"], a: 0, img: "", fact: "The Pilgrims sailed on the Mayflower." },
      { q: "Who was the first woman to fly solo across the Atlantic?", o: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"], a: 0, img: "", fact: "Amelia Earhart was the first woman to fly solo across the Atlantic." },
      { q: "In which war was the Battle of Gettysburg?", o: ["Civil War", "World War I", "World War II", "Korean War"], a: 0, img: "", fact: "The Battle of Gettysburg was in the Civil War." },
      { q: "Who discovered America?", o: ["Christopher Columbus", "Ferdinand Magellan", "Hernan Cortes", "Francisco Pizarro"], a: 0, img: "", fact: "Christopher Columbus is credited with discovering America in 1492." },
      { q: "What was the first permanent English settlement in America?", o: ["Jamestown", "Plymouth", "Roanoke", "Savannah"], a: 0, img: "", fact: "Jamestown was the first permanent English settlement in America." },
      { q: "Who was the first female Prime Minister of the UK?", o: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Golda Meir"], a: 0, img: "", fact: "Margaret Thatcher was the first female Prime Minister of the UK." },
      { q: "In which year did World War II end?", o: ["1945", "1944", "1946", "1947"], a: 0, img: "", fact: "World War II ended in 1945." }
    ],
    medium: [
      { q: "Who was the first President to live in the White House?", o: ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"], a: 0, img: "", fact: "John Adams was the first President to live in the White House." },
      { q: "In which year did the Berlin Wall fall?", o: ["1989", "1990", "1987", "1991"], a: 0, img: "", fact: "The Berlin Wall fell in 1989." },
      { q: "Who was the first woman in space?", o: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Jessica Meir"], a: 0, img: "", fact: "Valentina Tereshkova was the first woman in space." },
      { q: "What was the name of the first artificial Earth satellite?", o: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"], a: 0, img: "", fact: "Sputnik 1 was the first artificial Earth satellite." },
      { q: "Who was the first African American to win a Nobel Prize?", o: ["Martin Luther King Jr.", "Ralph Bunche", "W.E.B. Du Bois", "Malcolm X"], a: 1, img: "", fact: "Ralph Bunche was the first African American to win a Nobel Prize." },
      { q: "In which year did the Chernobyl disaster occur?", o: ["1986", "1979", "1991", "1989"], a: 0, img: "", fact: "The Chernobyl disaster occurred in 1986." },
      { q: "Who was the first woman to win a Nobel Prize?", o: ["Marie Curie", "Rosalind Franklin", "Barbara McClintock", "Ada Lovelace"], a: 0, img: "", fact: "Marie Curie was the first woman to win a Nobel Prize." },
      { q: "What was the name of the first man-made object to land on the moon?", o: ["Lunar Module", "Apollo 11", "Voyager 1", "Mars Rover"], a: 0, img: "", fact: "The Lunar Module was the first man-made object to land on the moon." },
      { q: "Who was the first Hispanic Supreme Court Justice?", o: ["Sonia Sotomayor", "Ruth Bader Ginsburg", "Clarence Thomas", "Anthony Kennedy"], a: 0, img: "", fact: "Sonia Sotomayor was the first Hispanic Supreme Court Justice." },
      { q: "In which year did the Gulf War begin?", o: ["1990", "1991", "1989", "1992"], a: 0, img: "", fact: "The Gulf War began in 1990." }
    ],
    hard: [
      { q: "Who was the first President to be impeached?", o: ["Andrew Johnson", "Richard Nixon", "Bill Clinton", "George W. Bush"], a: 0, img: "", fact: "Andrew Johnson was the first President to be impeached." },
      { q: "In which year did the Titanic sink?", o: ["1912", "1905", "1898", "1923"], a: 0, img: "", fact: "The Titanic sank in 1912." },
      { q: "Who was the first man to circumnavigate the globe?", o: ["Ferdinand Magellan", "Christopher Columbus", "Hernan Cortes", "Francisco Pizarro"], a: 0, img: "", fact: "Ferdinand Magellan was the first man to circumnavigate the globe." },
      { q: "What was the name of the first artificial Earth satellite?", o: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"], a: 0, img: "", fact: "Sputnik 1 was the first artificial Earth satellite." },
      { q: "Who was the first African American to win a Nobel Prize?", o: ["Martin Luther King Jr.", "Ralph Bunche", "W.E.B. Du Bois", "Malcolm X"], a: 1, img: "", fact: "Ralph Bunche was the first African American to win a Nobel Prize." },
      { q: "In which year did the Chernobyl disaster occur?", o: ["1986", "1979", "1991", "1989"], a: 0, img: "", fact: "The Chernobyl disaster occurred in 1986." },
      { q: "Who was the first woman to win a Nobel Prize?", o: ["Marie Curie", "Rosalind Franklin", "Barbara McClintock", "Ada Lovelace"], a: 0, img: "", fact: "Marie Curie was the first woman to win a Nobel Prize." },
      { q: "What was the name of the first man-made object to land on the moon?", o: ["Lunar Module", "Apollo 11", "Voyager 1", "Mars Rover"], a: 0, img: "", fact: "The Lunar Module was the first man-made object to land on the moon." },
      { q: "Who was the first Hispanic Supreme Court Justice?", o: ["Sonia Sotomayor", "Ruth Bader Ginsburg", "Clarence Thomas", "Anthony Kennedy"], a: 0, img: "", fact: "Sonia Sotomayor was the first Hispanic Supreme Court Justice." },
      { q: "In which year did the Gulf War begin?", o: ["1990", "1991", "1989", "1992"], a: 0, img: "", fact: "The Gulf War began in 1990." }
    ]
  },
  sports: {
    easy: [
      { q: "How many players in a soccer team?", o: ["9", "10", "11", "12"], a: 2, img: "", fact: "A standard soccer team has 11 players." },
      { q: "Which sport is known as the 'king of sports'?", o: ["Basketball", "Soccer", "Tennis", "Cricket"], a: 1, img: "", fact: "Soccer is known as the 'king of sports'." },
      { q: "In which sport do players use a racket?", o: ["Soccer", "Basketball", "Tennis", "Baseball"], a: 2, img: "", fact: "Players use a racket in Tennis." },
      { q: "How many points is a touchdown worth in American football?", o: ["3", "5", "6", "7"], a: 2, img: "", fact: "A touchdown is worth 6 points." },
      { q: "Which sport is played on a diamond-shaped field?", o: ["Soccer", "Football", "Baseball", "Hockey"], a: 2, img: "", fact: "Baseball is played on a diamond-shaped field." },
      { q: "In which sport do teams compete for the Stanley Cup?", o: ["Basketball", "Football", "Hockey", "Baseball"], a: 2, img: "", fact: "Teams compete for the Stanley Cup in Hockey." },
      { q: "How many players are there in a rugby team?", o: ["13", "15", "11", "7"], a: 1, img: "", fact: "A rugby team has 15 players." },
      { q: "Which sport uses a shuttlecock?", o: ["Tennis", "Badminton", "Squash", "Racquetball"], a: 1, img: "", fact: "A shuttlecock is used in Badminton." },
      { q: "In which sport do you score a 'hole in one'?", o: ["Golf", "Tennis", "Baseball", "Bowling"], a: 0, img: "", fact: "You score a 'hole in one' in Golf." },
      { q: "Which sport is known as 'the beautiful game'?", o: ["Basketball", "Soccer", "Football", "Cricket"], a: 1, img: "", fact: "Soccer is known as 'the beautiful game'." }
    ],
    medium: [
      { q: "Which country won the first FIFA World Cup?", o: ["Brazil", "Germany", "Italy", "Argentina"], a: 2, img: "", fact: "Italy won the first FIFA World Cup in 1934." },
      { q: "In which sport is the Ryder Cup contested?", o: ["Golf", "Tennis", "Cricket", "Soccer"], a: 0, img: "", fact: "The Ryder Cup is contested in Golf." },
      { q: "Which country has won the most Rugby World Cups?", o: ["New Zealand", "Australia", "England", "South Africa"], a: 0, img: "", fact: "New Zealand has won the most Rugby World Cups." },
      { q: "In which sport would you perform a slam dunk?", o: ["Basketball", "Volleyball", "Tennis", "Badminton"], a: 0, img: "", fact: "You perform a slam dunk in Basketball." },
      { q: "Which country is known as the land of the rising sun?", o: ["China", "Japan", "Thailand", "Vietnam"], a: 1, img: "", fact: "Japan is known as the land of the rising sun." },
      { q: "In which sport do players use a cue?", o: ["Snooker", "Tennis", "Bowling", "Golf"], a: 0, img: "", fact: "Players use a cue in Snooker." },
      { q: "Which country won the UEFA Euro 2020?", o: ["Portugal", "France", "Italy", "Spain"], a: 2, img: "", fact: "Italy won the UEFA Euro 2020." },
      { q: "In which sport is the term 'home run' used?", o: ["Cricket", "Baseball", "Rugby", "Soccer"], a: 1, img: "", fact: "A 'home run' is scored in Baseball." },
      { q: "Which country hosted the 2016 Summer Olympics?", o: ["China", "UK", "Brazil", "Russia"], a: 2, img: "", fact: "Brazil hosted the 2016 Summer Olympics." },
      { q: "In which sport do you use a pommel horse?", o: ["Gymnastics", "Wrestling", "Boxing", "Fencing"], a: 0, img: "", fact: "A pommel horse is used in Gymnastics." }
    ],
    hard: [
      { q: "Which country won the first Rugby World Cup?", o: ["New Zealand", "Australia", "South Africa", "England"], a: 0, img: "", fact: "New Zealand won the first Rugby World Cup in 1987." },
      { q: "In which sport is the Davis Cup contested?", o: ["Tennis", "Badminton", "Squash", "Table Tennis"], a: 0, img: "", fact: "The Davis Cup is contested in Tennis." },
      { q: "Which country has won the most Cricket World Cups?", o: ["Australia", "India", "West Indies", "England"], a: 0, img: "", fact: "Australia has won the most Cricket World Cups." },
      { q: "In which sport would you perform a triple axel?", o: ["Figure Skating", "Gymnastics", "Skiing", "Snowboarding"], a: 0, img: "", fact: "You perform a triple axel in Figure Skating." },
      { q: "Which country is known as the home of the Olympic Games?", o: ["Greece", "Italy", "France", "Germany"], a: 0, img: "", fact: "Greece is known as the home of the Olympic Games." },
      { q: "In which sport do players use a fencing sword?", o: ["Fencing", "Boxing", "Martial Arts", "Wrestling"], a: 0, img: "", fact: "A fencing sword is used in Fencing." },
      { q: "Which country won the FIFA Women's World Cup 2019?", o: ["USA", "Netherlands", "Japan", "Germany"], a: 0, img: "", fact: "USA won the FIFA Women's World Cup 2019." },
      { q: "In which sport is the term 'break' used?", o: ["Snooker", "Tennis", "Badminton", "Squash"], a: 0, img: "", fact: "The term 'break' is used in Snooker." },
      { q: "Which country hosted the 2020 Summer Olympics?", o: ["Japan", "China", "USA", "France"], a: 0, img: "", fact: "Japan hosted the 2020 Summer Olympics." },
      { q: "In which sport do you use a balance beam?", o: ["Gymnastics", "Wrestling", "Boxing", "Fencing"], a: 0, img: "", fact: "A balance beam is used in Gymnastics." }
    ]
  },
  pop: {
    easy: [
      { q: "Who sang 'Thriller'?", o: ["Prince", "Elton John", "Michael Jackson", "Madonna"], a: 2, img: "", fact: "'Thriller' is Michael Jackson's best-selling album." },
      { q: "Which band was Freddie Mercury the lead singer of?", o: ["The Beatles", "Queen", "Nirvana", "Led Zeppelin"], a: 1, img: "", fact: "Freddie Mercury was the lead singer of Queen." },
      { q: "What is the title of Adele's debut album?", o: ["21", "25", "19", "Hello"], a: 2, img: "", fact: "Adele's debut album is titled 19." },
      { q: "Which song is known as the 'Queen of Christmas'?", o: ["All I Want for Christmas Is You", "Last Christmas", "Christmas Time", "Jingle Bell Rock"], a: 0, img: "", fact: "All I Want for Christmas Is You is known as the 'Queen of Christmas'." },
      { q: "Who is the best-selling female artist of all time?", o: ["Madonna", "Mariah Carey", "Whitney Houston", "Celine Dion"], a: 1, img: "", fact: "Mariah Carey is the best-selling female artist of all time." },
      { q: "Which movie features the song 'My Heart Will Go On'?", o: ["Titanic", "Avatar", "The Bodyguard", "Gladiator"], a: 0, img: "", fact: "'My Heart Will Go On' is the theme song for Titanic." },
      { q: "Who is known as the 'King of Pop'?", o: ["Elvis Presley", "Michael Jackson", "Prince", "James Brown"], a: 1, img: "", fact: "Michael Jackson is known as the 'King of Pop'." },
      { q: "Which band is known for the song 'Hotel California'?", o: ["The Eagles", "Fleetwood Mac", "The Rolling Stones", "Led Zeppelin"], a: 0, img: "", fact: "'Hotel California' is a famous song by The Eagles." },
      { q: "What is the highest-selling album of all time?", o: ["Thriller", "Back in Black", "The Dark Side of the Moon", "The Bodyguard"], a: 0, img: "", fact: "Thriller is the highest-selling album of all time." },
      { q: "Who won the first season of American Idol?", o: ["Kelly Clarkson", "Justin Guarini", "Ruben Studdard", "Fantasia Barrino"], a: 0, img: "", fact: "Kelly Clarkson won the first season of American Idol." }
    ],
    medium: [
      { q: "Which artist is known for the hit 'Shape of You'?", o: ["Ed Sheeran", "Justin Bieber", "Bruno Mars", "The Weeknd"], a: 0, img: "", fact: "'Shape of You' is a hit song by Ed Sheeran." },
      { q: "What was the first music video played on MTV?", o: ["Video Killed the Radio Star", "Billie Jean", "Like a Virgin", "Sweet Child o' Mine"], a: 0, img: "", fact: "The first music video played on MTV was 'Video Killed the Radio Star'." },
      { q: "Which artist has won the most Grammy Awards?", o: ["Beyonce", "Taylor Swift", "Stevie Wonder", "Aretha Franklin"], a: 2, img: "", fact: "Stevie Wonder has won the most Grammy Awards." },
      { q: "What is the best-selling album by a female artist?", o: ["The Bodyguard", "Back to Black", "Rumours", "The Dark Side of the Moon"], a: 0, img: "", fact: "The Bodyguard soundtrack is the best-selling album by a female artist." },
      { q: "Which song by Whitney Houston was a massive hit in 1992?", o: ["I Will Always Love You", "Greatest Love of All", "I Wanna Dance with Somebody", "How Will I Know"], a: 0, img: "", fact: "I Will Always Love You was a massive hit for Whitney Houston." },
      { q: "Which band was known for their elaborate live shows in the 70s?", o: ["The Who", "Led Zeppelin", "Pink Floyd", "Queen"], a: 2, img: "", fact: "Pink Floyd was known for their elaborate live shows." },
      { q: "What is the title of the famous duet by Lady Gaga and Bradley Cooper?", o: ["Shallow", "Uptown Funk", "Blinding Lights", "Watermelon Sugar"], a: 0, img: "", fact: "The duet by Lady Gaga and Bradley Cooper is titled 'Shallow'." },
      { q: "Which artist is known for the song 'Rolling in the Deep'?", o: ["Adele", "Beyonce", "Rihanna", "Taylor Swift"], a: 0, img: "", fact: "'Rolling in the Deep' is a song by Adele." },
      { q: "What was the first Beatles' song to hit number one in the US?", o: ["I Want to Hold Your Hand", "She Loves You", "Hey Jude", "Let It Be"], a: 0, img: "", fact: "The first Beatles' song to hit number one in the US was 'I Want to Hold Your Hand'." },
      { q: "Which artist is famous for the song 'Purple Rain'?", o: ["Prince", "Michael Jackson", "Stevie Wonder", "Marvin Gaye"], a: 0, img: "", fact: "'Purple Rain' is a famous song by Prince." }
    ],
    hard: [
      { q: "Which artist recorded the hit song 'Like a Rolling Stone'?", o: ["Bob Dylan", "The Rolling Stones", "Eric Clapton", "David Bowie"], a: 0, img: "", fact: "'Like a Rolling Stone' is a hit song by Bob Dylan." },
      { q: "What was the first video to reach 1 billion views on YouTube?", o: ["Gangnam Style", "Despacito", "See You Again", "Shape of You"], a: 0, img: "", fact: "The first video to reach 1 billion views on YouTube was 'Gangnam Style'." },
      { q: "Which artist is known for the song 'Smells Like Teen Spirit'?", o: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"], a: 0, img: "", fact: "'Smells Like Teen Spirit' is a song by Nirvana." },
      { q: "What is the title of the famous duet by Elton John and Kiki Dee?", o: ["Don't Go Breaking My Heart", "You're the One That I Want", "Islands in the Stream", "Endless Love"], a: 0, img: "", fact: "The duet by Elton John and Kiki Dee is titled 'Don't Go Breaking My Heart'." },
      { q: "Which band is known for the song 'Stairway to Heaven'?", o: ["Led Zeppelin", "The Doors", "The Who", "Pink Floyd"], a: 0, img: "", fact: "'Stairway to Heaven' is a famous song by Led Zeppelin." },
      { q: "What is the best-selling album of the 21st century?", o: ["21", "The Dark Side of the Moon", "Back in Black", "Rumours"], a: 0, img: "", fact: "Adele's album 21 is the best-selling album of the 21st century." },
      { q: "Which artist is known for the song 'Billie Jean'?", o: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston"], a: 0, img: "", fact: "'Billie Jean' is a famous song by Michael Jackson." },
      { q: "What was the first song to be streamed one billion times on Spotify?", o: ["Shape of You", "Despacito", "Rockstar", "One Dance"], a: 0, img: "", fact: "The first song to be streamed one billion times on Spotify was 'Shape of You'." },
      { q: "Which artist recorded the hit song 'Superstition'?", o: ["Stevie Wonder", "Marvin Gaye", "James Brown", "Ray Charles"], a: 0, img: "", fact: "'Superstition' is a hit song by Stevie Wonder." },
      { q: "What is the title of the famous duet by Lady Gaga and Tony Bennett?", o: ["Shallow", "Uptown Funk", "Blinding Lights", "Anything Goes"], a: 0, img: "", fact: "The duet by Lady Gaga and Tony Bennett is titled 'Anything Goes'." }
    ]
  }
};

function getRandomQuestions(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// --- State ---
let questions = [];
let current = 0;
let score = 0;
let streak = 0;
let timer = null;
let timeLeft = 30;
let leaderboard = JSON.parse(localStorage.getItem('quiz-leaderboard') || '[]');
let darkMode = false;

// --- Elements ---
const categorySel = document.getElementById('category');
const difficultySel = document.getElementById('difficulty');
const progressBar = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const timeEl = document.getElementById('time');
const questionImg = document.getElementById('question-img');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');
const funFactDiv = document.getElementById('fun-fact');
const leaderboardDiv = document.getElementById('leaderboard');
const themeToggle = document.getElementById('theme-toggle');
const backBtn = document.getElementById('back-btn');

// --- Accessibility ---
optionsDiv.setAttribute('role', 'radiogroup');
nextBtn.setAttribute('aria-label', 'Next question');

// --- Category & Difficulty ---
const category = localStorage.getItem('quiz-category') || 'general';
const difficulty = localStorage.getItem('quiz-difficulty') || 'easy';

// --- Theme Toggle ---
themeToggle.onclick = () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  themeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// --- Start Quiz ---
function startQuiz() {
  let pool = (questionsDB[category] && questionsDB[category][difficulty]) ? questionsDB[category][difficulty] : [];
  questions = getRandomQuestions(pool, 6);
  current = 0;
  score = 0;
  streak = 0;
  showQuestion();
  updateProgress();
  resultDiv.style.display = 'none';
  leaderboardDiv.style.display = 'none';
}

// --- Show Question ---
function showQuestion() {
  if (current >= questions.length) return showResult();
  const q = questions[current];
  questionText.textContent = q.q;
  if (q.img) {
    questionImg.src = q.img;
    questionImg.style.display = 'block';
  } else {
    questionImg.style.display = 'none';
  }
  optionsDiv.innerHTML = '';
  nextBtn.disabled = true;
  q.o.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.className = 'option-btn';
    btn.setAttribute('role', 'radio');
    btn.onclick = () => selectOption(idx, btn);
    btn.onkeyup = e => { if (e.key === 'Enter' || e.key === ' ') btn.click(); };
    optionsDiv.appendChild(btn);
  });
  startTimer();
}

// --- Select Option ---
function selectOption(idx, btn) {
  Array.from(optionsDiv.children).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  nextBtn.disabled = false;
  btn.focus();
  stopTimer();
  playSound(idx === questions[current].a ? 'correct' : 'wrong');
  if (idx === questions[current].a) streak++; else streak = 0;
  userAnswers[current] = idx; // Save answer
}

// --- Next Button ---
nextBtn.onclick = function() {
  if (document.querySelector('.option-btn.selected')) {
    if (document.querySelector('.option-btn.selected').textContent === questions[current].o[questions[current].a]) score++;
    current++;
    showQuestion();
    updateProgress();
  }
};

// --- Timer ---
function startTimer() {
  timeLeft = 30;
  timeEl.textContent = timeLeft;
  timerEl.style.display = 'block';
  timerEl.classList.remove('glow-red'); // Always reset glow
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 5 && timeLeft > 0) {
      timerEl.classList.add('glow-red');
      playSound('timer');
    }
    if (timeLeft === 0) {
      timerEl.classList.remove('glow-red'); // Remove glow on timeout
      stopTimer();
      nextBtn.disabled = false;
      // Play timeout.wav immediately
      new Audio('timeout.wav').play();
      // Flash red background on question card
      const container = document.querySelector('.container');
      if (container) {
        container.classList.add('flash-red');
        setTimeout(() => {
          container.classList.remove('flash-red');
          // Automatically go to next question
          current++;
          showQuestion();
          updateProgress();
        }, 600);
      } else {
        // Fallback: just go to next question
        current++;
        showQuestion();
        updateProgress();
      }
    }
  }, 1000);
}
function stopTimer() { clearInterval(timer); }

// --- Progress Bar ---
function updateProgress() {
  progressBar.style.width = ((current / questions.length) * 100) + '%';
}

// --- Show Result ---
function showResult() {
  stopTimer();
  questionText.textContent = '';
  optionsDiv.innerHTML = '';
  nextBtn.style.display = 'none';
  timerEl.style.display = 'none';
  funFactDiv.style.display = 'none';
  resultDiv.style.display = 'block';
  if (backBtn) {
    backBtn.style.display = 'none';
    backBtn.style.visibility = 'hidden';
  }
  // Play cheer.wav for 3 seconds
  const cheer = new Audio('cheer.wav');
  cheer.volume = 1;
  cheer.play().catch(()=>{});
  setTimeout(() => { cheer.pause(); cheer.currentTime = 0; }, 5000);
  let reviewBtn = `<button onclick='showReview()' class='next-btn'>Review Answers</button>`;
  resultDiv.innerHTML = `
    <img src="https://i.pinimg.com/736x/fd/f4/30/fdf430bc77e296926bdafd0d5d826fd2.jpg" alt="Congratulations" style="max-width:120px;display:block;margin:0 auto 1rem auto;">
    <div>Congratulations!</div>
    You scored <b>${score}</b> out of <b>${questions.length}</b><br>Streak: ${streak}<br>
    <button onclick='window.location="setup.html"' class='next-btn'>Try Again</button>
    <button onclick='window.location="index.html"' class='next-btn'>Go Home</button><br>
    <button onclick='shareResult()' class='next-btn'><i class='fas fa-share'></i> Share</button><br>
    ${reviewBtn}
  `;
  updateLeaderboard();
}

// --- Review Answers ---
let reviewMode = false;
let userAnswers = [];
function showReview() {
  reviewMode = true;
  let reviewHtml = '<h2>Review Answers</h2><ol>';
  questions.forEach((q, i) => {
    reviewHtml += `<li><b>${q.q}</b><br>Your answer: <span style='color:${userAnswers[i]===q.a?'green':'red'}'>${q.o[userAnswers[i]]||'None'}</span><br>Correct: <span style='color:green'>${q.o[q.a]}</span></li>`;
  });
  reviewHtml += '</ol><button onclick="window.location=\'index.html\'" class="next-btn">Done</button>';
  resultDiv.innerHTML = reviewHtml;
}

// --- Leaderboard ---
function updateLeaderboard() {
  leaderboard.push({ score, date: new Date().toLocaleString() });
  leaderboard = leaderboard.sort((a,b) => b.score - a.score).slice(0,5);
  localStorage.setItem('quiz-leaderboard', JSON.stringify(leaderboard));
  leaderboardDiv.style.display = 'block';
  leaderboardDiv.innerHTML = '<b>Leaderboard</b><ol>' + leaderboard.map(l => `<li>${l.score} (${l.date})</li>`).join('') + '</ol>';
}

// --- Sound Effects ---
function playSound(type) {
  // Only play if soundOn is true
  if (!window.soundOn) return;
  let audio;
  if (type === 'correct') audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae6b2.mp3');
  if (type === 'wrong') audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae6b2.mp3');
  if (type === 'timeout') audio = new Audio('timeout.wav');
  if (type === 'beep') audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae6b2.mp3');
  if (type === 'timer') audio = new Audio('timer.wav');
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 1;
    // Try to play, catch errors (autoplay policy)
    audio.play().catch(()=>{});
  }
}

// --- Share Result ---
function shareResult() {
  const text = `I scored ${score} on Brain Quiz! Try to beat me!`;
  if (navigator.share) {
    navigator.share({ title: 'Brain Quiz', text, url: location.href });
  } else {
    prompt('Copy and share your score:', text);
  }
}

// --- Daily Challenge (simple version) ---
(function dailyChallenge() {
  // For demo, just show a message
  if (new Date().getDay() === 1) {
    alert('Today\'s Daily Challenge: Get a perfect score in any category!');
  }
})();

// --- User-Generated Questions (simple demo) ---
// You can expand this to allow users to submit questions and store them in localStorage

// --- Initialize ---
startQuiz();

if (backBtn) {
  backBtn.onclick = function() {
    if (current > 0) {
      current--;
      showQuestion();
      updateProgress();
    } else {
      if (confirm('Do you want to quit the quiz and go back to setup?')) {
        window.location = 'setup.html';
      }
      // If user clicks "No", do nothing and stay on the quiz
    }
  };
}

// --- Feature Stubs & Hooks ---
// 1. Question Review Mode
function showReview() {
  reviewMode = true;
  let reviewHtml = '<h2>Review Answers</h2><ol>';
  questions.forEach((q, i) => {
    reviewHtml += `<li><b>${q.q}</b><br>Your answer: <span style='color:${userAnswers[i]===q.a?'green':'red'}'>${q.o[userAnswers[i]]||'None'}</span><br>Correct: <span style='color:green'>${q.o[q.a]}</span></li>`;
  });
  reviewHtml += '</ol><button onclick="window.location=\'index.html\'" class="next-btn">Done</button>';
  resultDiv.innerHTML = reviewHtml;
}

// 2. Timer Customization
let customTimer = 30;
function setCustomTimer(val) { customTimer = val; }
// Add a timer select UI in setup.html for user to pick timer (not shown here)

// 3. Question Feedback
function sendFeedback(qIdx, type) {
  // Store feedback in localStorage or send to server
  alert('Feedback sent: ' + type + ' for question #' + (qIdx+1));
}
// Add feedback buttons in review mode

// 4. Achievements
let achievements = JSON.parse(localStorage.getItem('quiz-achievements')||'{}');
function unlockAchievement(name) {
  achievements[name] = true;
  localStorage.setItem('quiz-achievements', JSON.stringify(achievements));
  // Show badge animation
}
// Example: unlockAchievement('perfect-score');

// 5. Daily/Weekly Challenges
// Already has a daily challenge alert. Expand to weekly and show in UI.

// 6. User Avatars
let userAvatar = localStorage.getItem('quiz-avatar')||'';
function setAvatar(url) { userAvatar = url; localStorage.setItem('quiz-avatar', url); }
// Add avatar picker in setup.html

// 7. Sound & Music Settings
let soundOn = true, musicOn = false;
function toggleSound() { soundOn = !soundOn; }
function toggleMusic() { musicOn = !musicOn; /* play/pause bg music */ }
// Add toggles in UI

// 8. Question Packs
// Add logic to load different question packs (expand questionsDB)

// 9. Multiplayer Mode
function startMultiplayer() { alert('Multiplayer coming soon!'); }
// Add button in home/setup

// 10. Question of the Day
function showQOTD() {
  const allQs = Object.values(questionsDB).flatMap(cat=>Object.values(cat).flat());
  const q = allQs[new Date().getDate()%allQs.length];
  alert('Question of the Day: ' + q.q);
}
// Call on home page

// 11. Animated Transitions
function confetti() { /* Add confetti animation here */ }
// Call confetti() on perfect score

// 12. Accessibility
// Already has some ARIA roles. Expand for full accessibility.

// 13. Progress Tracking
function showStats() {
  let stats = JSON.parse(localStorage.getItem('quiz-stats')||'{}');
  alert('Questions answered: '+(stats.answered||0)+'\nBest streak: '+(stats.bestStreak||0));
}
// Update stats on each answer

// 14. Custom Quiz Builder
function openQuizBuilder() { alert('Custom quiz builder coming soon!'); }
// Add button in home/setup

// 15. Language Support
let lang = localStorage.getItem('quiz-lang')||'en';
function setLang(l) { lang = l; localStorage.setItem('quiz-lang', l); }
// Add language picker in UI

if (performance.navigation.type === 1) {
      window.location.href = 'index.html';
    }