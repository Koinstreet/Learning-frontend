const allCourses = {
  data: [
    {
      id: 34387878,
      name: "Bitcoin crash course",
      authorName: "Gideon Nnalue",
      avatar:
        "https://courses.blockgeeks.com/wp-content/uploads/2019/06/crypto101.jpg",
      authorImg:
        "https://www.superprof.ng/images/teachers/teacher-home-face-yoga-online-classes-with-certified-teacher-anti-aging-techniques-for-complete-program-skin-care-and-facial-exercises.jpg",
      students: 3245,
      overviewVideo: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      courseOverview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Audience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      perequisites:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      learningList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      ],
      courseModules: [
        {
          id: 1,
          title: "Key Concepts: Part 1",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 2,
          title: "Key Concepts: Part 2",
          type: "video",
          content: "http://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 3,
          title: "Long and Short Postions",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 4,
          title: "What is Arbitrage?",
          type: "video",
          content: "http://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 5,
          title: "Range Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 6,
          title: "Day Trading",
          type: "video",
          content: "http://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 7,
          title: "Quiz: Test your knowledge",
          type: "quiz",
          content: {
            questions: [
              {
                quest: "What is a blockchain?",
                options: {
                  a: "Blocks tied together using unbreakable chains",
                  b: "A Buzzword ",
                  c: "New type of Legos",
                  d:
                    "An open decentralized database to record assets and transactions",
                },
                ans: "d",
              },
              {
                quest: "How do people send money today?",
                options: {
                  a: "Using 3rd Party such as a Bank",
                  b: "Using Peer to Peer networks",
                  c: "Cash by hand",
                  d: "All of the above",
                },
                ans: "d",
              },
              {
                quest: "What is a peer to peer network?",
                options: {
                  a:
                    "Network designed for two or more parties without a middleman",
                  b:
                    "A network of Student or Work Peers without other companies involved",
                  c: "A type of WIFI",
                  d: "None of the above",
                },
                ans: "a",
              },
              {
                quest:
                  "Who can participate in a public blockchain network, like Bitcoin?",
                options: {
                  a: "Anyone with access to the Internet",
                  b: "Anyone with a Bank account",
                  c: "Anyone selected and approved",
                  d: "No one",
                },
                ans: "a",
              },
              {
                quest: "Why are current financial systems wary of blockchain?",
                options: {
                  a: "They do not believe the technology is necessary",
                  b:
                    "New possibilities allow people to bypass the traditional financial system",
                  c: "The current financial system is perfect the way it is",
                  d: "They have bigger problems to worry about",
                },
                ans: "b",
              },
              {
                quest:
                  "How is trust different in blockchain systems in comparison to current systems?",
                options: {
                  a:
                    "Trust is coded in the software rather than given to a 3rd Parties",
                  b: "No difference between old systems and new systems",
                  c: "Trust is gained over a period of time",
                  d: "Humans are more trustworthy than computers",
                },
                ans: "a",
              },
              {
                quest: "How is a transaction verified?",
                options: {
                  a: "3rd Party Services",
                  b: "Humans record the transaction",
                  c:
                    "Computer’s solve a mathematical algorithm and share it with other computers",
                  d: "It does not get verified  ",
                },
                ans: "c",
              },
              {
                quest: "Who verifies transactions in the network?",
                options: {
                  a: "Humans",
                  b: "Computers on the network",
                  c: "No verification needed",
                  d: "Banks",
                },
                ans: "b",
              },
              {
                quest: "Who faces the most imminent danger of blockchain?",
                options: {
                  a: "Producers",
                  b: "Consumers",
                  c: "Robots",
                  d: "3rd Party Trust services",
                },
                ans: "d",
              },
              {
                quest: "What are the main benefits of blockchain technology?",
                options: {
                  a: "No Real benefit",
                  b: "Looks good on a resume",
                  c:
                    "Cheaper and more efficient way to record data and interact with assets",
                  d: "Cures cancer",
                },
                ans: "c",
              },
            ],
          },
        },
      ],
      viewedModules: [],
    },
    {
      id: 67884,
      name: "Bitcoin crash course",
      authorName: "Gideon Nnalue",
      avatar:
        "https://courses.blockgeeks.com/wp-content/uploads/2019/06/crypto101.jpg",
      authorImg:
        "https://www.superprof.ng/images/teachers/teacher-home-face-yoga-online-classes-with-certified-teacher-anti-aging-techniques-for-complete-program-skin-care-and-facial-exercises.jpg",
      students: 3245,
      overviewVideo: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      courseOverview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Audience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      perequisites:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      learningList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      ],
      courseModules: [
        {
          id: 1,
          title: "Key Concepts: Part 1",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 2,
          title: "Key Concepts: Part 2",
          type: "video",
          content: "http://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 3,
          title: "Long and Short Postions",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 4,
          title: "What is Arbitrage?",
          type: "video",
          content: "http://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 5,
          title: "Range Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 6,
          title: "Day Trading",
          type: "video",
          content: "http://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 7,
          title: "Quiz: Test your knowledge",
          type: "quiz",
          content: {
            questions: [
              {
                quest:
                  "The current financial system which is built and managed by humans, they tend to sometimes?",
                options: {
                  a: "thrive",
                  b: "fail",
                  c: "dance",
                  d: "sleep",
                },
                ans: "b",
              },
              {
                quest: "When was Bitcoin created?",
                options: {
                  a: "2007",
                  b: "2012",
                  c: "1999",
                  d: "2009",
                },
                ans: "d",
              },
              {
                quest:
                  "Using software we can now build new system on the internet that distributes the responsibility of 3rd party due dilignence onto computers. This enables the ability to write rules that can not be broken and altered by humans. The software used for these systems is called?",
                options: {
                  a: "Blockchain",
                  b: "Computers",
                  c: "Money",
                  d: "Land",
                },
                ans: "a",
              },
              {
                quest:
                  "Instead of having isolated control over networks, we can break down the isolation and distribute the control over all the participants in the network.By definition, engineers call this system?",
                options: {
                  a: "Distributed Ledger Technology",
                  b: "Distributed Long Terminal",
                  c: "Decentralised Ledger Tech",
                  d: "Decentralised Ledger Term",
                },
                ans: "a",
              },
            ],
          },
        },
      ],
      viewedModules: [],
    },
    {
      id: 99340,
      name: "Bitcoin crash course",
      authorName: "Gideon Nnalue",
      avatar:
        "https://courses.blockgeeks.com/wp-content/uploads/2019/06/crypto101.jpg",
      authorImg:
        "https://www.superprof.ng/images/teachers/teacher-home-face-yoga-online-classes-with-certified-teacher-anti-aging-techniques-for-complete-program-skin-care-and-facial-exercises.jpg",
      students: 3245,
      overviewVideo: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      courseOverview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Audience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      perequisites:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      learningList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      ],
      courseModules: [
        {
          id: 1,
          title: "Key Concepts: Part 1",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 2,
          title: "Key Concepts: Part 2",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 3,
          title: "Long and Short Postions",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 4,
          title: "What is Arbitrage?",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 5,
          title: "Range Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 6,
          title: "Day Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
      ],
      viewedModules: [],
    },
    {
      id: 98909,
      name: "Bitcoin crash course",
      authorName: "Gideon Nnalue",
      avatar:
        "https://courses.blockgeeks.com/wp-content/uploads/2019/06/crypto101.jpg",
      authorImg:
        "https://www.superprof.ng/images/teachers/teacher-home-face-yoga-online-classes-with-certified-teacher-anti-aging-techniques-for-complete-program-skin-care-and-facial-exercises.jpg",
      students: 3245,
      overviewVideo: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      courseOverview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Audience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      perequisites:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      learningList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      ],
      courseModules: [
        {
          id: 1,
          title: "Key Concepts: Part 1",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 2,
          title: "Key Concepts: Part 2",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 3,
          title: "Long and Short Postions",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 4,
          title: "What is Arbitrage?",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 5,
          title: "Range Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 6,
          title: "Day Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
      ],
      viewedModules: [],
    },
    {
      id: 566788,
      name: "Bitcoin crash course",
      authorName: "Gideon Nnalue",
      avatar:
        "https://courses.blockgeeks.com/wp-content/uploads/2019/06/crypto101.jpg",
      authorImg:
        "https://www.superprof.ng/images/teachers/teacher-home-face-yoga-online-classes-with-certified-teacher-anti-aging-techniques-for-complete-program-skin-care-and-facial-exercises.jpg",
      students: 3245,
      overviewVideo: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      courseOverview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Audience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      perequisites:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      learningList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      ],
      courseModules: [
        {
          id: 1,
          title: "Key Concepts: Part 1",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 2,
          title: "Key Concepts: Part 2",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 3,
          title: "Long and Short Postions",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 4,
          title: "What is Arbitrage?",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 5,
          title: "Range Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
        {
          id: 6,
          title: "Day Trading",
          type: "video",
          content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        },
      ],
      viewedModules: [],
    },
  ],
};

export default allCourses;
