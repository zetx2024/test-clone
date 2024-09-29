const quizData = [
    {
        question: "চর্যাপদ কোথা থেকে আবিষ্কৃত হয়েছে?",
        type: "choice", // Answer type (choice or input)
        choices: ["তিব্বত", "বাংলাদেশ", "নেপাল", "ভারত"],
        correctAnswer: 2, // Index of correct answer in choices array
        explanation: "চর্যাপদ বাংলা ভাষার প্রাচীনতম পদ সংকলন তথা সাহিত্য নিদর্শন। নব্য ভারতীয় আর্যভাষারও প্রাচীনতর রচনা এটি। খ্রিষ্টীয় অষ্টম থেকে দ্বাদশ শতাব্দীর মধ্যবর্তী সময়ে রচিত এই গীতিপদাবলির রচয়িতারা ছিলেন সহজিয়া বৌদ্ধ সিদ্ধাচার্যগণ। বৌদ্ধ ধর্মের গূঢ় অর্থ সাংকেতিক রূপের আশ্রয়ে ব্যাখ্যার উদ্দেশ্যেই তাঁরা পদগুলো রচনা করেছিলেন। বাংলা সাধন সংগীত শাখাটির সূত্রপাতও হয়েছিলো এই চর্যাপদ থেকেই। সে বিবেচনায় এটি একটি ধর্মগ্রন্থজাতীয় রচনা। একই সঙ্গে সমকালীন বাংলার সামাজিক ও প্রাকৃতিক চিত্রাবলি এই পদগুলোতে উজ্জ্বল। এর সাহিত্যগুণ এখনও চিত্তাকর্ষক। ১৯০৭ খ্রিস্টাব্দে মহামহোপাধ্যায় হরপ্রসাদ শাস্ত্রী, নেপালের রাজদরবারের গ্রন্থশালা থেকে চর্যার একটি খণ্ডিত পুঁথি উদ্ধার করেন। পরবর্তীতে আচার্য সুনীতিকুমার চট্টোপাধ্যায় ভাষাতাত্ত্বিক বিশ্লেষণের মাধ্যমে চর্যাপদের সঙ্গে বাংলা ভাষার অনস্বীকার্য যোগসূত্র বৈজ্ঞানিক যুক্তিসহ প্রতিষ্ঠিত করেন। চর্যাপদের প্রধান কবিগণ হলেন লুইপাদ, কাহ্নপাদ, ভুসুকুপাদ, শবরপাদ প্রমুখ।",
        score: 1 // Score for this question
    },
    {
        question: "বাংলা ভাষায় শব্দের শ্রেণিবিভাগ কয় প্রকার?",
        type: "choice",
        choices: ["৫ প্রকার", "৪ প্রকার", "৩ প্রকার", "২ প্রকার"],
        correctAnswer: 1,
        explanation: "বাংলা ভাষায় শব্দের শ্রেণীবিভাগ ৩ প্রকার। যথা : গঠনমূলক , অর্থমূলক এবং উৎপত্তিমূলক শ্রেণীবিভাগ। উৎপত্তিমূলক হলো ৫ প্রকার, গঠনমূলক হলো ২ প্রকার এবং অর্থমূলক হলো ৩ প্রকার।",
        score: 1
    },
    {
        question: "শর্মিলী রবীন্দ্রনাথ ঠাকুর রচিত কোন উপন্যাসের নায়িকা?",
        type: "choice",
        choices: ["দুইবোন", "মালঞ্চ", "শেষের কবিতা", "বউ-ঠাকুরানীর হাট"],
        correctAnswer: 0,
        explanation: "শর্মিলী রবীন্দ্রনাথ ঠাকুর রচিত দুইবোন উপন্যাসের নায়িকা । রবীন্দ্রনাথের চোখে নারী যেমন সবসময় অনন্য মর্যাদায় উন্নীত, তেমনি তাঁর সূক্ষ্ম পর্যবেক্ষনশীল দৃষ্টিশক্তিও নারীকে বিচার করেছে নিজস্ব মহিমায়; দুই বোন উপন্যাসটিতে তারই প্রতিফলন সুস্পষ্ট। লেখক নারীকে বর্ণনা করতে গিয়ে বলেছেন যে নারী জাতি দুপ্রকারের - এক হল মায়ের জাত আর অপরটি প্রিয়ার জাত। শর্মিলা আর ঊর্মিমালা কে নিয়ে উপন্যাসের কাহিনী আবর্তিত হয়েছে। ঋতুর সাথেও নারীকে তুলনা করে লেখক বলেছেন যে যে মায়ের জাত সে হল বর্ষা ঋতু আর প্রিয়ার জাত হল বসন্ত ঋতু। পারিবারিক আধারে আপন মনঃস্তত্ব জাহির করেছেন লেখক।",
        score: 1
    },
    {
        question: " তত্ত্ববোধিনী পত্রিকার সম্পাদক ছিলেন -----",
        type: "choice",
        choices: ["ঈশ্বরচন্দ্র গুপ্ত", "অক্ষয়কুমার দত্ত", "বঙ্কিমচন্দ্র চট্রোপাধ্যায়", "প্যারিচাঁদ মিত্র"],
        correctAnswer: 1,
        explanation: "সাহিত্য , বিজ্ঞান , দর্শন , ইতিহাস, রাজনীতি, সামাজিক ও অর্থনৈতিক সমস্যা ইত্যাদি বিষয় নিয়ে ১৮৪৩ সালে 'তত্ত্ববোধিনী' পত্রিকাটি যাত্রা শুরু করে। তখন পত্রিকার সম্পাদনা করতেন অক্ষয়কুমার দত্ত। অন্যদিকে ঈশ্বরচন্দ্র গুপ্তের সম্পাদনায় 'সংবাদ প্রভাকর' (১৮৩১) ও ' সংবাদ রত্নবলী (১৮৩২) এবং বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের সম্পাদনায় 'বঙ্গদর্শন' (১৮৭২) পত্রিকা প্রকাশিত হয়।",
        score: 1
    },
    {
        question: "জীবনানন্দ দাশের প্রবন্ধগ্রন্থ কোনটি?",
        type: "choice",
        choices: ["ধূসর পাণ্ডুলিপি", "কবিতার কথা", "দুর্দিনের যাত্রী", "ঝরা পালকের কবি"],
        correctAnswer: 1,
        explanation: "তিমির হননের কবি জীবনানন্দ দাশ (১৮৯৯ - ১৯৫৪) - এর প্রবন্ধগ্রন্থ 'কবিতার কথা' (১৯৫৪)। তার রচিত কাব্যগ্রন্থ: 'ঝরাপালক' (১৯২৭), 'ধূসর পাণ্ডুলিপি' (১৯৩৬), 'বনলতা সেন ' (১৯৪২) , সাতটি তারার তিমির ' (১৯৪৮) , 'রুপালী বাংলা' (১৯৫৭)। উপন্যাস : 'মাল্যবান' (১৯৭৩) , 'সতীর্থ (১৯৭৪) । 'দুর্দিনের যাত্রী' (১৯২২) এবং 'যুগবাণী' (১৯২৬) কাজী নজরুল ইসলাম রচিত প্রবন্ধ গ্রন্থ।",
        score: 1
    },
    {
        question: "'আবদুল্লাহ' উপন্যাসের রচয়িতা কে?",
        type: "choice",
        choices: ["মোহাম্মদ নজীবর রহমান", "কাজী ইমদাদুল হক", "শেখ ফজলুল করিম", "মমতাজ উদ্দিন আহম্মেদ"],
        correctAnswer: 1,
        explanation: "মুসলিম মধ্যবিত্ত সমাজের নানা দোষত্রুটি কাজী ইমদাদুল হক তার 'আবদুল্লাহ' (১৯৩৩) উপন্যাসে দক্ষতার সাথে তুলে ধরেন। তবে তিনি উপন্যাসটির ৩০ টি পরিচ্ছেদ সমাপ্ত করেছিলেন । বাকি ১১ টি পরিচ্ছেদ তার মৃত্যুর পর শিক্ষাবিদ আনোয়ারুল কাদির তার খসড়া অনুসরণ করে রচনা করেন।",
        score: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        type: "choice",
        choices: ["Earth", "Venus", "Jupiter", "Mars"],
        correctAnswer: 2,
        explanation: "Jupiter is the largest planet in our solar system.",
        score: 1
    },
    {
        question: "What is the capital of Italy?",
        type: "input",
        correctAnswer: "Rome", // Correct answer for input type
        explanation: "Rome is the capital of Italy.",
        score: 1
    },
    {
        question: "Solve the equation: $$x^2 + 3x - 4 = 0$$",
        type: "choice",
        choices: ["$$x = -4, 1$$", "$$x = -1, 4$$", "$$x = -2, 2$$", "$$x = -3, 3$$"],
        correctAnswer: 2, // Index of correct answer in choices array
        explanation: "The roots of the equation are $$x = -4$$ and $$x = 1$$.",
        score: 1
    }
];

const questionsContainer = document.getElementById('questions-container');
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit');
const timerElement = document.getElementById('time');
const timerElements = document.getElementById('timer');
const scoreReportElement = document.getElementById('score-report');

let score = 0;
let timeLeft = 180; // 3 minutes in seconds
let timer;

const minusMarking = 0.5; // Points to deduct for each incorrect answer

function displayQuestions() {
    quizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `

         <div class="ad-container">
                <!-- Google Ads -->
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7066409508007262"
     crossorigin="anonymous"></script>
<!-- fill-new-ads21232 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7066409508007262"
     data-ad-slot="3440482132"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            </div>

            <div class="question">
    <h3>${index + 1}. ${questionData.question}</h3>
    ${questionData.type === "choice" ? `
        <div class="choices">
            ${questionData.choices.map((choice, choiceIndex) => `
                <label>
                    <input type="radio" name="question${index}" value="${choiceIndex}">
                    ${choice}
                </label>
            `).join('')}
        </div>` 
    : `
        <input type="text" name="question${index}" placeholder="Your answer">`
    }
</div>
        `;
        questionsContainer.appendChild(questionDiv);
    });


}

function calculateScore() {
    score = 0;
    quizData.forEach((questionData, index) => {
        const selectedAnswer = quizForm.elements[`question${index}`].value;
        if (selectedAnswer === questionData.correctAnswer.toString()) {
            score++;
        } else if (selectedAnswer !== "") {
            score -= minusMarking; // Subtract points for incorrect answer
        }
    });
}

function calculateScore() {
    score = 0;
    quizData.forEach((questionData, index) => {
        const userAnswer = quizForm.elements[`question${index}`].value.trim(); // Trim whitespace from user input
        if (questionData.type === "choice") {
            const selectedAnswer = quizForm.elements[`question${index}`].value;
            if (selectedAnswer === questionData.correctAnswer.toString()) {
                score += questionData.score;
            } else if (selectedAnswer !== "") {
            score -= minusMarking; // Subtract points for incorrect answer
        }
        } else if (questionData.type === "input") {
            if (userAnswer.toLowerCase() === questionData.correctAnswer.toLowerCase()) { // Case-insensitive comparison
                score += questionData.score;
            } else if (userAnswer.toLowerCase() !== "") {
            score -= minusMarking; // Subtract points for incorrect answer
        }
        }
    });
}

function markAnswers() {
    quizData.forEach((questionData, index) => {
        const selectedAnswer = quizForm.elements[`question${index}`].value;
        const choices = questionsContainer.querySelectorAll(`input[name="question${index}"]`);
        choices.forEach((choice, choiceIndex) => {
            const parentLabel = choice.parentElement;
            if (choiceIndex === parseInt(selectedAnswer)) {
                parentLabel.classList.add('selected');
                if (selectedAnswer !== questionData.correctAnswer.toString()) {
                    parentLabel.classList.add('wrong');
                }
            } else if (choiceIndex === questionData.correctAnswer) {
                parentLabel.classList.add('correct');
            }
        });
    });
}

function updateTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function countdown() {
    updateTime();
    if (timeLeft > 0) {
        timeLeft--;
        timer = setTimeout(countdown, 1000);
    } else {
        quizForm.removeEventListener('submit', handleSubmit);
        showResult();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    clearTimeout(timer);
    calculateScore();
    markAnswers();
    showScoreReport();
}



function showScoreReport() {
     submitButton.style.display = 'none';
     timerElements.style.display = 'none';
    const timeTaken = 180 - timeLeft;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    let timeTakenStr = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    if (seconds > 0) {
        timeTakenStr += ` ${seconds} second${seconds !== 1 ? 's' : ''}`;
    }

    let reportHTML = `<h2>Score Report</h2>`;
    reportHTML += `<p>Your score is <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>`;
    reportHTML += `<p>Time taken: <strong>${timeTakenStr}</strong>.</p>`;
     reportHTML += '<h2>Answer Explanations</h2>';

    quizData.forEach((questionData, index) => {
        reportHTML += `<p><strong>${index + 1}. ${questionData.question}</strong><br>`;
        reportHTML += `${questionData.explanation}</p>`;
    });
    

    scoreReportElement.innerHTML = reportHTML;
     MathJax.typeset();

}

quizForm.addEventListener('submit', handleSubmit);

displayQuestions();
countdown();

// Disable right-click
        window.addEventListener('contextmenu', function (e) { 
            e.preventDefault(); 
        }, false);

        // Disable inspecting elements
        document.onkeydown = function(e) {
            if (e.ctrlKey && 
               (e.keyCode === 67 || 
                e.keyCode === 86 || 
                e.keyCode === 85 || 
                e.keyCode === 117)) {
                return false;
            } else {
                return true;
            }
        };

         // Disable copy function
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            alert('Copying content is disabled.');
        });