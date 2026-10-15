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
    prompt: "What's something about you that I would immediately recognise anywhere?",
    answers: [
        {
            text: "Your voice",
            category: "seashell",
            aliases: [
                "your voice",
                "the sound of your voice",
                "hearing your voice",
                "your talking",
								"voice"
            ]
        },
        {
            text: "Your mannerisms",
            category: "pearl",
            aliases: [
                "your mannerisms",
                "your eyebrow raise",
                "raising your eyebrows",
                "your wide open mouth expression",
                "your wide-open-mouth face",
                "the face you make when mocking me",
                "your pointing",
                "pointing with your fingers",
                "the way you point",
                "your gestures",
                "your facial expressions"
            ]
        },
        {
            text: "Your head tilt when you look at me",
            category: "coral",
            aliases: [
                "head tilt",
                "the way you tilt your head",
                "tilting your head at me",
                "your head tilt when you look at me",
                "the way you look at me",
                "when you tilt your head"
            ]
        },
        {
            text: 'Your sense of "humour"',
            category: "rare",
            aliases: [
                "your humour",
                "your humor",
                "your sense of humour",
                "your sense of humor",
                "your jokes",
                "your terrible jokes",
                "how funny you think you are",
                "your questionable humour"
            ]
        },
        {
            text: "SuperCoach",
            category: "treasure",
            aliases: [
                "supercoach",
                "super coach",
                "your supercoach",
                "your obsession with supercoach",
                "talking about supercoach",
                "fantasy",
							  "fantasy football"
            ]
        },
        {
            text: "Everything about you",
            category: "heart-ocean",
            aliases: [
                "everything",
                "everything about you",
                "all of you",
                "your whole personality",
                "all your little quirks",
                "your voice and mannerisms",
                "just you"
            ]
        }
    ]
},

{
    prompt: "What's something we do that would look ridiculous to other people?",
    answers: [
        {
            text: "Everything",
            category: "seashell",
            aliases: [
                "everything",
                "all of it",
                "all the things we do",
                "everything we do",
                "us",
                "all of us"
            ]
        },
        {
            text: "The finger thing",
            category: "pearl",
            aliases: [
                "the finger thing",
                "our finger thing",
                "the fingers",
                "our fingers",
                "pointing at each other",
                "the hand thing",
                "finger"
            ]
        },
        {
            text: "Comrad",
            category: "coral",
            aliases: [
                "comrad",
                "comrade",
                "our comrad thing",
                "calling each other comrad",
                "the comrad thing"
            ]
        },
        {
            text: "Mutual braincell",
            category: "rare",
            aliases: [
                "mutual braincell",
                "our mutual braincell",
                "sharing one braincell",
                "one braincell",
                "shared braincell",
                "no braincells",
                "we share a braincell"
            ]
        },
        {
            text: "Inability to act normal",
            category: "treasure",
            aliases: [
                "inability to act normal",
                "not being able to act normal",
                "our inability to act normal",
                "we can't act normal",
                "we cannot act normal",
                "being weird together",
                "being stupid together",
                "acting ridiculous",
                "being unserious"
            ]
        },
        {
            text: "Just us existing as us",
            category: "heart-ocean",
            aliases: [
                "just us existing as us",
                "just us",
                "us existing",
                "us being us",
                "just being ourselves",
                "existing as us",
                "our existence",
                "just our existence",
                "being together",
                "everything about us"
            ]
        }
    ]
},        

{
    prompt: "What's something you do that I find funnier than it actually is?",
    answers: [
        {
            text: "Your stupid jokes",
            category: "seashell",
            aliases: [
                "stupid jokes",
                "your stupid jokes",
                "your jokes",
                "your silly jokes",
                "your bad jokes",
                "your dad jokes",
                "your attempts at being funny",
                "your humour",
                "your humor"
            ]
        },
        {
            text: "When you make fun of me",
            category: "pearl",
            aliases: [
                "making fun of me",
                "when you make fun of me",
                "teasing me",
                "when you tease me",
                "bullying me",
                "when you bully me",
                "mocking me",
                "when you mock me",
                "making fun of me",
                "your teasing"
            ]
        },
        {
            text: "When you attempt to annoy me",
            category: "coral",
            aliases: [
                "attempting to annoy me",
                "when you try to annoy me",
                "trying to annoy me",
                "annoying me",
                "when you annoy me",
                "ragebait",
                "rage bait",
                "ragebaiting",
                "rage baiting me",
                "when you rage bait me",
                "winding me up",
                "bothering me"
            ]
        },
        {
            text: "Nothing",
            category: "rare",
            aliases: [
                "nothing",
                "nothing at all",
                "none",
                "nothing you do",
                "absolutely nothing",
                "you're not funny",
                "you are not funny",
                "ur not funny"
            ]
        },
        {
            text: "Nothing",
            category: "treasure",
            aliases: [
                "nothing",
                "nothing at all",
                "none",
                "nothing you do",
                "absolutely nothing",
                "you're not funny",
                "you are not funny",
                "ur not funny"
            ]
        },
        {
            text: "Nothing, you're not that funny",
            category: "heart-ocean",
            aliases: [
                "nothing, you're not that funny",
                "nothing you're not that funny",
                "nothing, ur not that funny",
                "nothing ur not that funny",
                "ur not that funny",
                "you're not that funny",
                "you are not that funny",
                "nothing",
                "absolutely nothing",
                "you're not funny",
                "you are not funny",
                "not funny",
                "nothing at all"
            ]
        }
    ]
},

{
    prompt: "Which of our dates do I think was the most fun?",
    answers: [
        {
            text: "Our first date",
            category: "seashell",
            aliases: [
                "first date",
                "our first date",
                "the first date",
                "drinks",
                "going for drinks",
                "city",
                "drinks in the city",
                "our city date",
                "first time going out together"
            ]
        },
        {
            text: "Three Wise Monkeys",
            category: "pearl",
            aliases: [
                "three wise monkeys",
                "threewise monkey",
                "three wise monkey",
                "raf saperra",
                "sanct",
                "three wise monkeys and sanct",
                "the raf saperra date",
                "the sanct date"
            ]
        },
        {
            text: "Our Bowral staycation",
            category: "coral",
            aliases: [
                "bowral",
                "our bowral trip",
                "bowral staycation",
                "staycation",
                "the staycation",
                "mini home",
                "minihome",
                "tiny home",
                "tiny house",
                "the highlands",
                "southern highlands",
                "the cows",
                "the farm",
                "lego",
                "the flowers",
                "cows and flowers",
                "our tiny home trip"
            ]
        },
        {
            text: "Our Bay Run date",
            category: "rare",
            aliases: [
                "bay run",
                "bayrun",
                "the bay run",
                "the run",
                "running together",
                "our run",
                "acai",
                "açai",
                "acai bowls",
                "the walk",
                "our walk",
                "the bay run walk",
                "running and acai"
            ]
        },
        {
            text: "Our Crows Nest date",
            category: "treasure",
            aliases: [
                "crows nest",
                "crow's nest",
                "crowsnest",
                "the massage",
                "massage",
                "getting a massage",
                "blues point",
                "bluespoint",
                "kurtosh",
                "kürtősh",
                "the kurtosh date",
                "blues point and kurtosh",
                "massage and kurtosh"
            ]
        },
        {
            text: "Mini golf",
            category: "heart-ocean",
            aliases: [
                "mini golf",
                "minigolf",
                "mini-golf",
                "playing mini golf",
                "our mini golf date",
                "the mini golf date",
                "golf",
                "putt putt",
                "putt-putt"
            ]
        }
    ]
},
	
{
    prompt: "What's a moment with me that I think you were being especially cute?",
    answers: [
        {
            text: "When we're doing nothing and you just look at me",
            category: "seashell",
            aliases: [
                "when we're doing nothing and you just look at me",
                "when we are doing nothing and you just look at me",
                "when we're doing nothing",
                "when you look at me",
                "when you stare at me",
                "when we're lying around and you look at me",
                "when you look at me for no reason",
                "just looking at me",
                "when we're doing nothing together"
            ]
        },
        {
            text: "When you shower me with kisses",
            category: "pearl",
            aliases: [
                "shower me with kisses",
                "when you shower me with kisses",
                "when you kiss me lots",
                "when you give me lots of kisses",
                "when you kiss me all over",
                "lots of kisses",
                "when you're kissing me",
                "when you smother me with kisses"
            ]
        },
        {
            text: "When you're all giddy and happy",
            category: "coral",
            aliases: [
                "when you're all giddy and happy",
                "when you are all giddy and happy",
                "when you're giddy",
                "when you're happy",
                "when you get all giddy",
                "when you're excited and happy",
                "when you're in a good mood",
                "when you're all smiley",
                "when you get all happy"
            ]
        },
        {
            text: "When you laugh so much you can't control yourself",
            category: "rare",
            aliases: [
                "when you laugh so much you can't control yourself",
                "when you laugh so much you cant control yourself",
                "your laugh attack",
                "when you have a laugh attack",
                "laugh attacks",
                "when you can't stop laughing",
                "when you cannot stop laughing",
                "when you laugh uncontrollably",
                "when you lose it laughing",
                "when you laugh really hard",
                "your uncontrollable laughter"
            ]
        },
        {
            text: "When you get excited about something and start yapping",
            category: "treasure",
            aliases: [
                "when you get excited about something and start yapping",
                "when you get excited and start yapping",
                "when you start yapping",
                "when you yap",
                "your yapping",
                "when you talk about something you're excited about",
                "when you talk about your interests",
                "when you get passionate about something",
                "when you ramble about things you like",
                "when you excitedly tell me things"
            ]
        },
        {
            text: "When you get sleepy and all soft",
            category: "heart-ocean",
            aliases: [
                "when you get sleepy and all soft",
                "when you're sleepy and soft",
                "when you get sleepy",
                "when you're sleepy",
                "when you get all soft",
                "when you're all soft",
                "when you get cuddly when sleepy",
                "when you're sleepy and cuddly",
                "when you're tired and affectionate",
                "when you get all sleepy and cute",
                "when you're half asleep"
            ]
        }
    ]
},
			
{
    prompt: "What's something about you that I think you don't give yourself enough credit for?",
    answers: [
        {
            text: "Everything",
            category: "seashell",
            aliases: [
                "everything",
                "all of it",
                "all of you",
                "everything about you",
                "your whole self",
                "literally everything"
            ]
        },
        {
            text: "How hard you work",
            category: "pearl",
            aliases: [
                "how hard you work",
                "your hard work",
                "your work ethic",
                "how much you work",
                "your dedication",
                "how hard you try",
                "your effort",
                "how much effort you put in"
            ]
        },
        {
            text: "How much you care",
            category: "coral",
            aliases: [
                "how much you care",
                "how caring you are",
                "your caring nature",
                "how much you care about others",
                "how much you care about people",
                "your kindness",
                "your compassion",
                "your big heart"
            ]
        },
        {
            text: "How capable you are",
            category: "rare",
            aliases: [
                "how capable you are",
                "your capabilities",
                "what you're capable of",
                "how capable you can be",
                "how smart you are",
                "your intelligence",
                "your abilities",
                "how talented you are"
            ]
        },
        {
            text: "The person you are",
            category: "treasure",
            aliases: [
                "the person you are",
                "who you are",
                "your character",
                "your personality",
                "the person you've become",
                "the man you are",
                "your qualities",
                "the kind of person you are"
            ]
        },
        {
            text: "How much you mean to the people around you",
            category: "heart-ocean",
            aliases: [
                "how much you mean to the people around you",
                "how much you mean to people",
                "how much you mean to others",
                "how important you are to people",
                "how much people care about you",
                "how loved you are",
                "how appreciated you are",
                "your impact on others",
                "how many people love you"
            ]
        }
    ]
},
{
    prompt: "What's something you're weirdly particular about?",
    answers: [
        {
            text: "Inside / outside clothes",
            category: "seashell",
            aliases: [
                "inside outside clothes",
                "inside/outside clothes",
                "indoor and outdoor clothes",
                "inside clothes",
                "outside clothes",
                "changing clothes when you come inside",
                "having separate clothes for inside and outside",
                "what clothes you wear inside",
                "what clothes you wear outside",
							"clothes on bed"
            ]
        },
        {
            text: "Making the bed",
            category: "pearl",
            aliases: [
                "making the bed",
                "doing the bed",
                "the bed",
                "how the bed is made",
                "making sure the bed is made",
                "fixing the bed",
                "the way the bed looks",
                "bed making",
								"setting the bed"
            ]
        },
        {
            text: "Making a mess of the sink when you wash your hands",
            category: "coral",
            aliases: [
                "making a mess of the sink",
                "messing up the sink",
                "the sink",
                "splashing water everywhere",
                "getting water all over the sink",
                "making a mess when you wash your hands",
                "the mess you make washing your hands",
                "water everywhere when washing your hands",
                "washing your hands messily",
            ]
        },
        {
            text: "Always learning more and knowing how things work",
            category: "rare",
            aliases: [
                "always learning more",
                "knowing how things work",
                "learning how things work",
                "wanting to know everything",
                "being curious",
                "your curiosity",
                "learning new things",
                "understanding how things work",
                "figuring out how things work",
                "always wanting to learn",
                "wanting to understand everything"
            ]
        },
        {
            text: "Explaining concepts in simple ways",
            category: "treasure",
            aliases: [
                "explaining concepts in simple ways",
                "explaining things simply",
                "explaining things in simple terms",
                "making complicated things simple",
                "breaking down concepts",
                "simplifying things",
                "making things easy to understand",
                "explaining complicated concepts",
                "teaching people things",
                "making complex things understandable"
            ]
        },
        {
            text: "Sports",
            category: "heart-ocean",
            aliases: [
                "sports",
                "sport",
                "basketball",
                "the raptors",
                "raptors",
                "toronto raptors",
                "wests tigers",
                "west tigers",
                "the tigers",
                "nrl",
                "footy",
                "football",
                "rugby league",
                "basketball and footy",
                "the raptors and tigers",
                "following sports",
                "watching sports",
                "knowing everything about sports",
                "being particular about sports"
            ]
        }
    ]
}
    ]
};
