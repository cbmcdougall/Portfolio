const importAllImages = r => {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const technologyImages = importAllImages(require.context('./technology-images', false, /\.(png|webp)$/));

export const technologies = [
    {
        title: "HTML/CSS/JS",
        image: technologyImages["html-css-js.png"],
    },
    {
        title: "Python, fortran90, Mathematica, LaTeX",
        image: technologyImages["codefile.png"],
    },
    {
        title: "PostGreSQL",
        image: technologyImages["postgresql.png"],
    },
    {
        title: "MongoDB",
        image: technologyImages["mongodb.png"],
    },
    {
        title: "React",
        image: technologyImages["react.png"],
    },
    {
        title: "Jest",
        image: technologyImages["jest.png"],
    },
    {
        title: "Docker",
        image: technologyImages["docker.png"],
    },
    {
        title: "GitHub",
        image: technologyImages["github.png"],
    },
    {
        title: "Netlify",
        image: technologyImages["netlify.png"],
    },
    {
        title: "Heroku",
        image: technologyImages["heroku.png"],
    }
]
