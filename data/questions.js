// ==========================================
// PSYCHOLOGICAL ASSESSMENT QUESTIONS
// ==========================================

// Category: Analytical & Systematic Thinking
// Profile: Analyst
// Maximum score: 10 points

const assessmentQuestions = [

    // QUESTION 1
    {
        id: "q01",
        category: "analytical",
        question:
            "When faced with an unfamiliar problem, what would you most likely do?",

        options: [
            {
                text: "Break it into smaller parts and examine the evidence.",
                score: 2
            },
            {
                text: "Compare different approaches before deciding.",
                score: 2
            },
            {
                text: "Try an approach that seems promising and adjust if needed.",
                score: 1
            },
            {
                text: "Use a familiar solution that has worked before.",
                score: 0
            }
        ]
    },

    // QUESTION 2
    {
        id: "q02",
        category: "analytical",
        question:
            "You receive two conflicting explanations for the same situation. What would you most likely do?",

        options: [
            {
                text: "Compare the evidence supporting each explanation.",
                score: 2
            },
            {
                text: "Look for additional information before deciding.",
                score: 2
            },
            {
                text: "Consider which explanation seems more plausible.",
                score: 1
            },
            {
                text: "Go with the explanation I heard from someone I trust.",
                score: 0
            }
        ]
    },

    // QUESTION 3
    {
        id: "q03",
        category: "analytical",
        question:
            "A decision you made produces an unexpected result. What would you most likely do?",

        options: [
            {
                text: "Review my reasoning to identify what I overlooked.",
                score: 2
            },
            {
                text: "Examine what happened and compare it with my expectations.",
                score: 2
            },
            {
                text: "Consider what I could do differently next time.",
                score: 1
            },
            {
                text: "Accept the outcome and move on.",
                score: 0
            }
        ]
    },

    // QUESTION 4
    {
        id: "q04",
        category: "analytical",
        question:
            "You have several possible solutions to a difficult task. How would you choose between them?",

        options: [
            {
                text: "Compare their advantages, limitations, and likely outcomes.",
                score: 2
            },
            {
                text: "Check which solution best meets the task's requirements.",
                score: 2
            },
            {
                text: "Choose the solution that seems easiest to implement.",
                score: 1
            },
            {
                text: "Pick one and see how it turns out.",
                score: 0
            }
        ]
    },

    // QUESTION 5
    {
        id: "q05",
        category: "analytical",
        question:
            "When learning something complicated, which approach would you prefer?",

        options: [
            {
                text: "Understand its individual parts and how they connect.",
                score: 2
            },
            {
                text: "Follow the reasoning behind each step until the whole process makes sense.",
                score: 2
            },
            {
                text: "Learn the basic idea first and work out the details as I go.",
                score: 1
            },
            {
                text: "Memorize the main points so I can use them when needed.",
                score: 0
            }
        ]
    },

        // ==========================================
    // CATEGORY: CURIOSITY & EXPLORATION
    // PROFILE: EXPLORER
    // ==========================================

    // QUESTION 6
    {
        id: "q06",
        category: "curiosity",
        question:
            "You come across a subject you know very little about. What would you most likely do?",

        options: [
            {
                text: "Explore it further to discover what makes it interesting.",
                score: 2
            },
            {
                text: "Look for an opportunity to learn about it.",
                score: 2
            },
            {
                text: "Learn the basics if the subject seems useful.",
                score: 1
            },
            {
                text: "Leave it alone unless I have a reason to learn about it.",
                score: 0
            }
        ]
    },

    // QUESTION 7
    {
        id: "q07",
        category: "curiosity",
        question:
            "You have some free time and an opportunity to try an unfamiliar activity. What would you most likely do?",

        options: [
            {
                text: "Try it because I enjoy experiencing something new.",
                score: 2
            },
            {
                text: "Find out more about it and try it if it interests me.",
                score: 2
            },
            {
                text: "Consider trying it if it fits my current interests.",
                score: 1
            },
            {
                text: "Stick with activities I already know I enjoy.",
                score: 0
            }
        ]
    },

    // QUESTION 8
    {
        id: "q08",
        category: "curiosity",
        question:
            "While learning something new, you discover a topic that wasn't part of your original goal. What would you most likely do?",

        options: [
            {
                text: "Explore the new topic to see what else I can discover.",
                score: 2
            },
            {
                text: "Investigate it briefly if it raises interesting questions.",
                score: 2
            },
            {
                text: "Make a note of it and return to it if I have time.",
                score: 1
            },
            {
                text: "Ignore it and concentrate on my original goal.",
                score: 0
            }
        ]
    },

    // QUESTION 9
    {
        id: "q09",
        category: "curiosity",
        question:
            "When you encounter an unfamiliar idea that challenges what you already know, how do you usually respond?",

        options: [
            {
                text: "Explore the idea to understand what I might be missing.",
                score: 2
            },
            {
                text: "Consider it seriously and look for more information.",
                score: 2
            },
            {
                text: "Listen to the idea but remain with my current understanding unless persuaded.",
                score: 1
            },
            {
                text: "Prefer not to spend time on ideas that conflict with what I know.",
                score: 0
            }
        ]
    },

    // QUESTION 10
    {
        id: "q10",
        category: "curiosity",
        question:
            "Which experience would you find most satisfying?",

        options: [
            {
                text: "Discovering something I had never known before.",
                score: 2
            },
            {
                text: "Finding an unexpected connection between different ideas.",
                score: 2
            },
            {
                text: "Becoming better at something I already enjoy.",
                score: 1
            },
            {
                text: "Completing a familiar activity without surprises.",
                score: 0
            }
        ]
    },

        // ==========================================
    // CATEGORY: INDEPENDENCE & SELF-DIRECTION
    // PROFILE: INDEPENDENT
    // ==========================================

    // QUESTION 11
    {
        id: "q11",
        category: "independence",
        question:
            "You are given a task but very little guidance on how to complete it. What would you most likely do?",

        options: [
            {
                text: "Decide on my own approach and begin working.",
                score: 2
            },
            {
                text: "Clarify the goal, then decide how to accomplish it.",
                score: 2
            },
            {
                text: "Look for an example to guide my approach.",
                score: 1
            },
            {
                text: "Wait for someone to provide detailed instructions.",
                score: 0
            }
        ]
    },

    // QUESTION 12
    {
        id: "q12",
        category: "independence",
        question:
            "You need to make an important decision, and people around you have different opinions. What would you most likely do?",

        options: [
            {
                text: "Consider their views, then make the decision I believe is right.",
                score: 2
            },
            {
                text: "Gather information and reach my own conclusion.",
                score: 2
            },
            {
                text: "Give considerable weight to the opinion of someone I trust.",
                score: 1
            },
            {
                text: "Usually follow the preference of the people involved.",
                score: 0
            }
        ]
    },

    // QUESTION 13
    {
        id: "q13",
        category: "independence",
        question:
            "When working on a project, which arrangement would you generally prefer?",

        options: [
            {
                text: "Having freedom to decide how I complete my part.",
                score: 2
            },
            {
                text: "Agreeing on the goal and managing my work independently.",
                score: 2
            },
            {
                text: "Following an established method while handling my own tasks.",
                score: 1
            },
            {
                text: "Receiving regular instructions about what to do next.",
                score: 0
            }
        ]
    },

    // QUESTION 14
    {
        id: "q14",
        category: "independence",
        question:
            "You discover that the usual way of doing something doesn't suit your needs. What would you most likely do?",

        options: [
            {
                text: "Develop my own approach that better suits the situation.",
                score: 2
            },
            {
                text: "Modify the existing method to work better for me.",
                score: 2
            },
            {
                text: "Try another established method before creating my own.",
                score: 1
            },
            {
                text: "Continue using the usual method even if it isn't ideal.",
                score: 0
            }
        ]
    },

    // QUESTION 15
    {
        id: "q15",
        category: "independence",
        question:
            "You encounter a challenge that you haven't handled before. What would you most likely do first?",

        options: [
            {
                text: "Try to work out a solution before deciding whether I need help.",
                score: 2
            },
            {
                text: "Explore possible approaches and test one myself.",
                score: 2
            },
            {
                text: "Ask someone experienced for advice, then decide what to do.",
                score: 1
            },
            {
                text: "Rely on someone else to guide me through the challenge.",
                score: 0
            }
        ]
    },

        // ==========================================
    // CATEGORY: PLANNING & ORGANIZATION
    // PROFILE: STRATEGIST
    // ==========================================

    // QUESTION 16
    {
        id: "q16",
        category: "planning",
        question:
            "You have several tasks to complete before the end of the day. How would you approach them?",

        options: [
            {
                text: "List the tasks, prioritize them, and decide when to do each.",
                score: 2
            },
            {
                text: "Identify the most important tasks and organize my work around them.",
                score: 2
            },
            {
                text: "Start with whichever task seems easiest to complete.",
                score: 1
            },
            {
                text: "Work on tasks as they come to mind without making a plan.",
                score: 0
            }
        ]
    },

    // QUESTION 17
    {
        id: "q17",
        category: "planning",
        question:
            "You are about to begin a project that will take several weeks. What would you most likely do first?",

        options: [
            {
                text: "Break the project into stages and set milestones.",
                score: 2
            },
            {
                text: "Identify the main requirements and plan how to meet them.",
                score: 2
            },
            {
                text: "Think through the first few steps and plan the rest as I go.",
                score: 1
            },
            {
                text: "Begin immediately and decide what comes next later.",
                score: 0
            }
        ]
    },

    // QUESTION 18
    {
        id: "q18",
        category: "planning",
        question:
            "Two important responsibilities need your attention at the same time. What would you most likely do?",

        options: [
            {
                text: "Compare their deadlines and importance, then allocate my time.",
                score: 2
            },
            {
                text: "Work out a sequence that allows me to handle both effectively.",
                score: 2
            },
            {
                text: "Focus on whichever responsibility feels more urgent.",
                score: 1
            },
            {
                text: "Switch between them depending on what catches my attention.",
                score: 0
            }
        ]
    },

    // QUESTION 19
    {
        id: "q19",
        category: "planning",
        question:
            "When you have an important deadline approaching, how do you usually manage your work?",

        options: [
            {
                text: "Set smaller deadlines for myself and monitor my progress.",
                score: 2
            },
            {
                text: "Estimate how much time I need and schedule the work accordingly.",
                score: 2
            },
            {
                text: "Keep the deadline in mind and work at a pace that feels manageable.",
                score: 1
            },
            {
                text: "Usually begin serious work when the deadline gets close.",
                score: 0
            }
        ]
    },

    // QUESTION 20
    {
        id: "q20",
        category: "planning",
        question:
            "You realize that your original plan no longer fits the situation. What would you most likely do?",

        options: [
            {
                text: "Review the remaining tasks and create a revised plan.",
                score: 2
            },
            {
                text: "Reorganize my priorities and adjust the schedule.",
                score: 2
            },
            {
                text: "Make changes as needed without reorganizing the entire plan.",
                score: 1
            },
            {
                text: "Set the plan aside and handle each task as it comes up.",
                score: 0
            }
        ]
    },

        // ==========================================
    // CATEGORY: ADAPTABILITY & FLEXIBILITY
    // PROFILE: IMPROVISER
    // ==========================================

    // QUESTION 21
    {
        id: "q21",
        category: "adaptability",
        question:
            "You arrive at an event and discover that the arrangements are completely different from what you expected. What would you most likely do?",

        options: [
            {
                text: "Adjust my expectations and work out how to proceed with the new arrangements.",
                score: 2
            },
            {
                text: "Explore the available options and choose an alternative that works.",
                score: 2
            },
            {
                text: "Take some time to understand the changes before deciding what to do.",
                score: 1
            },
            {
                text: "Find it difficult to continue without the original arrangements.",
                score: 0
            }
        ]
    },

    // QUESTION 22
    {
        id: "q22",
        category: "adaptability",
        question:
            "You are working on a task when your original approach stops producing results. What would you most likely do?",

        options: [
            {
                text: "Switch approaches and experiment until I find a workable solution.",
                score: 2
            },
            {
                text: "Identify what has changed and adapt my method accordingly.",
                score: 2
            },
            {
                text: "Try a few small adjustments before changing my approach significantly.",
                score: 1
            },
            {
                text: "Continue with my original approach in the hope that it eventually works.",
                score: 0
            }
        ]
    },

    // QUESTION 23
    {
        id: "q23",
        category: "adaptability",
        question:
            "A group activity takes an unexpected direction, and your original role is no longer needed. What would you most likely do?",

        options: [
            {
                text: "Look for another way I can contribute to the activity.",
                score: 2
            },
            {
                text: "Take on a different role if it helps the group move forward.",
                score: 2
            },
            {
                text: "Wait briefly to see whether my original role becomes relevant again.",
                score: 1
            },
            {
                text: "Prefer to stick with my original role rather than take on something different.",
                score: 0
            }
        ]
    },

    // QUESTION 24
    {
        id: "q24",
        category: "adaptability",
        question:
            "You have to complete a task, but some of the resources you expected to use are unavailable. What would you most likely do?",

        options: [
            {
                text: "Find alternative resources and adjust my approach to suit them.",
                score: 2
            },
            {
                text: "Reconsider the available options and work with what I have.",
                score: 2
            },
            {
                text: "Wait briefly to see whether the original resources become available.",
                score: 1
            },
            {
                text: "Prefer to postpone the task until I can use the resources I expected.",
                score: 0
            }
        ]
    },

    // QUESTION 25
    {
        id: "q25",
        category: "adaptability",
        question:
            "When a situation develops in an unexpected way, how do you usually decide what to do next?",

        options: [
            {
                text: "Respond to the new circumstances and revise my approach as needed.",
                score: 2
            },
            {
                text: "Consider the available options and choose the one that fits the situation best.",
                score: 2
            },
            {
                text: "Rely on familiar approaches while making small adjustments.",
                score: 1
            },
            {
                text: "Prefer to wait until the situation becomes more predictable before acting.",
                score: 0
            }
        ]
    },

        // ==========================================
    // CATEGORY: SOCIAL ENGAGEMENT PREFERENCE
    // PROFILE: SOCIALIZER
    // ==========================================

    // QUESTION 26
    {
        id: "q26",
        category: "social",
        question:
            "You attend a gathering where you know very few people. What would you most naturally do?",

        options: [
            {
                text: "Start conversations with people who seem approachable.",
                score: 2
            },
            {
                text: "Join a conversation or introduce myself when an opportunity arises.",
                score: 2
            },
            {
                text: "Wait until someone approaches me before joining in.",
                score: 1
            },
            {
                text: "Keep to myself unless there is a specific reason to interact.",
                score: 0
            }
        ]
    },

    // QUESTION 27
    {
        id: "q27",
        category: "social",
        question:
            "When you have free time and no immediate responsibilities, which would you generally prefer?",

        options: [
            {
                text: "Spend time with friends or meet people.",
                score: 2
            },
            {
                text: "Make plans with others if an opportunity comes up.",
                score: 2
            },
            {
                text: "Choose between socializing and spending time alone depending on my mood.",
                score: 1
            },
            {
                text: "Usually spend the time on activities I can enjoy alone.",
                score: 0
            }
        ]
    },

    // QUESTION 28
    {
        id: "q28",
        category: "social",
        question:
            "During a group discussion, how do you usually participate?",

        options: [
            {
                text: "Share my ideas openly and help keep the discussion going.",
                score: 2
            },
            {
                text: "Join the conversation whenever I have something to contribute.",
                score: 2
            },
            {
                text: "Mostly listen and speak when someone asks for my opinion.",
                score: 1
            },
            {
                text: "Prefer to listen rather than take part in the discussion.",
                score: 0
            }
        ]
    },

    // QUESTION 29
    {
        id: "q29",
        category: "social",
        question:
            "You have joined a new class, club, or group. How would you generally approach getting to know people?",

        options: [
            {
                text: "Introduce myself and look for opportunities to talk to different people.",
                score: 2
            },
            {
                text: "Start conversations with people whose interests or behavior appeal to me.",
                score: 2
            },
            {
                text: "Get to know people gradually as we spend time together.",
                score: 1
            },
            {
                text: "Focus on the activity and let relationships develop naturally without seeking interaction.",
                score: 0
            }
        ]
    },

    // QUESTION 30
    {
        id: "q30",
        category: "social",
        question:
            "When working with other people on a shared activity, what do you generally enjoy most?",

        options: [
            {
                text: "Exchanging ideas and interacting throughout the activity.",
                score: 2
            },
            {
                text: "Collaborating with others and discussing our progress.",
                score: 2
            },
            {
                text: "Working independently while checking in with the group when needed.",
                score: 1
            },
            {
                text: "Completing my own part with as little interaction as possible.",
                score: 0
            }
        ]
    },

        // ==========================================
    // CATEGORY: INTERPERSONAL EMPATHY & SUPPORT
    // PROFILE: SUPPORTER
    // ==========================================

    // QUESTION 31
    {
        id: "q31",
        category: "empathy",
        question:
            "A friend seems upset but hasn't explained what is wrong. What would you most likely do?",

        options: [
            {
                text: "Check in with them and give them room to share if they want to.",
                score: 2
            },
            {
                text: "Try to understand how they might be feeling before responding.",
                score: 2
            },
            {
                text: "Wait until they tell me what is wrong.",
                score: 1
            },
            {
                text: "Assume they would rather deal with it on their own unless they ask for help.",
                score: 0
            }
        ]
    },

    // QUESTION 32
    {
        id: "q32",
        category: "empathy",
        question:
            "Someone tells you about a difficult experience that you have never personally had. How would you usually respond?",

        options: [
            {
                text: "Listen carefully and try to understand their experience from their perspective.",
                score: 2
            },
            {
                text: "Ask thoughtful questions to understand what the experience was like for them.",
                score: 2
            },
            {
                text: "Listen and relate it to something familiar, if I can.",
                score: 1
            },
            {
                text: "Find it difficult to relate to experiences I haven't had myself.",
                score: 0
            }
        ]
    },

    // QUESTION 33
    {
        id: "q33",
        category: "empathy",
        question:
            "A friend tells you about a problem they are facing. What would you most likely do first?",

        options: [
            {
                text: "Listen and try to understand what the problem means to them.",
                score: 2
            },
            {
                text: "Ask whether they want someone to listen or help them find a solution.",
                score: 2
            },
            {
                text: "Offer a suggestion based on what I think might help.",
                score: 1
            },
            {
                text: "Focus on practical facts rather than discussing their feelings.",
                score: 0
            }
        ]
    },

    // QUESTION 34
    {
        id: "q34",
        category: "empathy",
        question:
            "During a disagreement, you realize that the other person feels strongly about the issue. What would you most likely do?",

        options: [
            {
                text: "Try to understand why the issue matters so much to them.",
                score: 2
            },
            {
                text: "Consider their perspective even if I still disagree with them.",
                score: 2
            },
            {
                text: "Explain my own position and listen to their response.",
                score: 1
            },
            {
                text: "Focus on defending my position rather than exploring their feelings.",
                score: 0
            }
        ]
    },

    // QUESTION 35
    {
        id: "q35",
        category: "empathy",
        question:
            "Someone you know makes a mistake that causes inconvenience for others. How would you most likely respond?",

        options: [
            {
                text: "Consider the circumstances that may have led to the mistake before judging them.",
                score: 2
            },
            {
                text: "Address the consequences while trying to understand their perspective.",
                score: 2
            },
            {
                text: "Focus on what they should do differently next time.",
                score: 1
            },
            {
                text: "Judge the mistake mainly by its consequences, regardless of the circumstances.",
                score: 0
            }
        ]
    },

        // ==========================================
    // Category: Self-Reflection
    // Profile: Introspective
    // Maximum score: 10 points
    // ==========================================

    // QUESTION 36
    {
        id: "q36",
        category: "selfReflection",
        question:
            "After an important experience, how do you usually think about what happened?",

        options: [
            { text: "Reflect on my reactions and what I can learn from the experience.", score: 2 },
            { text: "Consider what went well and what I could do differently next time.", score: 2 },
            { text: "Think about the main events without examining them in much detail.", score: 1 },
            { text: "Move on without spending much time thinking about the experience.", score: 0 }
        ]
    },

    // QUESTION 37
    {
        id: "q37",
        category: "selfReflection",
        question:
            "When you notice that your reaction to a situation was stronger than expected, what would you most likely do?",

        options: [
            { text: "Examine what I was feeling and what may have triggered that reaction.", score: 2 },
            { text: "Think about why the situation affected me that way.", score: 2 },
            { text: "Acknowledge my reaction and consider it briefly.", score: 1 },
            { text: "Avoid thinking about the reaction once the situation has passed.", score: 0 }
        ]
    },

    // QUESTION 38
    {
        id: "q38",
        category: "selfReflection",
        question:
            "When receiving feedback about your behavior, how do you usually respond?",

        options: [
            { text: "Consider whether the feedback reveals something I should understand about myself.", score: 2 },
            { text: "Reflect on the feedback and compare it with my own experience.", score: 2 },
            { text: "Consider the feedback but usually move on without much reflection.", score: 1 },
            { text: "Dismiss the feedback without considering whether it might be useful.", score: 0 }
        ]
    },

    // QUESTION 39
    {
        id: "q39",
        category: "selfReflection",
        question:
            "When making a choice that matters to you, what do you usually consider?",

        options: [
            { text: "Whether the choice fits my values, priorities, and personal goals.", score: 2 },
            { text: "Why I prefer one option and what is influencing my decision.", score: 2 },
            { text: "The likely outcome and whether it meets my immediate needs.", score: 1 },
            { text: "Choose whichever option seems easiest without examining my reasons.", score: 0 }
        ]
    },

    // QUESTION 40
    {
        id: "q40",
        category: "selfReflection",
        question:
            "When you notice a recurring pattern in your behavior, what would you most likely do?",

        options: [
            { text: "Explore why the pattern occurs and how it affects me.", score: 2 },
            { text: "Look for situations or triggers connected to the pattern.", score: 2 },
            { text: "Recognize the pattern and consider changing it if necessary.", score: 1 },
            { text: "Pay little attention to the pattern unless it causes a problem.", score: 0 }
        ]
    },

        // ==========================================
    // Category: Persistence
    // Profile: The Perseverant
    // Maximum score: 10 points
    // ==========================================

    // QUESTION 41
    {
        id: "q41",
        category: "persistence",
        question:
            "You are working toward a goal, but progress is slower than you expected. What would you most likely do?",

        options: [
            { text: "Review my approach and keep working toward the goal.", score: 2 },
            { text: "Break the goal into smaller steps and continue steadily.", score: 2 },
            { text: "Reduce my effort temporarily and see whether progress improves later.", score: 1 },
            { text: "Consider abandoning the goal because it is taking too long.", score: 0 }
        ]
    },

    // QUESTION 42
    {
        id: "q42",
        category: "persistence",
        question:
            "You encounter repeated setbacks while trying to complete a challenging task. How would you usually respond?",

        options: [
            { text: "Learn from the setbacks and try a different approach.", score: 2 },
            { text: "Keep working and adjust my methods when necessary.", score: 2 },
            { text: "Take a break before deciding whether to continue.", score: 1 },
            { text: "Lose motivation and find it difficult to continue.", score: 0 }
        ]
    },

    // QUESTION 43
    {
        id: "q43",
        category: "persistence",
        question:
            "When a task becomes repetitive or less interesting than you expected, what do you usually do?",

        options: [
            { text: "Continue because completing the task matters to me.", score: 2 },
            { text: "Set small milestones to help me maintain progress.", score: 2 },
            { text: "Work on it when my interest or motivation returns.", score: 1 },
            { text: "Put it aside in favor of something more interesting.", score: 0 }
        ]
    },

    // QUESTION 44
    {
        id: "q44",
        category: "persistence",
        question:
            "You have made a commitment that requires sustained effort over several weeks. How would you approach it?",

        options: [
            { text: "Maintain a consistent effort even when motivation fluctuates.", score: 2 },
            { text: "Track my progress and keep returning to the commitment.", score: 2 },
            { text: "Make progress when time and motivation allow.", score: 1 },
            { text: "Often shift my attention to newer priorities or interests.", score: 0 }
        ]
    },

    // QUESTION 45
    {
        id: "q45",
        category: "persistence",
        question:
            "You are close to completing a difficult task when a new obstacle appears. What would you most likely do?",

        options: [
            { text: "Work out what is needed to overcome the obstacle and finish the task.", score: 2 },
            { text: "Reassess the situation and continue if the goal remains worthwhile.", score: 2 },
            { text: "Pause to decide whether completing the task is still practical.", score: 1 },
            { text: "Stop working on it because the new obstacle makes completion less appealing.", score: 0 }
        ]
    },

        // ==========================================
    // Category: Attention Regulation
    // Profile: Focused
    // Maximum score: 10 points
    // ==========================================

    // QUESTION 46
    {
        id: "q46",
        category: "attention",
        question:
            "You are working on an important task when notifications and other distractions appear. What would you most likely do?",

        options: [
            { text: "Reduce the distractions and keep my attention on the task.", score: 2 },
            { text: "Finish what I am doing before checking the notifications.", score: 2 },
            { text: "Check a few notifications before returning to the task.", score: 1 },
            { text: "Frequently switch between the task and the notifications.", score: 0 }
        ]
    },

    // QUESTION 47
    {
        id: "q47",
        category: "attention",
        question:
            "When you need to concentrate on a task for an extended period, how do you usually approach it?",

        options: [
            { text: "Work in focused periods and take breaks when needed.", score: 2 },
            { text: "Set a clear goal and give the task my attention until I reach it.", score: 2 },
            { text: "Work for as long as I can before taking a break.", score: 1 },
            { text: "Frequently move to other activities when concentration becomes difficult.", score: 0 }
        ]
    },

    // QUESTION 48
    {
        id: "q48",
        category: "attention",
        question:
            "You are interrupted while doing something that requires concentration. What would you most likely do afterward?",

        options: [
            { text: "Return to the task and deliberately refocus on where I left off.", score: 2 },
            { text: "Review my progress briefly, then continue working.", score: 2 },
            { text: "Resume the task but need some time to regain my concentration.", score: 1 },
            { text: "Often get drawn into other activities instead of returning to the task.", score: 0 }
        ]
    },

    // QUESTION 49
    {
        id: "q49",
        category: "attention",
        question:
            "When handling several things that need your attention, what would you most likely do?",

        options: [
            { text: "Choose priorities and handle tasks one at a time where possible.", score: 2 },
            { text: "Organize the tasks so I can give each one appropriate attention.", score: 2 },
            { text: "Switch between tasks depending on what needs attention first.", score: 1 },
            { text: "Try to handle everything at once, even if I lose track of some tasks.", score: 0 }
        ]
    },

    // QUESTION 50
    {
        id: "q50",
        category: "attention",
        question:
            "While reading or studying, you realize your mind has wandered away from the material. What would you most likely do?",

        options: [
            { text: "Bring my attention back and identify where I lost track.", score: 2 },
            { text: "Reread the relevant part and continue with the material.", score: 2 },
            { text: "Continue reading and try to regain my attention as I go.", score: 1 },
            { text: "Leave the material for another activity because concentrating feels difficult.", score: 0 }
        ]
    },

        // ==========================================
    // Category: Stress Response & Coping
    // Profile: Resilient
    // Maximum score: 10 points
    // ==========================================

    // QUESTION 51
    {
        id: "q51",
        category: "stressCoping",
        question:
            "You have several responsibilities and begin to feel overwhelmed. What would you most likely do?",

        options: [
            { text: "Identify what needs attention first and handle it step by step.", score: 2 },
            { text: "Organize my responsibilities and focus on what I can control.", score: 2 },
            { text: "Take a break before deciding how to handle everything.", score: 1 },
            { text: "Struggle to decide where to begin because everything feels urgent.", score: 0 }
        ]
    },

    // QUESTION 52
    {
        id: "q52",
        category: "stressCoping",
        question:
            "An unexpected problem disrupts an important plan. How would you most likely respond?",

        options: [
            { text: "Assess the situation and focus on the steps I can take next.", score: 2 },
            { text: "Give myself time to settle, then work out a practical response.", score: 2 },
            { text: "Feel unsettled for a while before deciding what to do.", score: 1 },
            { text: "Find it difficult to move forward while worrying about the disruption.", score: 0 }
        ]
    },

    // QUESTION 53
    {
        id: "q53",
        category: "stressCoping",
        question:
            "After a stressful day, what would you most likely do to recover?",

        options: [
            { text: "Choose activities that help me unwind and regain my energy.", score: 2 },
            { text: "Take time to process the day and decide what would help me feel better.", score: 2 },
            { text: "Distract myself for a while and see how I feel later.", score: 1 },
            { text: "Continue dwelling on the stressful events without finding a way to unwind.", score: 0 }
        ]
    },

    // QUESTION 54
    {
        id: "q54",
        category: "stressCoping",
        question:
            "You receive disappointing news about something important to you. What would you most likely do?",

        options: [
            { text: "Acknowledge my disappointment and consider what I can do next.", score: 2 },
            { text: "Give myself time to process the news before deciding how to proceed.", score: 2 },
            { text: "Try to carry on with my usual activities while I come to terms with it.", score: 1 },
            { text: "Find it difficult to focus on anything else because of the disappointment.", score: 0 }
        ]
    },

    // QUESTION 55
    {
        id: "q55",
        category: "stressCoping",
        question:
            "When you face a situation whose outcome is uncertain, how do you usually manage your concerns?",

        options: [
            { text: "Focus on what I know, what I can influence, and what I can do next.", score: 2 },
            { text: "Consider possible outcomes while continuing with what needs to be done.", score: 2 },
            { text: "Seek reassurance or more information before deciding how to proceed.", score: 1 },
            { text: "Spend a lot of time worrying about possible outcomes, making action difficult.", score: 0 }
        ]
    },
];

// ==========================================
// ASSESSMENT CATEGORY DEFINITIONS
// ==========================================

const assessmentCategories = [
    {
        id: "analytical",
        name: "Analytical & Systematic Thinking",
        profile: "Analyst",
        description:
            "Your responses suggest a preference for examining evidence, comparing possibilities, and approaching problems systematically."
    },
    {
        id: "curiosity",
        name: "Curiosity & Exploration",
        profile: "Explorer",
        description:
            "Your responses suggest an interest in discovering unfamiliar ideas, exploring possibilities, and learning new things."
    },
    {
        id: "independence",
        name: "Independence & Self-Direction",
        profile: "Independent",
        description:
            "Your responses suggest a preference for making your own decisions, choosing your approach, and taking responsibility for your work."
    },
    {
        id: "planning",
        name: "Planning & Organization",
        profile: "Strategist",
        description:
            "Your responses suggest a preference for organizing responsibilities, setting priorities, and planning ahead."
    },
    {
        id: "adaptability",
        name: "Adaptability & Flexibility",
        profile: "Improviser",
        description:
            "Your responses suggest a tendency to adjust your approach when circumstances change or unexpected challenges arise."
    },
    {
        id: "social",
        name: "Social Engagement Preference",
        profile: "Socializer",
        description:
            "Your responses suggest a preference for engaging with others and participating in social activities."
    },
    {
        id: "empathy",
        name: "Interpersonal Empathy & Support",
        profile: "Supporter",
        description:
            "Your responses suggest an inclination to consider other people's perspectives and offer understanding or support."
    },
    {
        id: "selfReflection",
        name: "Self-Reflection",
        profile: "Introspective",
        description:
            "Your responses suggest an inclination to examine your reactions, consider your experiences, and reflect on your behavior."
    },
    {
        id: "persistence",
        name: "Persistence",
        profile: "The Perseverant",
        description:
            "Your responses suggest a preference for continuing toward goals and adjusting your approach when progress becomes difficult."
    },
    {
        id: "attention",
        name: "Attention Regulation",
        profile: "Focused",
        description:
            "Your responses suggest strategies for directing your attention, managing distractions, and returning to tasks."
    },
    {
        id: "stressCoping",
        name: "Stress Response & Coping",
        profile: "Resilient",
        description:
            "Your responses suggest ways you may approach stressful situations, manage concerns, and work through challenges."
    }
];

// ==========================================
// ARCHETYPE EXPLANATIONS
// Detailed descriptions displayed in assessment results
// ==========================================

const archetypeExplanations = {
    analytical: {
        title: "Analyst",
        description:
            "Your responses suggest that you prefer examining information carefully before reaching conclusions. You may enjoy identifying patterns, comparing possible explanations, and breaking complicated problems into smaller parts. When faced with a difficult decision, you may find it useful to understand the available evidence and consider the alternatives before choosing a course of action."
    },

    curiosity: {
        title: "Explorer",
        description:
            "Your responses suggest that you are drawn to unfamiliar ideas, new information, and opportunities to discover something different. You may enjoy asking questions, exploring alternative possibilities, and learning about subjects beyond your immediate responsibilities. Exploring unfamiliar ideas may help you discover interests and approaches you would not otherwise have considered."
    },

    independence: {
        title: "Independent",
        description:
            "Your responses suggest that you value having a say in how you approach your responsibilities. You may prefer making decisions independently, choosing methods that suit you, and taking ownership of your work. You can still benefit from advice and collaboration while maintaining a preference for personal responsibility and freedom in how tasks are approached."
    },

    planning: {
        title: "Strategist",
        description:
            "Your responses suggest that you prefer establishing structure before tackling responsibilities. You may find it helpful to set priorities, break larger tasks into manageable steps, and consider what needs to be done in advance. Planning can help you organize your responsibilities, allocate your time, and approach tasks with a clearer sense of direction."
    },

    adaptability: {
        title: "Improviser",
        description:
            "Your responses suggest that you are comfortable considering alternative approaches when circumstances change. You may prefer responding to new information, adjusting your plans, and finding different ways to address unexpected challenges. Rather than relying on one fixed method, you may be inclined to reconsider what would work best in the situation at hand."
    },

    social: {
        title: "Socializer",
        description:
            "Your responses suggest that you enjoy opportunities to interact with other people and participate in shared activities. You may appreciate exchanging ideas, spending time with others, or taking part in group experiences. This describes a preference for social engagement, not a measure of social skill or confidence; people can enjoy social interaction while differing considerably in how they communicate."
    },

    empathy: {
        title: "Supporter",
        description:
            "Your responses suggest that you pay attention to other people's perspectives and experiences. You may try to understand how someone else feels before responding, listen when others need to talk, or look for practical ways to offer support. This tendency emphasizes consideration for others, although understanding another person's perspective does not necessarily mean agreeing with them."
    },

    selfReflection: {
        title: "Introspective",
        description:
            "Your responses suggest that you are inclined to examine your experiences, reactions, and decisions. You may spend time considering why you responded in a particular way, what you learned from an experience, or what you might do differently next time. Reflection can help you recognize patterns in your behaviour and make more deliberate choices about how to approach future situations."
    },

    persistence: {
        title: "The Perseverant",
        description:
            "Your responses suggest that you value continuing toward your goals when progress becomes difficult. You may be willing to try alternative approaches, work through setbacks, and keep making an effort when a task requires sustained attention. Persistence can help you make progress on challenging responsibilities, while recognizing when a strategy needs to change can be just as important as continuing to try."
    },

    attention: {
        title: "Focused",
        description:
            "Your responses suggest that you make an effort to direct your attention toward the task at hand and manage competing distractions. You may use routines, deliberate refocusing, or other strategies to return to an activity when your attention shifts. This tendency concerns how you approach attention management; it does not establish that you can concentrate consistently in every environment or situation."
    },

    stressCoping: {
        title: "Resilient",
        description:
            "Your responses suggest that you tend to look for ways to manage stressful situations and work through difficulties. You may try to identify what you can control, address problems step by step, or use strategies that help you regain a sense of direction when facing challenges. This reflects the coping approaches indicated by your responses, rather than a guarantee that you remain unaffected by stress."
    }
};

// ==========================================
// SHUFFLE ASSESSMENT QUESTIONS
// ==========================================

function getShuffledQuestions(questions) {
    const shuffled = [...questions];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }

    return shuffled;
}