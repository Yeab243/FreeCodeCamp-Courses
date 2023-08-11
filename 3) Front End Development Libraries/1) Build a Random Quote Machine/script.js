import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
  { text: `“In football [soccer], the result is an impostor. You can do things really, really well but not win. There’s something greater than the result, more lasting — a legacy.”`, author: "Xavi" },
  { text: `“Life is what happens when you’re busy making other plans.”`, author: "John Lennon" },
  { text: `“Life is full of regrets, but it doesn't pay to look back.”`, author: "Zinedine Zidane" },
  { text: `“When you win, you don't get carried away. But if you go step by step, with confidence, you can go far.”`, author: "Diego Maradona" },
  { text: `“Success is no accident. It is hard work, perseverance, learning, studying,sacrifice, and most of all, love of what you are doing or learning to do.”`, author: "Pele" },
  { text: `“You owe it to yourself to be the best you can be”`, author: "Christian Pulisic" }, 
  { text: `“I don't have time for hobbies. At the end of the day, I treat my job as a hobby. It's something I love doing.”`, author: "David Beckham" },  
  { text: `“I am not a perfectionist, but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve, not only to please the coach and the fans but also to feel satisfied with myself. It is my conviction that there are no limits to learning and that it can never stop, no matter what our age.”`, author: "Cristiano Ronaldo" },
  { text: `“Something deep in my character allows me to take the hits and get on with trying to win.”`, author: "Lionel Messi" },
  { text: ` “I made many mistakes, but I learn(ed) from everything. I still make mistakes; I still learn from them. Nobody is perfect.”`, author: "Zlatan Ibrahimovic" },
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>  
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button 
        id="new-quote" 
        class="button"
        onClick={handleNewQuote} 
        >
        New Quote
      </button>
      <a 
         href="https://twitter.com/intent/tweet" target="_top"
         id="tweet-quote"
         target="_blank"
       >
         Tweet
      </a>
    </div>
  </div>
);

const getRandomIndex = (max) => 
  Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }

  return (
    <div class="main">
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));

