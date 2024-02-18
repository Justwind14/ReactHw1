import monkey from './obeziany.jpg';
import './App.css';
import Message from "./Message";

function App() {
    const funFact1 = 'Как и люди, гориллы и шимпанзе обладают уникальными отпечатками пальцев.\n' +
        '                Единственный другой вид животных, у которого есть отпечатки пальцев, - это коала.';
    const funFact2 = ' крики обезьян-ревунов иногда можно услышать за 3 мили! '
  return (
      <div className="App">
          <header className="App-header">
              <img src={monkey} className="App-picture" alt="monkey"/>
              <a href={'#'}>
                  Let's make homeworks great again
              </a>
          </header>
          <h1>ИНТЕРЕСНЫЕ ФАКТЫ</h1>
          <Message text={funFact1}/>
          <Message text={funFact2}/>
      </div>
  );
}

export default App;
