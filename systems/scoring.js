// ==========================================
// SCORING SYSTEM
// Calculates tendency scores and percentages
// ==========================================

class ScoringSystem {
    constructor(questions = [], categories = []) {
        this.questions = questions;
        this.categories = categories;
    }

    // Calculate the maximum possible score for each category
    getMaximumScores() {
        const maximumScores = {};

        this.categories.forEach(category => {
            maximumScores[category] = 0;
        });

        this.questions.forEach(question => {
            const category = question.category;

            if (!Object.prototype.hasOwnProperty.call(maximumScores, category)) {
                return;
            }

            const questionMaximum = Math.max(
                ...question.options.map(option =>
                    typeof option.score === "number" ? option.score : 0
                ),
                0
            );

            maximumScores[category] += questionMaximum;
        });

        return maximumScores;
    }

    // Calculate the total points earned in each category
    calculateRawScores(responses) {
        const rawScores = {};

        this.categories.forEach(category => {
            rawScores[category] = 0;
        });

        responses.forEach(response => {
            const category = response.category;
            const score = response.score;

            if (!Object.prototype.hasOwnProperty.call(rawScores, category)) {
                return;
            }

            if (typeof score !== "number" || !Number.isFinite(score)) {
                return;
            }

            rawScores[category] += score;
        });

        return rawScores;
    }

   // Convert raw scores into percentages
calculatePercentages(rawScores, maximumScores) {
    const percentages = {};

    this.categories.forEach(category => {
        const maximum = maximumScores[category];

        if (maximum <= 0) {
            percentages[category] = 0;
            return;
        }

        percentages[category] = Math.round(
            (rawScores[category] / maximum) * 100
        );
    });

    return percentages;
}

   // Calculate all scoring information
calculate(responses) {
    const rawScores = this.calculateRawScores(responses);
    const maximumScores = this.getMaximumScores();
    const percentages = this.calculatePercentages(
        rawScores,
        maximumScores
    );

    return {
        rawScores,
        maximumScores,
        percentages
    };
}

    // Check whether every category has the same maximum score
    validateBalance() {
        const maximumScores = this.getMaximumScores();
        const values = Object.values(maximumScores);

        if (values.length === 0) {
            return {
                balanced: true,
                maximumScores
            };
        }

        const firstMaximum = values[0];

        const balanced = values.every(
            value => value === firstMaximum
        );

        return {
            balanced,
            maximumScores
        };
    }
}