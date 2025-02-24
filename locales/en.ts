
// locales/en.ts

import { faLanguage, faCheck, faSchool, faBriefcase, faBookReader, faGraduationCap, faClipboardCheck, faHeartbeat, faLaptopCode, faArrowRight, faCheckCircle, faBrain, faSearch, faComments, faMicrophone, faUserCircle } from "@fortawesome/free-solid-svg-icons";

// locales/en.ts
export default {
  header: {
    Languages: {
      english: "English",
      french: "French"
    },
    navElement: {
      features: "Features",
      our_vision: "Our Vision",
      start_learning: "Start Learning"
    }
  },
  footer: {
    sections: {
      quick_links: "Quick Links",
      community: "Community",
    },
    links: {
      about: "About",
      join_us: "Join Us",
      ideation: "Ideation",
      hackathons: "Hackathons",
      members: "Members",
      connect: "Connect",
    },
    connect_with_us: "Connect With Us",
    all_rights_reserved: "All rights reserved.",
  },
  landngPage: {
    hero: {
      title: "Mentor Mind: AI-Powered Language Avatar Agent",
      descriptionParagraph: "Advanced language learning with AI-powered tutoring.",
      start_linkText: "Start Learning",
      github_linkText: "View on GitHub"
    },
    FeatureSection : {
      mentors : {
        title: " Specialized Mentors",
        subTitle: "Choose Your Mentor",
        description: "Select from our diverse range of expert mentors",
        mentorsCards: [
            {
                icon: faLanguage,
                title: "Language Mentor",
                description: "Master new languages with personalized guidance and conversation practice",
                lists: [
                    {
                        icon: faCheck,
                        text: "Real-time pronunciation feedback"
                    },
                    {
                        icon: faCheck,
                        text: "Interactive conversation practice"
                    },
                    {
                        icon: faCheck,
                        text: "Grammar and vocabulary building"
                    },
      
                ],
                type : "language",
      
      
      
            },
            {
                icon: faSchool,
                title: "High School Mentor",
                description: "Expert guidance for high school subjects and exam preparation",
                type : "highschool",
                lists: [
                    {
                        icon: faCheck,
                        text: "Subject-specific tutoring"
                    },
                    {
                        icon: faCheck,
                        text: "Exam preparation strategies"
                    },
                    {
                        icon: faCheck,
                        text: "Homework assistance"
                    },
      
                ],
      
      
      
            },
            {
                icon: faBriefcase,
                title: "Career Transition Mentor",
                description: "Expert guidance for career changes and professional developmen",
                type : "career-transition",
                lists: [
                    {
                        icon: faCheck,
                        text: "Resume and interview preparation"
                    },
                    {
                        icon: faCheck,
                        text: "Skill gap analysis and learning paths"
                    },
                    {
                        icon: faCheck,
                        text: "Industry-specific guidance"
                    },
      
                ],
      
      
      
            },
            {
                icon: faBookReader,
                title: "Intermediate Mentor",
                description: "Specialized support for intermediate level students and subjects",
                type : "intermediate",
                lists: [
                    {
                        icon: faCheck,
                        text: "Advanced concept explanations"
                    },
                    {
                        icon: faCheck,
                        text: "Practice problem solving"
                    },
                    {
                        icon: faCheck,
                        text: "Exam preparation techniques"
                    },
      
                ],
      
      
      
            },
            {
                icon: faGraduationCap,
                title: "College Mentor",
                description: "Advanced academic guidance for college students and research",
                type : "college",
                lists: [
                    {
                        icon: faCheck,
                        text: "Research methodology guidance"
                    },
                    {
                        icon: faCheck,
                        text: "Thesis development support"
                    },
                    {
                        icon: faCheck,
                        text: "Academic writing assistance"
                    },
      
                ],
      
      
      
            },
            {
                icon: faClipboardCheck,
                title: "Government Exam Mentor",
                type : "government-exam",
                description: "Specialized preparation for government exams and competitive tests",
                lists: [
                    {
                        icon: faCheck,
                        text: "Exam pattern analysis"
                    },
                    {
                        icon: faCheck,
                        text: "Mock test preparation"
                    },
                    {
                        icon: faCheck,
                        text: "Current affairs updates"
                    },
      
                ],
      
      
      
            },
            {
                icon: faHeartbeat,
                title: "Fitness & Nutrition Mentor",
                type : "fitness-nutrition",
                description: "Personalized guidance for health, fitness, and nutrition planning",
                lists: [
                    {
                        icon: faCheck,
                        text: "Customized workout plans"
                    },
                    {
                        icon: faCheck,
                        text: "Nutrition advice and meal planning"
                    },
                    {
                        icon: faCheck,
                        text: "Progress tracking and adjustments"
                    },
      
                ],
      
      
      
            },
            {
                icon: faLaptopCode,
                title: "Tech Interview Mentor",
                type : "tech-interview",
                description: "Comprehensive preparation for technical interviews at top tech companies",
                lists: [
                    {
                        icon: faCheck,
                        text: "Data Structures & Algorithms practice"
                    },
                    {
                        icon: faCheck,
                        text: "System Design discussions"
                    },
                    {
                        icon: faCheck,
                        text: "Mock interviews & feedback"
                    },
      
                ],
      
      
      
            },
        ],
        action: {
            icon: faArrowRight,
            text: " Start Learning"
        }
      },
      keyCapabilities : {
        title: "Key Capabilities",
        // description: "Enhance your learning experience with these powerful features",
        capabilities: [
            {
                icon: faCheckCircle,
                title: "Real-Time Pronunciation Feedback",
                description: "Instant correction and examples for mispronounced words with audio demonstrations",
      
            },
            {
                icon: faBrain,
                title: "Context Awareness",
                description: "Adapts to your learning style and remembers previous interactions for personalized learning",
      
            },
            {
                icon: faSearch,
                title: "Web Search Integration",
                description: "Access real-time information and resources from the web to enhance learning experience",
      
            },
        ],
      
      },
      coreFeatures : {
        title: "Core Features",
        description: "Three Powerful Modes",
        features: [
            {
                icon: faComments,
                title: "Chat Mode",
                description: "Natural text-based conversations with instant feedback and corrections",
            },
            {
                icon: faMicrophone,
                title: "Voice Mode",
                description: "Real-time pronunciation feedback using OpenAI's advanced speech recognition",
            },
            {
                icon: faUserCircle,
                title: "Avatar Mode",
                description: "Interactive learning with a visual AI avatar providing personalized guidance",
            },
        ],
      },

    },
    sectionFirst: {
      see_it_in_action: "See It In Action",
      watch_how_it_works: "Watch How It Works",
      core_features: "Core Features",
      powerful_modes: "Three Powerful Modes",
      chartMode_title : "Chat Mode",
      chartMode_desc: "Natural text-based conversations with instant feedback and corrections",
      voiceMode_title : "Voice Mode",
      voiceMode_desc : "Real-time pronunciation feedback using OpenAI's advanced speech recognition",
      avatarMode_title : "Avatar Mode",
      avatarMode_desc : "Interactive learning with a visual AI avatar providing personalized guidance",
      key_Capabilities : "Key Capabilities",
      Feedback_title : "Real-Time Pronunciation Feedback",
      Feedback_text : "Instant correction and examples for mispronounced words with audio demonstrations",
      context_Awareness : "Context Awareness",
      context_Awareness_desc : "Adapts to your learning style and remembers previous interactions for personalized learning"
    }
  }
} as const;


const mentors = {
  title: " Specialized Mentors",
  subTitle: "Choose Your Mentor",
  description: "Select from our diverse range of expert mentors",
  mentorsCards: [
      {
          icon: faLanguage,
          title: "Language Mentor",
          description: "Master new languages with personalized guidance and conversation practice",
          lists: [
              {
                  icon: faCheck,
                  text: "Real-time pronunciation feedback"
              },
              {
                  icon: faCheck,
                  text: "Interactive conversation practice"
              },
              {
                  icon: faCheck,
                  text: "Grammar and vocabulary building"
              },

          ],
          type : "language",



      },
      {
          icon: faSchool,
          title: "High School Mentor",
          description: "Expert guidance for high school subjects and exam preparation",
          type : "highschool",
          lists: [
              {
                  icon: faCheck,
                  text: "Subject-specific tutoring"
              },
              {
                  icon: faCheck,
                  text: "Exam preparation strategies"
              },
              {
                  icon: faCheck,
                  text: "Homework assistance"
              },

          ],



      },
      {
          icon: faBriefcase,
          title: "Career Transition Mentor",
          description: "Expert guidance for career changes and professional developmen",
          type : "career-transition",
          lists: [
              {
                  icon: faCheck,
                  text: "Resume and interview preparation"
              },
              {
                  icon: faCheck,
                  text: "Skill gap analysis and learning paths"
              },
              {
                  icon: faCheck,
                  text: "Industry-specific guidance"
              },

          ],



      },
      {
          icon: faBookReader,
          title: "Intermediate Mentor",
          description: "Specialized support for intermediate level students and subjects",
          type : "intermediate",
          lists: [
              {
                  icon: faCheck,
                  text: "Advanced concept explanations"
              },
              {
                  icon: faCheck,
                  text: "Practice problem solving"
              },
              {
                  icon: faCheck,
                  text: "Exam preparation techniques"
              },

          ],



      },
      {
          icon: faGraduationCap,
          title: "College Mentor",
          description: "Advanced academic guidance for college students and research",
          type : "college",
          lists: [
              {
                  icon: faCheck,
                  text: "Research methodology guidance"
              },
              {
                  icon: faCheck,
                  text: "Thesis development support"
              },
              {
                  icon: faCheck,
                  text: "Academic writing assistance"
              },

          ],



      },
      {
          icon: faClipboardCheck,
          title: "Government Exam Mentor",
          type : "government-exam",
          description: "Specialized preparation for government exams and competitive tests",
          lists: [
              {
                  icon: faCheck,
                  text: "Exam pattern analysis"
              },
              {
                  icon: faCheck,
                  text: "Mock test preparation"
              },
              {
                  icon: faCheck,
                  text: "Current affairs updates"
              },

          ],



      },
      {
          icon: faHeartbeat,
          title: "Fitness & Nutrition Mentor",
          type : "fitness-nutrition",
          description: "Personalized guidance for health, fitness, and nutrition planning",
          lists: [
              {
                  icon: faCheck,
                  text: "Customized workout plans"
              },
              {
                  icon: faCheck,
                  text: "Nutrition advice and meal planning"
              },
              {
                  icon: faCheck,
                  text: "Progress tracking and adjustments"
              },

          ],



      },
      {
          icon: faLaptopCode,
          title: "Tech Interview Mentor",
          type : "tech-interview",
          description: "Comprehensive preparation for technical interviews at top tech companies",
          lists: [
              {
                  icon: faCheck,
                  text: "Data Structures & Algorithms practice"
              },
              {
                  icon: faCheck,
                  text: "System Design discussions"
              },
              {
                  icon: faCheck,
                  text: "Mock interviews & feedback"
              },

          ],



      },
  ],
  action: {
      icon: faArrowRight,
      text: " Start Learning"
  }
}

// 
const keyCapabilities = {
  title: "Key Capabilities",
  // description: "Enhance your learning experience with these powerful features",
  capabilities: [
      {
          icon: faCheckCircle,
          title: "Real-Time Pronunciation Feedback",
          description: "Instant correction and examples for mispronounced words with audio demonstrations",

      },
      {
          icon: faBrain,
          title: "Context Awareness",
          description: "Adapts to your learning style and remembers previous interactions for personalized learning",

      },
      {
          icon: faSearch,
          title: "Web Search Integration",
          description: "Access real-time information and resources from the web to enhance learning experience",

      },
  ],

};
// 
const coreFeatures = {
  title: "Core Features",
  description: "Three Powerful Modes",
  features: [
      {
          icon: faComments,
          title: "Chat Mode",
          description: "Natural text-based conversations with instant feedback and corrections",
      },
      {
          icon: faMicrophone,
          title: "Voice Mode",
          description: "Real-time pronunciation feedback using OpenAI's advanced speech recognition",
      },
      {
          icon: faUserCircle,
          title: "Avatar Mode",
          description: "Interactive learning with a visual AI avatar providing personalized guidance",
      },
  ],
};