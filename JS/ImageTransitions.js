let cards = [
    {"link":"https://gym-tips.herokuapp.com/", "image":"../images/GymWebsite.jpg", "title":"Workout-Planner Website", "text":"A website that contains Training advice for everyone, such as exercises for each body muscle, as well as a training routine split between 3 or 6 days per week."},
    {"link":"./TicTacToe.html", "image":"../images/TicTacToe.jpg", "title":"Tic Tac Toe Game", "text":"Tic Tac Toe Game Created Using Pygame in Python, Offers the option for 2 players game, also can play the computer which is an AI based on Minimax Algorithm"},
    {"link":"./Snake.html", "image":"../images/Snake.jpg", "title":"Snake Game", "text":"Snake Game also created with Pygame Library in Python. Standard snake games, eat fruit to get bigger, eat your tail and you die."},
    {"link":"./HeadSoccer.html", "image":"../images/HeadSoccer.jpg", "title":"Head Soccer for PC", "text":"The Head Soccer mobile game recreated on PC using Python's Pygame Library. Two player game, each player has to score 5 goals in the other player's net to win."},
    {"link":"./projects.html", "image":"../images/Anghami.jpg", "title":"Anghami Song Reviewer", "text":"Website Based on Anghami's public API that allows users to post comment about songs. Written in angular + ASP.net backend with SQL server database. (Stopped hosting because of costs but Reference available)"},
    {"link":"./projects.html", "image":"../images/instagram.jpg", "title":"Instagram Stats", "text":"Underway Project. Website that will show you your instagram statistics, such as who doesn't follow you back, who liked most of your posts, etc..."},
]

var counter = 0
function changeContent(){
    var anchorElement = document.querySelector(".centered a");
    var imageElement = document.querySelector(".centered a img");
    var titleElement = document.querySelector(".centered a .title");
    var textElement = document.querySelector(".centered a .text");

    anchorElement.href = cards[counter].link;
    imageElement.src = cards[counter].image;
    titleElement.innerHTML = cards[counter].title;
    textElement.innerHTML = cards[counter].text;
    
    counter += 1;
    if (counter >= cards.length){
        counter = 0;
    }
}

changeContent();
setInterval(changeContent, 5000);