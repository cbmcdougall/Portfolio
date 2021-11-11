import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import './style.css';

export const About = () => {
    return (
        <main id="about">
            <section className="about-section" id="summary">
                <h1 className="about-article-header">About Me</h1>
                <p className="about-section-content">
                    Hey there, you've clicked onto the about page so you must wanna know about me! In short, i'm an astrophysics graduate with a curiosity to understand how things work. I have a keen eye for detail and i'm always yearning to learn more and improve my skills, knowledge, and to grow as a person overall!
                </p>
                <p className="about-section-content">
                    In my time orbiting the Sun on the planet we call Earth I have fallen in love with physics, coding, and music (playing multiple instruments in my free time over the years). Scroll down if you want to read more about my <a className="about-link" href="#journey">journey</a> through life or to read about my <a className="about-link" href="#hobbies">hobbies</a>.
                </p>
            </section>
            <article id="journey">
                <a className="about-link" href="#"><FontAwesomeIcon className="to-top" icon={faArrowAltCircleUp} size="2x" /></a>
                <h2 className="about-article-header">My Journey</h2>
                <section className="about-section" id="highschool">
                    <h3 className="about-section-header">Glenrothes High School (2009-2015)</h3>
                    <p className="about-section-content">
                        I've lived in Glenrothes for most of my life so far, first attending Rimbleton Primary School and then moving onto Glenrothes High School for secondary education. My favourite subjects from high school include physics, maths, music, computing, and graphic communication.
                    </p>
                </section>
                <section className="about-section" id="university">
                    <h3 className="about-section-header">University of St Andrews (2015-2020)</h3>
                    <p className="about-section-content">
                        Towards the end of high school I was uncertain about what I wanted to do in life. Ultimately it was my love of space and physics coupled with a curiosity to understand how things work that lead me to want to study astrophysics at university. So I went off to St Andrews to do a masters degree in astrophysics, finishing with a first-class degree outcome.
                    </p>
                </section>
                <section className="about-section" id="sitel">
                    <h3 className="about-section-header">Work Experience - Sitel (2020-2021)</h3>
                    <p className="about-section-content">
                        Not gonna lie, I came out of university burned out and not sure what I wanted to do with my life. I moved back home to Glenrothes and applied for jobs to cover my finances while I recovered and figured myself out. I wound up with a remote customer service role at Sitel, assisting Public Health England in the Test and Trace campaign during the covid pandemic.
                    </p>
                    <p className="about-section-content">
                        This was a fast-paced role where I constantly had to keep on top of the current government information and advice so that I could assist clients (and team members) with any queries., as well as constantly adjust to being moved between teams and workflows.
                    </p>
                </section>
                <section className="about-section" id="futureproof">
                    <h3 className="about-section-header">Training with futureproof (2021-Present)</h3>
                    <p className="about-section-content">
                        I enjoyed my time at Sitel, it helped me develop some of my communication and interpersonal skills and I made a few friends while there, however it wasn't what I wanted to do for a career. After thinking about it long and hard, I realised that while I never found any specific field within physics that I was super passionate about, the one thing I always enjoyed no-matter the context was coding.
                    </p>
                    <p className="about-section-content">
                        A career in technology is super interesting to me, there's always something to learn. Therefore I decided to apply to futureproof, where I am now training in full-stack software development! I've learned a bunch of interesting things and i'm excited to see where this step takes me in life.
                    </p>
                </section>
            </article>
            <article id="hobbies">
                <a className="about-link" href="#"><FontAwesomeIcon className="to-top" icon={faArrowAltCircleUp} size="2x" /></a>
                <h2 className="about-article-header">Hobbies</h2>
                <section className="about-section" id="gaming">
                    <h3 className="about-section-header">Gaming</h3>
                    <p className="about-section-content">
                        I grew up with a SNES, N64, Gameboy Color, and PS2 simultaneously so i've been playing games from various generations for a long time. Because of this, I have a lot of love for retro games, while also enjoying more modern games. Most of the time I tend to play RPGs or roguelikes.
                    </p>
                </section>
                <section className="about-section" id="music">
                    <h3 className="about-section-header">Music</h3>
                    <p className="about-section-content">
                        I've loved music since I was a kid, having begun learning to play the tenor horn in primary school. I continued to play all throughout high school, playing in my school's windband, up until around halfway through my university degree where I unfortunately stopped playing to focus more on studies. In my final university year however I decided to pick up an old electric guitar I had tucked away for years and began learning to play.
                    </p>
                    <p className="about-section-content">
                        Most of the time i'm playing music is with my guitar nowadays, but during high school I also played the xylophone which was super fun. I'm also pretty nifty at the kazoo and with whistling!
                    </p>
                </section>
                <section className="about-section" id="drawing">
                    <h3 className="about-section-header">Drawing</h3>
                    <p className="about-section-content">
                        Every once in a blue moon I like to draw. Majority of what I draw are emotes based off of the pokémon Bulbasaur (for example, the picture in the header of the page!), but have occasionally drawn other things for friends.
                    </p>
                </section>
            </article>
        </main>
    )
}