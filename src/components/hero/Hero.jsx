import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <div className="video-section">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/grUzHre1ArQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Project Mbappe"
                ></iframe>
            </div>
            <div className="text-section">
                <h5>Football</h5>
                <br />
                <h3>Why I think project Mbappe is such a great idea</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere eum dolore odit, suscipit eos rem quos nisi obcaecati repellat quasi qui optio aperiam asperiores iure ea, quibusdam quaerat cum!</p>
            </div>
        </div>
    )
}

export default Hero