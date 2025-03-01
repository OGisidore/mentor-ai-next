// Add interface for tools
interface Tool {
    type: 'function';
    name: string;
    description: string;
    parameters?: {
        type: string;
        properties: Record<string, {
            type: string;
            description: string;
        }>;
    };
}

const toolDefinitions = {
    getCurrentTime: {
        description: 'Gets the current time in the user\'s timezone',
        parameters: {}
    },
    changeBackgroundColor: {
        description: 'Changes the background color of the page',
        parameters: {
            color: {
                type: 'string',
                description: 'Color value (hex, rgb, or color name)'
            }
        }
    },
    partyMode: {
        description: 'Triggers a confetti animation on the page',
        parameters: {}
    },
    launchWebsite: {
        description: 'Launches a website in the user\'s browser',
        parameters: {
            url: {
                type: 'string',
                description: 'The URL to launch'
            }
        }
    },
    copyToClipboard: {
        description: 'Copies text to the user\'s clipboard',
        parameters: {
            text: {
                type: 'string',
                description: 'The text to copy'
            }
        }
    },
    takeScreenshot: {
        description: 'Takes a screenshot of the current page',
        parameters: {}
    },
    scrapeWebsite: {
        description: 'Scrapes a URL and returns content in markdown and HTML formats',
        parameters: {
            url: {
                type: 'string',
                description: 'The URL to scrape'
            }
        }
    },
    database_access: {
        description: "Allows the assistant to store and retrieve user data, including personal information, progress, and goals.",
        parameters: {
            user_id: {
                type: "string",
                description: "Unique identifier for the user"
            },
            action: {
                type: "string",
                description: "Action to perform: 'store' or 'retrieve'"
            },
            data: {
                type: "object",
                description: "Data to store, required only if action is 'store'",
                additionalProperties: true
            }
        }
    },
    database_access_v2: {
        description: "Allows the assistant to store and retrieve user data, including personal information, progress, goals, and preferences. It also supports performance tracking and coaching-related data.",

        parameters: {
            user_id: {
                type: "string",
                description: "Unique identifier for the user"
            },
            action: {
                type: "string",
                description: "Action to perform: 'store' or 'retrieve'"
            },
            data: {
                type: "object",
                description: "Data to store, required only if action is 'store'. Can be various types like progress, goals, performance data, etc.",
                additionalProperties: true,
                properties: {
                    user_progress: {
                        type: "object",
                        properties: {
                            language: {
                                type: "string",
                                description: "Language the user is learning."
                            },
                            level: {
                                type: "string",
                                description: "Current level in the language (e.g., Beginner, Intermediate, Advanced)."
                            },
                            progress_percentage: {
                                type: "number",
                                description: "Percentage of completion for the course or skill."
                            }
                        }
                    },
                    goals: {
                        type: "object",
                        properties: {
                            goal_type: {
                                type: "string",
                                description: "Type of goal (e.g., language learning, career development)."
                            },
                            target_date: {
                                type: "string",
                                format: "date",
                                description: "Target date for achieving the goal."
                            },
                            status: {
                                type: "string",
                                description: "Current status of the goal (e.g., in progress, completed, failed)."
                            }
                        }
                    },
                    performance_tracking: {
                        type: "object",
                        properties: {
                            skills_improved: {
                                type: "array",
                                items: {
                                    type: "string",
                                    description: "List of skills improved (e.g., communication, leadership)."
                                },
                                description: "List of skills the user is working on."
                            },
                            performance_score: {
                                type: "number",
                                description: "Score or rating of the user’s performance (could be self-assessed or from a course)."
                            }
                        }
                    },
                    reminders: {
                        type: "object",
                        properties: {
                            reminder_type: {
                                type: "string",
                                description: "Type of reminder (e.g., study session, course deadline)."
                            },
                            reminder_time: {
                                type: "string",
                                format: "date-time",
                                description: "Time the reminder should be triggered."
                            },
                            message: {
                                type: "string",
                                description: "Message to send as part of the reminder."
                            }
                        }
                    },
                    notifications: {
                        type: "object",
                        properties: {
                            notification_type: {
                                type: "string",
                                description: "Type of notification (e.g., progress update, course reminder)."
                            },
                            notification_time: {
                                type: "string",
                                format: "date-time",
                                description: "When the notification should be sent."
                            },
                            message: {
                                type: "string",
                                description: "Message content of the notification."
                            }
                        }
                    },
                    preferences: {
                        type: "object",
                        properties: {
                            preferred_language: {
                                type: "string",
                                description: "User's preferred language for communication with the assistant."
                            },
                            notification_frequency: {
                                type: "string",
                                description: "How often the user wants notifications (e.g., daily, weekly)."
                            }
                        }
                    }
                }
            }
        },

    },
    store_user_goal: {
        "description": "Stores and tracks the user's goals, including language learning, career goals, or personal development targets. It includes goal description, target date, progress, and current status.",
        "parameters": {

            "user_id": {
                "type": "string",
                "description": "Unique identifier for the user"
            },
            "action": {
                "type": "string",
                "description": "Action to perform: 'store' to save the goal data."
            },
            "data": {
                "type": "object",
                "description": "The goal data to store, including the type of goal, description, progress, and status.",
                "additionalProperties": true,
                "properties": {
                    "goal_type": {
                        "type": "string",
                        "description": "The type of goal being pursued (e.g., 'language learning', 'career development', 'health improvement')."
                    },
                    "goal_description": {
                        "type": "string",
                        "description": "A detailed description of the goal (e.g., 'Become fluent in Spanish by 2025')."
                    },
                    "target_date": {
                        "type": "string",
                        "format": "date",
                        "description": "The target date by which the goal is expected to be achieved (e.g., '2025-12-31')."
                    },
                    "status": {
                        "type": "string",
                        "description": "The current status of the goal (e.g., 'Not Started', 'In Progress', 'Completed')."
                    },
                    "progress_percentage": {
                        "type": "number",
                        "description": "The percentage of progress made toward the goal (e.g., 50%)."
                    },
                    "milestones": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "milestone_name": {
                                    "type": "string",
                                    "description": "Name or title of the milestone (e.g., 'Finish Level 1 of Spanish course')."
                                },
                                "milestone_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "The target date for reaching this specific milestone."
                                },
                                "milestone_status": {
                                    "type": "string",
                                    "description": "The current status of this milestone (e.g., 'Not Started', 'Completed')."
                                }
                            }
                        },
                        "description": "A list of specific milestones to track for the goal."
                    }
                }
            }
        }
    },
    store_language_learning_progress: {
        "description": "Stores and tracks the user's progress in language learning, including the language, current level, progress percentage, skills acquired, and milestones achieved.",
        "parameters": {
            "user_id": {
                "type": "string",
                "description": "Unique identifier for the user"
            },
            "action": {
                "type": "string",
                "description": "Action to perform: 'store' to save the language learning progress."
            },
            "data": {
                "type": "object",
                "description": "The language learning progress data to store, including language, level, progress, and acquired skills.",
                "additionalProperties": true,
                "properties": {
                    "language": {
                        "type": "string",
                        "description": "The language the user is learning (e.g., 'Spanish', 'French', etc.)."
                    },
                    "level": {
                        "type": "string",
                        "description": "The current proficiency level of the user in the language (e.g., 'Beginner', 'Intermediate', 'Advanced')."
                    },
                    "progress_percentage": {
                        "type": "number",
                        "description": "The percentage of progress made in the language learning journey (e.g., 50%)."
                    },
                    "skills_acquired": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description": "List of specific language skills the user has acquired so far (e.g., 'vocabulary', 'grammar', 'listening comprehension')."
                        },
                        "description": "Skills or competencies the user has acquired while learning the language."
                    },
                    "milestones": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "milestone_name": {
                                    "type": "string",
                                    "description": "Name or title of the milestone (e.g., 'Complete 10 lessons on Duolingo')."
                                },
                                "milestone_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "The target date for reaching this specific milestone."
                                },
                                "milestone_status": {
                                    "type": "string",
                                    "description": "The current status of this milestone (e.g., 'Not Started', 'Completed')."
                                }
                            }
                        },
                        "description": "A list of milestones that track smaller achievements within the language learning journey."
                    }
                }

            },
        }
    },
    store_personal_development_progress: {
        "description": "Stores and tracks the user's progress in personal development, including goal descriptions, progress percentage, action steps, habits, and milestones achieved.",
        "parameters": {
            "user_id": {
                "type": "string",
                "description": "Unique identifier for the user"
            },
            "action": {
                "type": "string",
                "description": "Action to perform: 'store' to save personal development progress."
            },
            "data": {
                "type": "object",
                "description": "The personal development progress data to store, including goal description, progress, action steps, and milestones.",
                "additionalProperties": true,
                "properties": {
                    "goal_description": {
                        "type": "string",
                        "description": "A detailed description of the personal development goal (e.g., 'Improve time management skills')."
                    },
                    "progress_percentage": {
                        "type": "number",
                        "description": "The percentage of progress made in the personal development goal (e.g., 40%)."
                    },
                    "action_steps": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description": "A list of actionable steps the user is taking to achieve their goal (e.g., 'Practice daily planning', 'Read 1 book per month')."
                        },
                        "description": "Specific actions or tasks the user is performing to work toward their personal development goal."
                    },
                    "habits": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description": "List of habits the user is trying to build or improve (e.g., 'Wake up at 6 AM', 'Meditate every day')."
                        },
                        "description": "Habits that contribute to personal development."
                    },
                    "milestones": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "milestone_name": {
                                    "type": "string",
                                    "description": "Name or title of the milestone (e.g., 'Complete 30 days of journaling')."
                                },
                                "milestone_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "The target date for reaching this specific milestone."
                                },
                                "milestone_status": {
                                    "type": "string",
                                    "description": "The current status of this milestone (e.g., 'Not Started', 'In Progress', 'Completed')."
                                }
                            }
                        },
                        "description": "Milestones that track the smaller steps and accomplishments toward personal development."
                    }
                }

            },
        }
    },
    track_goal_progress: {
        "description": "Tracks the user's progress toward achieving a goal, including milestones, completion percentage, and status updates.",
        "parameters": {
            "user_id": {
                "type": "string",
                "description": "Unique identifier for the user"
            },
            "action": {
                "type": "string",
                "description": "Action to perform: 'track' to monitor and update progress."
            },
            "data": {
                "type": "object",
                "description": "The goal progress data to track, including goal description, completion percentage, and milestones.",
                "additionalProperties": true,
                "properties": {
                    "goal_id": {
                        "type": "string",
                        "description": "Unique identifier for the specific goal being tracked."
                    },
                    "goal_description": {
                        "type": "string",
                        "description": "A description of the goal being tracked (e.g., 'Complete 100 push-ups daily')."
                    },
                    "progress_percentage": {
                        "type": "number",
                        "description": "The percentage of progress made towards achieving the goal (e.g., 75%)."
                    },
                    "milestones": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "milestone_name": {
                                    "type": "string",
                                    "description": "Name or title of the milestone (e.g., 'Complete 50 push-ups daily')."
                                },
                                "milestone_date": {
                                    "type": "string",
                                    "format": "date",
                                    "description": "The target date for reaching this milestone."
                                },
                                "milestone_status": {
                                    "type": "string",
                                    "description": "The current status of this milestone (e.g., 'Not Started', 'In Progress', 'Completed')."
                                }
                            },
                            "required": [
                                "milestone_name",
                                "milestone_date",
                                "milestone_status"
                            ]
                        },
                        "description": "A list of milestones that track smaller achievements within the goal."
                    },
                    "goal_status": {
                        "type": "string",
                        "description": "The overall status of the goal (e.g., 'Not Started', 'In Progress', 'Completed')."
                    },
                    "next_action": {
                        "type": "string",
                        "description": "The next action step required to continue progressing towards the goal (e.g., 'Complete 10 more push-ups')."
                    }
                },
                "required": [
                    "goal_id",
                    "goal_description",
                    "progress_percentage",
                    "goal_status"
                ]

            },
        }
    }
} as const;

const tools: Tool[] = Object.entries(toolDefinitions).map(([name, config]) => ({
    type: "function",
    name,
    description: config.description,
    parameters: {
        type: 'object',
        properties: config.parameters
    }
}));


export type { Tool };
export { tools };