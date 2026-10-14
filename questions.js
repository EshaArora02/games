const DEFAULT_CATEGORIES = [
    {
        id:'seashell',
        name:'Seashell',
        points:10,
        color:'#d7c3a3'
    },
    {
        id:'pearl',
        name:'Pearl',
        points:15,
        color:'#f1ece4'
    },
    {
        id:'coral',
        name:'Coral',
        points:30,
        color:'#f4b3a7'
    },
    {
        id:'rare',
        name:'rare',
        points:60,
        color:'#ffb56b'
    },
    {
        id:'treasure',
        name:'Treasure',
        points:85,
        color:'#e2c46f'
    },
    {
        id:'heart-ocean',
        name:'Heart of the Ocean',
        points:100,
        color:'#8dd8ff'
    }
];

const DEMO = {
    format: 'deep-dive',
    version: 2,
    title: 'LOVE DIVE',
    description: 'Seven questions. Seven little trips down memory lane.',
    seconds: 25,

    categories: DEFAULT_CATEGORIES,

    questions: [
        {
            prompt: 'What is my favourite thing about you?',
            answers: [
                {
                    text: 'Your kindness',
                    category: 'seashell',
                    aliases: [
                        'youre kind',
                        'your kind',
                        'kindness',
                        'being kind',
                        'kind',
                    ]
                },

                {
                    text: 'Your smile',
                    category: 'pearl',
                    aliases: [
                        'youre smile',
                        'your smile',
                        'smile'
                    ]
                },

                {
                    text: 'How supportive you are',
                    category: 'coral',
                    aliases: [
                        'supportive',
                        'your support',
                        'how supportive',
                        'you support me'
                    ]
                },

                {
                    text: 'Your patience',
                    category: 'rare',
                    aliases: [
                        'patience',
                        'youre patient',
                        'your patience',
                        'how patient you are'
                    ]
                },

                {
                    text: 'Your caring nature',
                    category: 'treasure',
                    aliases: [
                        'youre caring',
                        'your caring',
                        'caring',
                        'how caring you are'
                    ]
                },

                {
                    text: 'How safe you make me feel',
                    category: 'heart-ocean',
                    aliases: [
                        'safe',
                        'you make me feel safe',
                        'how safe i feel',
                        'feeling safe',
                        'safe with you'
                    ]
                }
            ]
        },

        {
            prompt: "What is something about our future that I'm most excited for?",
            answers: [
                {
                    text: "Travelling the world together",
                    category: "seashell",
                    aliases: [
                        "travel",
                        "travelling together",
                        "traveling together",
                        "exploring the world",
                        "going on holidays together",
                        "holidays",
                        "seeing the world together"
                    ]
                },
                {
                    text: "Going on more adventures together",
                    category: "pearl",
                    aliases: [
                        "adventures",
                        "more adventures",
                        "doing things together",
                        "experiencing new things",
                        "making memories",
                        "making more memories"
                    ]
                },
                {
                    text: "Building a life together",
                    category: "coral",
                    aliases: [
                        "our life together",
                        "building our life",
                        "a life together",
                        "our future together",
                        "spending my life with you",
                        "growing together"
                    ]
                },
                {
                    text: "Having a home together",
                    category: "rare",
                    aliases: [
                        "our home",
                        "living together",
                        "moving in together",
                        "setting up a home",
                        "our own place",
                        "decorating our home",
                        "coming home to you"
                    ]
                },
                {
                    text: "All the little everyday moments with you",
                    category: "treasure",
                    aliases: [
                        "everyday life",
                        "the little things",
                        "doing nothing together",
                        "waking up next to you",
                        "falling asleep next to you",
                        "spending every day together",
                        "ordinary moments together"
                    ]
                },
                {
                    text: "Everything, as long as it's with you",
                    category: "heart-ocean",
                    aliases: [
                        "everything",
                        "all of it",
                        "everything with you",
                        "anything with you",
                        "our whole future",
                        "a future with you",
                        "as long as im with you",
                        "as long as its with you",
                        "all of the above",
                        "all of them",
                        "just you",
                        "being with you forever"
                    ]
                }
            ]
        },

        {
            prompt: "Something I miss when we're apart",
            answers: [
                {
                    text: "Just having you around",
                    category: "seashell",
                    aliases: [
                        "you",
                        "everything about you",
                        "your presence",
                        "having you around",
                        "being around you",
                        "being with you",
                        "your company"
                    ]
                },
                {
                    text: "Your laugh",
                    category: "pearl",
                    aliases: [
                        "your laugh",
                        "your laughter",
                        "hearing you laugh",
                        "your giggle",
                        "your cute laugh"
                    ]
                },
                {
                    text: "Our time together",
                    category: "coral",
                    aliases: [
                        "time",
                        "our time",
                        "time together",
                        "spending time together",
                        "being together",
                        "our quality time"
                    ]
                },
                {
                    text: "You poking me",
                    category: "rare",
                    aliases: [
                        "poking me",
                        "you poking me",
                        "when you poke me",
                        "your pokes",
                        "you annoying me",
                        "you bothering me"
                    ]
                },
                {
                    text: "You rage baiting me",
                    category: "treasure",
                    aliases: [
                        "rage baiting",
                        "ragebaiting",
                        "you rage baiting me",
                        "when you rage bait me",
                        "you annoying me on purpose",
                        "you winding me up",
                        "you teasing me"
                    ]
                },
                {
                    text: "Everything",
                    category: "heart-ocean",
                    aliases: [
                        "everything",
                        "all of you",
                        "everything about you",
                        "all the little things",
                        "all of it",
                        "your everything",
                        "just you",
                        "being with you",
                        "all the little things you do"
                    ]
                }
            ]
        },

        {
            prompt: "One thing you do that always makes me smile",
            answers: [
                {
                    text: "When you surprise me",
                    category: "seashell",
                    aliases: [
                        "surprise me",
                        "surprising me",
                        "your surprises",
                        "when you do something unexpected",
                        "little surprises",
                        "surprise dates"
                    ]
                },
                {
                    text: "When you listen to me",
                    category: "pearl",
                    aliases: [
                        "listen to me",
                        "listening to me",
                        "when you listen",
                        "you hearing me out",
                        "paying attention to me",
                        "when you pay attention"
                    ]
                },
                {
                    text: "When you laugh and get all giddy",
                    category: "coral",
                    aliases: [
                        "your laugh",
                        "when you laugh",
                        "when you get giddy",
                        "you getting giddy",
                        "your giggles",
                        "when youre excited",
                        "your happy laugh"
                    ]
                },
                {
                    text: "When you tease me",
                    category: "rare",
                    aliases: [
                        "teasing me",
                        "when you tease me",
                        "you annoying me",
                        "when you annoy me",
                        "you messing with me",
                        "your silly jokes",
                        "when you wind me up"
                    ]
                },
                {
                    text: "When you do little things to make me happy",
                    category: "treasure",
                    aliases: [
                        "little things",
                        "the little things you do",
                        "doing things for me",
                        "making me happy",
                        "your little gestures",
                        "when youre thoughtful",
                        "your thoughtfulness"
                    ]
                },
                {
                    text: "Just being yourself",
                    category: "heart-ocean",
                    aliases: [
                        "being yourself",
                        "just you",
                        "you being you",
                        "everything you do",
                        "your existence",
                        "everything",
                        "all of you",
                        "just having you",
                        "being around you"
                    ]
                }
            ]
        },

        {
            prompt: "My favourite memory with you",
            answers: [
                {
                    text: "Our first date",
                    category: "seashell",
                    aliases: [
                        "first date",
                        "our first date",
                        "when we first went out",
                        "our first outing",
                        "the first time we went on a date"
                    ]
                },
                {
                    text: "Going to Taronga Zoo",
                    category: "pearl",
                    aliases: [
                        "taronga zoo",
                        "the zoo",
                        "our zoo date",
                        "going to the zoo",
                        "the taronga trip"
                    ]
                },
                {
                    text: "Our Bowral tiny home trip",
                    category: "coral",
                    aliases: [
                        "bowral",
                        "the tiny home",
                        "bowral tiny home",
                        "our bowral trip",
                        "the tiny house",
                        "our tiny home trip",
                        "staying in the tiny home"
                    ]
                },
                {
                    text: "Laying in bed doing absolutely nothing",
                    category: "rare",
                    aliases: [
                        "laying in bed",
                        "lying in bed",
                        "doing nothing",
                        "doing nothing together",
                        "bed together",
                        "being lazy together",
                        "laying around",
                        "cuddling in bed"
                    ]
                },
                {
                    text: "All our silly little moments",
                    category: "treasure",
                    aliases: [
                        "all our moments",
                        "all the little moments",
                        "all our memories",
                        "every little moment",
                        "all of them",
                        "every moment",
                        "all our time together"
                    ]
                },
                {
                    text: "Every memory, because they're all with you",
                    category: "heart-ocean",
                    aliases: [
                        "all of them",
                        "all of it",
                        "every memory",
                        "all our memories",
                        "all of our memories",
                        "every single one",
                        "all of them with you",
                        "i cant choose",
                        "i cant pick one",
                        "every moment with you",
                        "all memories with you"
                    ]
                }
            ]
        },

        {
            prompt: "What do I admire most about you?",
            answers: [
                {
                    text: "Your determination",
                    category: "seashell",
                    aliases: [
                        "determination",
                        "your drive",
                        "how determined you are",
                        "your motivation",
                        "your ambition",
                        "how hard you work",
                        "your work ethic"
                    ]
                },
                {
                    text: "How much you care about others",
                    category: "pearl",
                    aliases: [
                        "how much you care",
                        "your caring nature",
                        "how caring you are",
                        "your kindness",
                        "how kind you are",
                        "your compassion",
                        "how you care for others"
                    ]
                },
                {
                    text: "How much you do for the people you love",
                    category: "coral",
                    aliases: [
                        "everything you do for others",
                        "what you do for people",
                        "how much you do for me",
                        "how much you do for everyone",
                        "how giving you are",
                        "how you show up for people",
                        "your selflessness"
                    ]
                },
                {
                    text: "How hard you work for what you want",
                    category: "rare",
                    aliases: [
                        "how hard you work",
                        "your hard work",
                        "your dedication",
                        "how dedicated you are",
                        "your perseverance",
                        "how you never give up",
                        "your commitment"
                    ]
                },
                {
                    text: "The person you are",
                    category: "treasure",
                    aliases: [
                        "who you are",
                        "your character",
                        "your personality",
                        "the person youve become",
                        "everything about you",
                        "your heart",
                        "the man you are"
                    ]
                },
                {
                    text: "Everything about you",
                    category: "heart-ocean",
                    aliases: [
                        "everything",
                        "all of you",
                        "everything about you",
                        "every part of you",
                        "the whole of you",
                        "all your qualities",
                        "everything you are",
                        "i admire everything about you"
                    ]
                }
            ]
        },

        {
            prompt: "How much do I love you?",
            answers: [
                {
                    text: "A little bit",
                    category: "seashell",
                    aliases: [
                        "a little",
                        "a little bit",
                        "not much",
                        "just a little",
                        "a tiny bit",
                        "barely"
                    ]
                },
                {
                    text: "Enough",
                    category: "pearl",
                    aliases: [
                        "enough",
                        "more than enough",
                        "a lot",
                        "quite a lot"
                    ]
                },
                {
                    text: "So much",
                    category: "coral",
                    aliases: [
                        "so much",
                        "a whole lot",
                        "heaps",
                        "lots",
                        "lots and lots",
                        "a ridiculous amount",
                        "more than you know"
                    ]
                },
                {
                    text: "Too much",
                    category: "rare",
                    aliases: [
                        "too much",
                        "way too much",
                        "an unhealthy amount",
                        "an unreasonable amount",
                        "obsessively",
                        "more than i should",
                        "more than is normal"
                    ]
                },
                {
                    text: "More than words can explain",
                    category: "treasure",
                    aliases: [
                        "more than words",
                        "more than words can say",
                        "more than i can explain",
                        "more than you know",
                        "more than anything",
                        "beyond words",
                        "immeasurably",
                        "more than anything in the world"
                    ]
                },
                {
                    text: "Infinitely",
                    category: "heart-ocean",
                    aliases: [
                        "infinite",
                        "infinitely",
                        "forever",
                        "endlessly",
                        "infinity",
                        "forever and always",
                        "to infinity and beyond",
                        "an infinite amount",
                        "more than infinity",
                        "without limits",
                        "limitlessly",
                        "forever times infinity"
                    ]
                }
            ]
        }
    ]
};