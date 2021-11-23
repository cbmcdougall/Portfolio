import { importAllImages } from "./helpers";
const projectImages = importAllImages(require.context('./project-images', false, /\.(webp|webp)$/));

export const projects = [
    {
        title: "Portfolio",
        image: projectImages["portfolio.webp"],
        github: "https://github.com/cbmcdougall/Portfolio",
        deploy: "https://calum-mcdougall.netlify.app/",
        description: "This portfolio website was built using React!",
        collaborators: []
    },
    {
        title: "Trabbit",
        image: projectImages["trabbit.webp"],
        github: "https://github.com/olu-akano/Trabbit",
        deploy: "https://trabbit.netlify.app/",
        description: "A habit-tracking website with a Heroku-hosted Express server, MongoDB database hosted on Atlas, and authorisation/authentication implemented with BCrypt/JWT.",
        collaborators: [
            {
                name: "Robert",
                url: "https://robertsportfolio.netlify.app/"
            },
            {
                name: "Oluwaseun",
                url: "https://oluwaseun-portfolio.netlify.app/"
            },
            {
                name: "Golnar",
                url: "https://golnar-kaviani.netlify.app/"
            }
        ]
    },
    {
        title: "GitClone",
        image: projectImages["gitclone.webp"],
        github: "https://github.com/cbmcdougall/GitClone",
        deploy: "https://git-clone-blog.netlify.app/",
        description: "An anonymous forum site project based off of GitHub, with a Heroku-hosted Express server.",
        collaborators: [
            {
                name: "Saja",
                url: "https://saja-aabith.netlify.app/"
            },
            {
                name: "Zerh",
                url: "https://zerh-portfolio.netlify.app/"
            }
        ]
    },
    {
        title: "Music App",
        image: projectImages["music-app.webp"],
        github: "https://github.com/cbmcdougall/intro-to-react",
        deploy: "https://calum-music-react-app.netlify.app/",
        description: "A simple app about the metal band Amon Amarth I made to learn React.",
        collaborators: []
    },
    {
        title: "ctrl+f",
        image: projectImages["ctrl-f.webp"],
        github: "https://github.com/cbmcdougall/google-ripoff",
        deploy: "",
        description: "A google clone built with an Express server during a 24-hour coding challenge.",
        collaborators: [
            {
                name: "Katie",
                url: "https://katie-chedgzoy.netlify.app/"
            }
        ]
    },
    {
        title: "GitRepos",
        image: projectImages["gitrepos.webp"],
        github: "https://github.com/cbmcdougall/GitRepos",
        deploy: "https://gitrepo-tracker.netlify.app/",
        description: "A simple GitHub repository tracker made with React using the GitHub API. This was made for a 24-hour coding challenge",
        collaborators: [
            {
                name: "Hamsa",
                url: "https://hamsa-muxumed.vercel.app/"
            }
        ]
    },
    {
        title: "Kahnoot",
        image: projectImages["kahnoot.webp"],
        github: "https://github.com/jpxllington/kahnoot",
        deploy: "https://kahnoot.netlify.app/",
        description: "A trivia quiz game made using React & Redux, supporting online multiplayer via the use of websockets. Global leaderboards are stored in a Heroku-hosted PostgreSQL database.",
        collaborators: [
            {
                name: "Oluwaseun",
                url: "https://oluwaseun-portfolio.netlify.app/"
            },
            {
                name: "Golnar",
                url: "https://golnar-kaviani.netlify.app/"
            },
            {
                name: "James",
                url: "https://james-pollington-portfolio.netlify.app/"
            },
            {
                name: "Cameron",
                url: "https://camsgeneralportfolio99.netlify.app"
            }
        ]
    },
    {
        title: "Tamagotchi",
        image: projectImages["tamagotchi.webp"],
        github: "https://github.com/cbmcdougall/Tamagotchi",
        deploy: "",
        description: "A simple tamagotchi-like game in JS that runs in the CLI.",
        collaborators: []
    }
]
