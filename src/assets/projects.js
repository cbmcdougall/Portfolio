const importAllImages = r => {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const projectImages = importAllImages(require.context('./project-images', false, /\.(png|webp)$/));

export const projects = [
    {
        title: "Portfolio",
        image: projectImages["portfolio.png"],
        github: "https://github.com/cbmcdougall/Portfolio",
        deploy: "https://portfolio-calum.netlify.app/",
        description: "This portfolio website was built using React!"
    },
    {
        title: "Trabbit",
        image: projectImages["trabbit.png"],
        github: "https://github.com/olu-akano/Trabbit",
        deploy: "https://trabbit.netlify.app/",
        description: "A habit-tracking website with a Heroku-hosted Express server, MongoDB database hosted on Atlas, and authorisation/authentication implemented with BCrypt/JWT."
    },
    {
        title: "GitClone",
        image: projectImages["gitclone.png"],
        github: "https://github.com/cbmcdougall/GitClone",
        deploy: "https://git-clone-blog.netlify.app/",
        description: "An anonymous forum site project based off of GitHub, with a Heroku-hosted Express server."
    },
    {
        title: "Music App",
        image: projectImages["music-app.png"],
        github: "https://github.com/cbmcdougall/intro-to-react",
        deploy: "https://calum-music-react-app.netlify.app/",
        description: "A simple app about the metal band Amon Amarth I made to learn React."
    },
    {
        title: "ctrl+f",
        image: projectImages["ctrl-f.png"],
        github: "https://github.com/cbmcdougall/google-ripoff",
        deploy: "",
        description: "A google clone built during a 24-hour coding challenge."
    },
    {
        title: "Tamagotchi",
        image: projectImages["tamagotchi.png"],
        github: "https://github.com/cbmcdougall/Tamagotchi",
        deploy: "",
        description: "A simple tamagotchi-like game that runs in the CLI."
    }
]
