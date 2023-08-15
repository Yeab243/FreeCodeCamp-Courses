import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const defaultContent = `
![Beautiful Sunset](https://c4.wallpaperflare.com/wallpaper/796/426/379/sunset-high-resolution-pictures-wallpaper-preview.jpg )

# Hello there! Welcome to Yeabsira's Markdown Previewer 
## The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela
### Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs
 

\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`


**If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron**

[Visit this site](https://www.youtube.com/live/jfKfPfyJRdk?feature=share)

> Whoever is happy will make others happy too. - Anne Frank


1. When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt
2. Life is what happens when you're busy making other plans. - John Lennon

`

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => 
  <textarea value={content} onChange={handleTextareaChange} id="editor" />

const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked.parse(content, { renderer: renderer })
    }}
  />
);

const App = ()=> {
  const [content, setContent] = React.useState(defaultContent)
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div class="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector("#app")); 


