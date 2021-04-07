import { h } from 'preact';
import WhatsappContainer from './Whatsapp/WhatsappContainer';

const UIGame = ({ scene, episode, makeChoice }) => {
  function handleClick (e) {
    const id = e.target.getAttribute('data-id');
    makeChoice(id);
  }
  
  // have a switch statement to handle other UIs

  return (
    <div>
      <WhatsappContainer episode={episode} scene={scene} />
       
      <ul>
        { scene.choices.map((c) => <li><button data-id={c.id} onClick={handleClick}>{c.choice}</button></li>) }
      </ul>
    </div>
  );
};

export default UIGame;

/*
  <blockquote>
        { episode.map((s) => s.text.map((p) => p === '' ? '' : <p>{p}</p>)) }
      </blockquote>
      <br />
      <blockquote>
        <p>{scene.text.map((p) => p === '' ? '' : <p>{p}</p>)}</p>
      </blockquote>
      <ul>
        { scene.choices.map((c) => <li><button data-id={c.id} onClick={handleClick}>{c.choice}</button></li>) }
      </ul>

      */
