// =========================
// ABOUT MODAL
// =========================

const aboutButton = document.getElementById("about-btn");
const aboutModal = document.getElementById("about-modal");
const aboutClose = document.getElementById("about-close");


// Open About modal
aboutButton.addEventListener("click", () => {
    aboutModal.classList.add("active");
});


// Close About modal using X
aboutClose.addEventListener("click", () => {
    aboutModal.classList.remove("active");
});


// Close About modal by clicking outside
aboutModal.addEventListener("click", (event) => {

    if (event.target === aboutModal) {
        aboutModal.classList.remove("active");
    }

});


// =========================
// DISCLAIMER MODAL
// =========================

const startButton = document.getElementById("start-btn");
const disclaimerModal = document.getElementById("disclaimer-modal");
const disclaimerClose = document.getElementById("disclaimer-close");
const beginAssessment = document.getElementById("begin-assessment");


// Open Disclaimer modal
startButton.addEventListener("click", () => {
    disclaimerModal.classList.add("active");
});


// Close Disclaimer modal using X
disclaimerClose.addEventListener("click", () => {
    disclaimerModal.classList.remove("active");
});


// Close Disclaimer modal by clicking outside
disclaimerModal.addEventListener("click", (event) => {

    if (event.target === disclaimerModal) {
        disclaimerModal.classList.remove("active");
    }

});


// Begin Assessment
// =========================
// ASSESSMENT
// =========================

const landingPage = document.getElementById("landing-page");
const assessmentPage = document.getElementById("assessment-page");

const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");

const questionText = document.getElementById("question-text");
const answerGrid = document.getElementById("answer-grid");


// ==========================================
// ASSESSMENT INITIALIZATION
// ==========================================

// Create a shuffled copy of the real question bank.
const shuffledQuestions = getShuffledQuestions(assessmentQuestions);

// Initialize the assessment and scoring systems.
const assessment = new AssessmentSystem(shuffledQuestions);

const scoring = new ScoringSystem(
    assessmentQuestions,
    assessmentCategories.map(category => category.id)
);

let currentQuestion = 0;
let assessmentResults = null;
let isAnswerLocked = false;


// Begin assessment
beginAssessment.addEventListener("click", () => {

    disclaimerModal.classList.remove("active");

    assessment.reset();

    currentQuestion = 0;

    landingPage.classList.add("page-exit");

    setTimeout(() => {

        landingPage.style.display = "none";

        assessmentPage.classList.add("active");

        showQuestion(0);

    }, 300);

});


// ==========================================
// DISPLAY QUESTION
// ==========================================

function showQuestion(index) {
    const question = shuffledQuestions[index];

    if (!question) {
        console.error("Question not found at index:", index);
        return;
    }

    currentQuestion = index;

    // Update question counter
    questionNumber.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(shuffledQuestions.length).padStart(2, "0")}`;

    // Update progress bar
    progressBar.style.width =
        `${((index + 1) / shuffledQuestions.length) * 100}%`;

    // Display question text
    questionText.textContent = question.question;

    // Get the answer buttons
    const answerButtons =
        answerGrid.querySelectorAll(".answer-option");

    answerButtons.forEach((button, optionIndex) => {
        const option = question.options[optionIndex];

        if (option) {
            // Real questions store answer text inside option.text
            button.textContent = option.text;
            button.style.display = "";
            button.disabled = false;
            button.classList.remove("selected");
        } else {
            // Hide any unused answer buttons
            button.textContent = "";
            button.style.display = "none";
        }
    });

    // Allow the user to answer this question
    isAnswerLocked = false;

    // Attach answer handlers
    answerButtons.forEach((button, optionIndex) => {
        button.onclick = () => {
            if (isAnswerLocked) {
                return;
            }

            if (!question.options[optionIndex]) {
                return;
            }

            selectAnswer(button);
        };
    });
}

// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(selectedButton) {
    // Prevent multiple selections during the transition
    if (isAnswerLocked) {
        return;
    }

    isAnswerLocked = true;

    const answerButtons =
        answerGrid.querySelectorAll(".answer-option");

    // Highlight the selected answer and disable all buttons
    answerButtons.forEach(button => {
        button.classList.remove("selected");
        button.disabled = true;
    });

    selectedButton.classList.add("selected");

    // Find the selected answer's index
    const selectedOptionIndex =
        Array.from(answerButtons).indexOf(selectedButton);

    // Record the answer in the assessment system
    const answerRecorded =
        assessment.recordAnswer(selectedOptionIndex);

    if (!answerRecorded) {
        console.error("Could not record the selected answer.");

        answerButtons.forEach(button => {
            button.disabled = false;
        });

        isAnswerLocked = false;
        return;
    }

    // Allow time for the selection animation
    setTimeout(() => {
        if (currentQuestion < shuffledQuestions.length - 1) {
            // Move to the next question
            assessment.moveToNextQuestion();

            transitionToNextQuestion();
        } else {
            // Confirm that every question was answered
            if (!assessment.isComplete()) {
                console.error(
                    "Assessment is incomplete. Results cannot be calculated."
                );

                answerButtons.forEach(button => {
                    button.disabled = false;
                });

                isAnswerLocked = false;
                return;
            }

            // Calculate scores for all tendencies
const calculation = scoring.calculate(
    assessment.getResponses()
);

// Generate the user's result profile
assessmentResults = generateResultProfile(calculation);

// Display the processing screen, followed by the real result
showProcessingScreen(assessmentResults);
        }
    }, 350);
}


function transitionToNextQuestion() {

    questionText.classList.add("question-exit");
    answerGrid.classList.add("question-exit");


    setTimeout(() => {

        showQuestion(currentQuestion + 1);

        questionText.classList.remove("question-exit");
        answerGrid.classList.remove("question-exit");

        questionText.classList.add("question-enter");
        answerGrid.classList.add("question-enter");


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                questionText.classList.remove("question-enter");
                answerGrid.classList.remove("question-enter");

            });

        });

    }, 250);

}

// ==========================================
// RENDER RESULT
// Displays the result title, score breakdown,
// and individual tendency explanations.
// ==========================================

function renderResult(result) {
    const resultTitle = document.getElementById("result-title");
    const resultDescription = document.getElementById("result-description");
    const resultScores = document.getElementById("result-scores");

    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;

    // Render score bars for all categories.
    resultScores.innerHTML = "";

    result.scores.forEach(score => {
        const scoreItem = document.createElement("div");
        scoreItem.className = "result-score-item";

        scoreItem.innerHTML = `
            <div class="result-score-header">
                <span class="result-score-label"></span>
                <span class="result-score-value">${score.value}%</span>
            </div>
            <div class="result-score-track">
                <div class="result-score-fill" style="width: 0%"></div>
            </div>
        `;

        scoreItem.querySelector(".result-score-label").textContent =
            score.label;

        resultScores.appendChild(scoreItem);

        requestAnimationFrame(() => {
            const fill = scoreItem.querySelector(".result-score-fill");
            fill.style.width = `${score.value}%`;
        });
    });

    // Render individual explanations for qualifying tendencies.
    let explanationContainer =
        document.getElementById("tendency-explanations");

    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "tendency-explanations";

        resultDescription.insertAdjacentElement(
            "afterend",
            explanationContainer
        );
    }

    explanationContainer.innerHTML = "";

    result.qualifyingTendencies.forEach(tendency => {
        const section = document.createElement("section");
        section.className = "tendency-explanation";

        const heading = document.createElement("h3");
heading.textContent = `${tendency.archetypeTitle} — ${tendency.label}`;

        const scoreLabel = document.createElement("p");
        scoreLabel.className = "tendency-explanation-score";
        scoreLabel.textContent = `Score: ${tendency.value}%`;

        const explanation = document.createElement("p");
        explanation.textContent = tendency.description;

        section.appendChild(heading);
        section.appendChild(scoreLabel);
        section.appendChild(explanation);

        explanationContainer.appendChild(section);
    });

    // Show the results page.
    const resultPage = document.getElementById("result-page");
    resultPage.classList.add("active");
}

// ==========================================
// GENERATE RESULT PROFILE
// Determines the result title, introduction,
// qualifying tendencies, and score breakdown.
// ==========================================

function generateResultProfile(calculation) {
    const scores = assessmentCategories.map(category => ({
    id: category.id,
    label: category.name,
    profile: category.profile,
    value: calculation.percentages[category.id] ?? 0,
    description: archetypeExplanations[category.id].description,
    archetypeTitle: archetypeExplanations[category.id].title
}));

    // Sort categories from highest to lowest score.
    scores.sort((a, b) => b.value - a.value);

    // Select tendencies that qualify for detailed explanations.
    const highTendencies = scores.filter(score => score.value >= 80);

    const moderateTendencies = scores.filter(
        score => score.value >= 60 && score.value < 80
    );

    let title;
    let description;
    let qualifyingTendencies;
    let resultLevel;

    if (highTendencies.length > 0) {
        // At least one category scored 80% or higher.
        resultLevel = "high";
        qualifyingTendencies = highTendencies;

        title = highTendencies.length === 1
            ? highTendencies[0].profile.toUpperCase()
           : "MULTIPLE HIGH-SCORING TENDENCIES";

        description =
            highTendencies.length === 1
                ? `Your responses show a high score in ${highTendencies[0].label}.`
                : `Your responses show high scores in ${highTendencies.length} tendencies: ` +
                  highTendencies.map(item => item.label).join(", ") + ".";
    } else if (moderateTendencies.length > 0) {
        // No high scores, but at least one category scored 60–79%.
        resultLevel = "moderate";
        qualifyingTendencies = moderateTendencies;

        title = moderateTendencies.length === 1
            ? "A MODERATE TENDENCY"
            : "MODERATE-SCORING TENDENCIES";

        description =
            moderateTendencies.length === 1
                ? `Your responses show a moderate score in ${moderateTendencies[0].label}.`
                : `Your responses show moderate scores in ${moderateTendencies.length} tendencies: ` +
                  moderateTendencies.map(item => item.label).join(", ") + ".";
    } else {
        // No category reached 60%.
        resultLevel = "below-threshold";
        qualifyingTendencies = [];

        title = "NO CLEARLY HIGH-SCORING TENDENCY";

        description =
            "None of your categories reached the threshold for a high or " +
            "moderate score. This does not necessarily mean you lack these " +
            "tendencies; your responses simply did not reach the selected " +
            "scoring thresholds.";
    }

    return {
        title,
        description,
        resultLevel,

       qualifyingTendencies: qualifyingTendencies.map(tendency => ({
    id: tendency.id,
    label: tendency.label,
    profile: tendency.profile,
    archetypeTitle: tendency.archetypeTitle,
    value: tendency.value,
    description: tendency.description
})),

        scores: scores.map(score => ({
            label: score.label,
            value: score.value
        }))
    };
}

// ==========================================
// RESULT PROCESSING
// ==========================================

function showProcessingScreen(result) {

    const assessmentPage =
        document.getElementById("assessment-page");

    const processingPage =
        document.getElementById("processing-page");

    const resultPage =
        document.getElementById("result-page");


    if (
        !assessmentPage ||
        !processingPage ||
        !resultPage
    ) {
        return;
    }


    // Hide assessment
    assessmentPage.classList.remove("active");


    // Make sure result is hidden
    resultPage.classList.remove("active");


    // Show processing screen
    processingPage.classList.add("active");


    // Give the processing screen time to appear
    // before displaying the result.
    setTimeout(function () {

        processingPage.classList.remove("active");

        renderResult(result);

    }, 800);

}

// ==========================================
// RETAKE ASSESSMENT
// ==========================================

const retakeButton = document.getElementById("retake-btn");

if (retakeButton) {
    retakeButton.addEventListener("click", function () {
        const resultPage = document.getElementById("result-page");
        const processingPage = document.getElementById("processing-page");

        // Hide the result and processing screens
        resultPage.classList.remove("active");
        processingPage.classList.remove("active");

        // Reset assessment data
        assessment.reset();
        assessmentResults = null;
        currentQuestion = 0;
        isAnswerLocked = false;

        // Remove question transition animations
        questionText.classList.remove("question-exit");
        questionText.classList.remove("question-enter");

        answerGrid.classList.remove("question-exit");
        answerGrid.classList.remove("question-enter");

        // Reset answer buttons
        answerGrid.querySelectorAll(".answer-option").forEach(button => {
            button.classList.remove("selected");
            button.disabled = false;
        });

        // Reset progress display
        progressBar.style.width = "0%";
        questionNumber.textContent =
            `01 / ${String(shuffledQuestions.length).padStart(2, "0")}`;

        // Return to the landing page
        landingPage.style.display = "";
        landingPage.classList.remove("page-exit");

        // Hide the assessment screen
        assessmentPage.classList.remove("active");
    });
}

// ==========================================
// SHARE RESULT
// ==========================================

const shareButton =
    document.getElementById("share-btn");


if (shareButton) {

    shareButton.addEventListener(
        "click",
        async function () {

            const resultCard =
                document.getElementById("result-card");


            if (!resultCard) {
                return;
            }


            // Prevent multiple captures at once
            shareButton.disabled = true;
            shareButton.textContent = "Preparing...";


            try {

                const canvas = await html2canvas(
    resultCard,
    {
        scale: 2,
        backgroundColor: "#ffffff",
        onclone: prepareResultImageClone
    }
);   
                const blob =
                    await new Promise(function (resolve) {

                        canvas.toBlob(
                            resolve,
                            "image/png"
                        );

                    });


                if (!blob) {

                    throw new Error(
                        "Could not create result image."
                    );

                }


                const file =
                    new File(
                        [blob],
                        "psychological-assessment-result.png",
                        {
                            type: "image/png"
                        }
                    );


                const shareData = {
                    title:
                        "My Psychological Assessment Result",

                    text:
                        "Here is my Psychological Assessment result.",

                    files: [file]
                };


                // Try native image sharing first.
                if (
                    navigator.share &&
                    navigator.canShare &&
                    navigator.canShare({
                        files: [file]
                    })
                ) {

                    await navigator.share(
                        shareData
                    );

                } else {

                    // Browser does not support
                    // sharing files. Download instead.
                    downloadResultImage(blob);

                }

            } catch (error) {

                // User cancelled the native share sheet.
                if (
                    error &&
                    error.name === "AbortError"
                ) {
                    return;
                }


                console.error(
                    "Result sharing failed:",
                    error
                );


                alert(
                    "We couldn't share the result. The result image will be downloaded instead."
                );


                downloadResultImageFromCard(
                    resultCard
                );

            } finally {

                shareButton.disabled = false;
                shareButton.textContent =
                    "Share Result";

            }

        }
    );

}

// ==========================================
// RESULT IMAGE DOWNLOAD
// ==========================================

function prepareResultImageClone(clonedDocument) {
    const clonedCard = clonedDocument.querySelector("#result-card");

    if (clonedCard) {
        clonedCard.style.animation = "none";
        clonedCard.style.opacity = "1";
        clonedCard.style.transform = "none";
    }

    const clonedActions = clonedDocument.querySelector(".result-actions");

    if (clonedActions) {
        clonedActions.style.display = "none";

        const previousElement = clonedActions.previousElementSibling;

        if (
            previousElement &&
            previousElement.classList.contains("result-divider")
        ) {
            previousElement.style.display = "none";
        }
    }
}

function downloadResultImage(blob) {

    const imageUrl =
        URL.createObjectURL(blob);


    const downloadLink =
        document.createElement("a");


    downloadLink.href =
        imageUrl;

    downloadLink.download =
        "psychological-assessment-result.png";


    document.body.appendChild(
        downloadLink
    );

    downloadLink.click();

    downloadLink.remove();


    URL.revokeObjectURL(
        imageUrl
    );

}


async function downloadResultImageFromCard(
    resultCard
) {

    try {

const canvas = await html2canvas(
    resultCard,
    {
        scale: 2,
        backgroundColor: "#ffffff",
        onclone: prepareResultImageClone
    }
);
           canvas.toBlob(
            function (blob) {

                if (blob) {
                    downloadResultImage(blob);
                }

            },
            "image/png"
        );

    } catch (error) {

        console.error(
            "Could not generate result image:",
            error
        );

    }

}