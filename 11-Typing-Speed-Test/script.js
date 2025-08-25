// List of words for the typing game
const words = 'in one good real one not school set they state high life consider on and not come what also for set point can want as while with of order child about school thing never hold find order each too between program work end you home place around while place problem end begin interest while public or where see time those increase interest be give end think seem small as both another a child same eye you between way do who into again good fact than under very head become real possible some write know however late each that with because that place nation only for each change form consider we would interest with world so order or run more open that large write turn never over open each over change still old take hold need give by consider line only leave while what set up number part form want against great problem can because head so first this here would course become help year first end want both fact public long word down also long for without new turn against the because write seem line interest call not if line thing what work people way may old consider leave hold want life between most place may if go who need fact such program where which end off child down change to from people high during people find to however into small new general it do that could old for last get another hand much eye great no work and with but good there last think can around use like number never since world need what we around part show new come seem while some and since still small these you general which seem will place come order form how about just also they with state late use both early too lead general seem there point take general seem few out like might under if ask while such interest feel word right again how about system such between late want fact up problem stand new say move a lead small however large public out by eye here over so be way use like say people work for since interest so face order school good not most run problem group run she late other problem real form what just high no man do under would to each too end point give number child through so this large see get form also all those course to work during about he plan still so like down he look down where course at who plan way so since come against he all who at world because while so few last these mean take house who old way large no first too now off would in this course present order home public school back own little about he develop of do over help day house stand present another by few come that down last or use say take would each even govern play around back under some line think she even when from do real problem between long as there school do as mean to all on other good may from might call world thing life turn of he look last problem after get show want need thing old other during be again develop come from consider the now number say life interest to system only group world same state school one problem between for turn run at very against eye must go both still all a as so after play eye little be those should out after which these both much house become both school this he real and may mean time by real number other as feel at end ask plan come turn by all head increase he present increase use stand after see order lead than system here ask in of look point little too without each for both but right we come world much own set we right off long those stand go both but under now must real general then before with much those at no of we only back these person plan from run new as own take early just increase only look open follow get that on system the mean plan man over it possible if most late line would first without real hand say turn point small set at in system however to be home show new again come under because about show face child know person large program how over could thing from out world while nation stand part run have look what many system order some one program you great could write day do he any also where child late face eye run still again on by as call high the must by late little mean never another seem to leave because for day against public long number word about after much need open change also'.split(' ');

// Game settings
const totalWords = words.length;
const gameTimeInSeconds = 30;
const gameTimeInMilliseconds = gameTimeInSeconds * 1000;

// Game state variables
let gameTimer = null;
let gameStartTime = null;

// Helper function to add a CSS class to an element
function addCSSClass(element, className) {
    if (element) {
        element.className += ' ' + className;
    }
}

// Helper function to remove a CSS class from an element
function removeCSSClass(element, className) {
    if (element) {
        element.className = element.className.replace(className, '');
    }
}

// Function to get a random word from our word list
function getRandomWord() {
    const randomIndex = Math.ceil(Math.random() * totalWords);
    return words[randomIndex - 1];
}

// Function to convert a word into HTML with individual letter spans
function createWordHTML(word) {
    const letters = word.split('');
    const letterSpans = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
    return `<div class="word">${letterSpans}</div>`;
}

// Function to start a new game
function startNewGame() {
    // Stop any existing timer
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }

    // Reset game variables
    gameStartTime = null;

    // Remove game over styling
    const gameElement = document.getElementById('game');
    removeCSSClass(gameElement, 'over');

    // Clear and reset the words container
    const wordsContainer = document.getElementById('words');
    wordsContainer.innerHTML = '';
    wordsContainer.style.marginTop = '0px';

    // Generate 200 random words for the game
    for (let i = 0; i < 200; i++) {
        const randomWord = getRandomWord();
        wordsContainer.innerHTML += createWordHTML(randomWord);
    }

    // Mark the first word and first letter as current
    const firstWord = document.querySelector('.word');
    const firstLetter = document.querySelector('.letter');
    addCSSClass(firstWord, 'current');
    addCSSClass(firstLetter, 'current');

    // Display initial countdown time
    const infoDisplay = document.getElementById('info');
    infoDisplay.innerHTML = gameTimeInSeconds + '';

    // Position the cursor correctly
    updateCursorPosition();

    // Focus the game area so it can receive keyboard input
    gameElement.focus();
}

// Function to update the cursor position based on current letter/word
function updateCursorPosition() {
    const currentLetter = document.querySelector('.letter.current');
    const currentWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');

    if (cursor && (currentLetter || currentWord)) {
        // Get the position of the current element
        const targetElement = currentLetter || currentWord;
        const elementPosition = targetElement.getBoundingClientRect();

        // Position cursor at the current letter or at the end of current word
        cursor.style.top = (elementPosition.top + 2) + 'px';
        cursor.style.left = (currentLetter ? elementPosition.left : elementPosition.right) + 'px';
    }
}

// Function to calculate Words Per Minute (WPM)
function calculateWPM() {
    const allWords = [...document.querySelectorAll('.word')];
    const currentWord = document.querySelector('.word.current');
    const currentWordIndex = allWords.indexOf(currentWord) + 1;

    // Get all words that have been typed
    const typedWords = allWords.slice(0, currentWordIndex);

    // Count correctly typed words (no incorrect letters, all letters correct)
    const correctWords = typedWords.filter(word => {
        const letters = [...word.children];
        const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
        const correctLetters = letters.filter(letter => letter.className.includes('correct'));

        // Word is correct if no incorrect letters and all letters are marked correct
        return incorrectLetters.length === 0 && correctLetters.length === letters.length;
    });

    // Calculate WPM: (correct words / game time in minutes)
    const wpm = Math.round(correctWords.length / gameTimeInMilliseconds * 60000);
    return wpm;
}

// Function to end the game
function endGame() {
    // Stop the timer
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }

    // Add game over styling
    const gameElement = document.getElementById('game');
    addCSSClass(gameElement, 'over');

    // Display final WPM score
    const finalWPM = calculateWPM();
    const infoDisplay = document.getElementById('info');
    infoDisplay.innerHTML = `WPM: ${finalWPM}`;
}

// Main keyboard event handler
document.getElementById('game').addEventListener('keyup', function (event) {
    const keyPressed = event.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expectedCharacter = currentLetter?.innerHTML || ' ';

    // Check what type of key was pressed
    const isRegularLetter = keyPressed.length === 1 && keyPressed !== ' ';
    const isSpaceBar = keyPressed === ' ';
    const isBackspace = keyPressed === 'Backspace';
    const isFirstLetterOfWord = currentLetter === currentWord?.firstChild;

    // Don't do anything if game is over
    if (document.querySelector('#game.over')) {
        return;
    }

    // Start the timer when user types first letter
    if (!gameTimer && isRegularLetter) {
        gameTimer = setInterval(function () {
            // Set start time on first timer tick
            if (!gameStartTime) {
                gameStartTime = new Date().getTime();
            }

            // Calculate time elapsed and time remaining
            const currentTime = new Date().getTime();
            const timeElapsed = currentTime - gameStartTime;
            const secondsElapsed = Math.round(timeElapsed / 1000);
            const secondsRemaining = Math.round(gameTimeInSeconds - secondsElapsed);

            // End game when time runs out
            if (secondsRemaining <= 0) {
                endGame();
                return;
            }

            // Update countdown display
            document.getElementById('info').innerHTML = secondsRemaining + '';
        }, 1000); // Update every second
    }

    // Handle typing regular letters
    if (isRegularLetter) {
        if (currentLetter) {
            // Mark letter as correct or incorrect
            const isCorrect = keyPressed === expectedCharacter;
            addCSSClass(currentLetter, isCorrect ? 'correct' : 'incorrect');
            removeCSSClass(currentLetter, 'current');

            // Move to next letter
            if (currentLetter.nextSibling) {
                addCSSClass(currentLetter.nextSibling, 'current');
            }
        } else {
            // Typed extra letter beyond word length
            const extraLetter = document.createElement('span');
            extraLetter.innerHTML = keyPressed;
            extraLetter.className = 'letter incorrect extra';
            currentWord.appendChild(extraLetter);
        }
    }

    // Handle space bar (move to next word)
    if (isSpaceBar) {
        // If not at end of word, mark remaining letters as incorrect
        if (expectedCharacter !== ' ') {
            const remainingLetters = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
            remainingLetters.forEach(letter => {
                addCSSClass(letter, 'incorrect');
            });
        }

        // Move to next word
        removeCSSClass(currentWord, 'current');
        if (currentWord.nextSibling) {
            addCSSClass(currentWord.nextSibling, 'current');

            // Remove current from old letter and add to first letter of new word
            if (currentLetter) {
                removeCSSClass(currentLetter, 'current');
            }
            addCSSClass(currentWord.nextSibling.firstChild, 'current');
        }
    }

    // Handle backspace
    if (isBackspace) {
        // If at beginning of word and there's a previous word, go back to it
        if (currentLetter && isFirstLetterOfWord && currentWord.previousSibling) {
            removeCSSClass(currentWord, 'current');
            addCSSClass(currentWord.previousSibling, 'current');
            removeCSSClass(currentLetter, 'current');

            const lastLetterOfPreviousWord = currentWord.previousSibling.lastChild;
            addCSSClass(lastLetterOfPreviousWord, 'current');
            removeCSSClass(lastLetterOfPreviousWord, 'incorrect');
            removeCSSClass(lastLetterOfPreviousWord, 'correct');
        }
        // If not at first letter, go back one letter
        else if (currentLetter && !isFirstLetterOfWord) {
            removeCSSClass(currentLetter, 'current');
            addCSSClass(currentLetter.previousSibling, 'current');
            removeCSSClass(currentLetter.previousSibling, 'incorrect');
            removeCSSClass(currentLetter.previousSibling, 'correct');
        }
        // If at end of word (no current letter), go back to last letter
        else if (!currentLetter && currentWord.lastChild) {
            addCSSClass(currentWord.lastChild, 'current');
            removeCSSClass(currentWord.lastChild, 'incorrect');
            removeCSSClass(currentWord.lastChild, 'correct');
        }
    }

    // Scroll words up when current word goes too low
    const updatedCurrentWord = document.querySelector('.word.current');
    if (updatedCurrentWord && updatedCurrentWord.getBoundingClientRect().top > 250) {
        const wordsContainer = document.getElementById('words');
        const currentMargin = parseInt(wordsContainer.style.marginTop || '0px');
        wordsContainer.style.marginTop = (currentMargin - 35) + 'px';
    }

    // Update cursor position after any changes
    updateCursorPosition();
});

// Handle new game button click
document.getElementById('newGameBtn').addEventListener('click', function () {
    startNewGame();
});

// Start the first game when page loads
startNewGame();