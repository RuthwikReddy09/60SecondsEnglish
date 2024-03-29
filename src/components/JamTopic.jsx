import React, { useState } from 'react'
import "../styles/JamTopic.css"
import video from "../../public/animation.gif"
const JamTopic = (props) => {
    const [topic,setTopic] = useState("Tell me about yourself?")
    const jamTopics = [
        "Tell me about yourself?",
        "What are your strengths and weaknesses?",
        "Why do you want to work for this company?",
        "The importance of education in society.",
        "Climate change and its effects.",
        "The benefits of reading books.",
        "The impact of social media on relationships.",
        "Leadership qualities and their significance.",
        "Discuss the importance of teamwork.",
        "The role of technology in our lives.",
        "How to overcome stage fright.",
        "Effective time management techniques.",
        "Discuss the pros and cons of remote work.",
        "The significance of cultural diversity.",
        "The power of positive thinking.",
        "Health benefits of regular exercise.",
        "Discuss the concept of globalization.",
        "The impact of video games on children.",
        "Overcoming challenges in life.",
        "The importance of family support.",
        "How to handle stress effectively.",
        "Discuss the ethics of artificial intelligence.",
        "The significance of volunteer work.",
        "The role of women in leadership.",
        "The importance of financial literacy.",
        "The impact of music on emotions.",
        "Discuss the concept of mindfulness.",
        "The benefits of learning a new language.",
        "The role of art in society.",
        "The impact of online shopping on traditional retail.",
        "Discuss the importance of mental health awareness.",
        "The challenges of climate change mitigation.",
        "The significance of renewable energy sources.",
        "The role of education in poverty alleviation.",
        "Discuss the future of space exploration.",
        "The importance of voting in a democracy.",
        "The impact of social media activism.",
        "Discuss the concept of gender equality.",
        "The role of sports in promoting health.",
        "The benefits of a balanced diet.",
        "Overcoming obstacles in achieving goals.",
        "The importance of lifelong learning.",
        "Discuss the concept of sustainable living.",
        "The impact of technology on privacy.",
        "The role of government in environmental protection.",
        "Discuss the benefits of travel.",
        "The significance of community service.",
        "The challenges of entrepreneurship.",
        "Discuss the concept of freedom of speech.",
        "The importance of empathy in society.",
        "The impact of plastic pollution on the environment.",
        "The role of education in shaping character.",
        "Discuss the benefits of meditation.",
        "The significance of cultural heritage preservation.",
        "The challenges of online learning.",
        "Discuss the future of renewable energy.",
        "The importance of early childhood education.",
        "The impact of social media on mental health.",
        "The role of art in promoting social change.",
        "Discuss the benefits of remote work.",
        "The significance of wildlife conservation.",
        "The challenges of globalization.",
        "Discuss the importance of critical thinking skills.",
        "The role of media in shaping public opinion.",
        "The impact of automation on employment.",
        "The benefits of laughter therapy.",
        "Discuss the concept of sustainable development.",
        "The importance of conflict resolution skills.",
        "The role of parents in child development.",
        "The impact of cyberbullying on adolescents.",
        "Discuss the benefits of renewable energy.",
        "The significance of cultural exchange programs.",
        "The challenges of maintaining work-life balance.",
        "Discuss the importance of social justice.",
        "The role of education in reducing inequality.",
        "The impact of fast fashion on the environment.",
        "The benefits of volunteering abroad.",
        "Discuss the concept of digital citizenship.",
        "The importance of early childhood nutrition.",
        "The role of social media influencers.",
        "The impact of globalization on cultural identity.",
        "The significance of emotional intelligence.",
        "Discuss the benefits of green living.",
        "The challenges of aging population.",
        "The role of education in promoting peace.",
        "The impact of automation on the job market.",
        "The benefits of community gardening.",
        "Discuss the concept of corporate social responsibility.",
        "The importance of renewable energy policies.",
        "The role of NGOs in sustainable development.",
        "The impact of deforestation on biodiversity.",
        "The benefits of organic farming.",
        "Discuss the concept of universal basic income.",
        "The importance of mental health support.",
        "The role of youth in social change.",
        "The impact of poverty on education.",
        "The benefits of clean energy technologies.",
        "Discuss the concept of food security.",
        "The importance of gender diversity in workplaces.",
        "The role of technology in disaster management.",
        "The impact of social isolation on mental health."
    ];

    const generateRandomTopic = () => {
        const randomIndex = Math.floor(Math.random() * jamTopics.length);
        setTopic(jamTopics[randomIndex]);
    };
  return (
    <div className='jam-container'>
        Topic : {topic}
        {props.started && (
         <img src={video}/>
        
        )}
        <button className="random-button" onClick={generateRandomTopic} disabled={props.started}>
            Generate Random Topic
        </button>
    </div>
  )
}

export default JamTopic