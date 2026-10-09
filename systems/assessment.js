// ==========================================
// ASSESSMENT SYSTEM
// Handles questions, answers, and progress
// ==========================================

class AssessmentSystem {
    constructor(questions = []) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.responses = [];
    }

    // Return the current question
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    // Return the current question index
    getCurrentQuestionIndex() {
        return this.currentQuestionIndex;
    }

    // Return the total number of questions
    getTotalQuestions() {
        return this.questions.length;
    }

    // Record the selected answer
    recordAnswer(optionIndex) {
        const question = this.getCurrentQuestion();

        if (!question) {
            console.error("Cannot record answer: question not found.");
            return false;
        }

        const option = question.options[optionIndex];

        if (!option) {
            console.error("Cannot record answer: option not found.");
            return false;
        }

        // Support both the new question format and the older demo format
        const isObjectOption = typeof option === "object";

        const score =
            isObjectOption && typeof option.score === "number"
                ? option.score
                : 0;

        const category = question.category ?? null;

        const scores =
            isObjectOption && option.scores
                ? { ...option.scores }
                : {};

        const response = {
            questionId: question.id ?? this.currentQuestionIndex + 1,
            questionIndex: this.currentQuestionIndex,
            selectedOption: optionIndex,
            category: category,
            score: score,
            scores: scores
        };

        // Replace an existing answer if this question was already answered
        const existingResponseIndex = this.responses.findIndex(
            item => item.questionIndex === this.currentQuestionIndex
        );

        if (existingResponseIndex !== -1) {
            this.responses[existingResponseIndex] = response;
        } else {
            this.responses.push(response);
        }

        return true;
    }

    // Move to the next question
    moveToNextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }

        return false;
    }

    // Check whether every question has been answered
    isComplete() {
        return (
            this.questions.length > 0 &&
            this.responses.length === this.questions.length
        );
    }

    // Return a safe copy of the responses
    getResponses() {
        return this.responses.map(response => ({
            ...response,
            scores: { ...response.scores }
        }));
    }

    // Reset the assessment
    reset() {
        this.currentQuestionIndex = 0;
        this.responses = [];
    }
}