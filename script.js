let Q = document.getElementById("Q")
let btnOne = document.getElementById("btnOne")
let btnTwo = document.getElementById("btnTwo")
let begin = document.getElementById("begin")
let image = document.getElementById("beginImage")
let questionNo = -1

begin.addEventListener("click", ()=> {
    document.getElementById("beginHeading").style.display = "none"
    document.getElementById("beginImage").setAttribute("src", `${images[0]}`)
    document.getElementById("begin").style.display = "none"
    document.getElementById("Q").style.display = "block"
    document.getElementById("btnOne").style.display = "block"
    document.getElementById("btnTwo").style.display = "block"
    questionNo++;
    Q.innerText = question[0]
    btnOne.innerText = optionOne[0]
    btnTwo.innerText = optionTwo[0]
})

question = [
    "Question No 1: do you like cats or dogs?",
    "Question No 2: Do you like movies or web series?",
    "Question No 3: Do you prefer animated movies/series or live action?",
    "Question No 4: Messi or Ronaldo",
    "Question No 5: Red Sause Pasta or White Sause Pasta",
    "Question No 6: Do you like playing video games or reading books?",
    "Question No 7: Do you prefer coffee or tea?",
    "Question No 8: Do you like going to the beach or the mountains?",
    "Question No 9: Do you prefer listening to music or podcasts?",
    "Question No 10: Do you like trying new foods or sticking to what you know?",
    "Question No 11: Do you prefer watching comedy or action movies?",
    "Question No 12: Do you like playing sports or watching them?",
    "Question No 13: Do you prefer reading fiction or non-fiction books?",
    "Question No 14: Do you like going to concerts or music festivals?",
    "Question No 15: Do you prefer taking naps or staying up late?"
]

optionOne = [
    "Cats",
    "Movies",
    "Animated",
    "Messi",
    "Red Sause Pasta",
    "Video Games",
    "Coffee",
    "Beach",
    "Music",
    "Trying new foods",
    "Comedy",
    "Playing sports",
    "Fiction",
    "Concerts",
    "Naps"
]

optionTwo = [
    "Dogs",
    "Web Series",
    "Live Action",
    "Ronaldo",
    "White Sause Pasta",
    "Reading books",
    "Tea",
    "Mountains",
    "Podcasts",
    "Sticking to what you know",
    "Action",
    "Watching sports",
    "Non-fiction",
    "Music festivals",
    "Staying up late"
]

images = [
    "catDog.png",
    "series.png",
    "anime.png",
    "goats.png",
    "pasta.png",
    "gaming.png",
    "coffee.png",
    "beach.png",
    "music.png",
    "food.png",
    "comedy.png",
    "sports.png",
    "books.png",
    "concert.png",
    "sleep.png"
]

function gamePrank() {
    questionNo++
    Q.innerText = question[questionNo]
    btnOne.innerText = optionOne[questionNo]
    btnTwo.innerText = optionTwo[questionNo]
    image.setAttribute("src", `${images[questionNo]}`)
    console.log(questionNo)
    if (questionNo === 15) {
        document.getElementById("rickroll").style.display = "block"
        document.getElementById("video").setAttribute("src", "video.mp4")
        document.getElementById("beginFather").style.display = "none"
        Q.style.display = "none"
        btnOne.style.display = "none"
        btnTwo.style.display = "none"
    }
}

btnOne.addEventListener("click", gamePrank)
btnTwo.addEventListener("click", gamePrank)