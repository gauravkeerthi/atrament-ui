import { h } from 'preact';
import style from './style.scss';


const ChatBubbleYou = ({ text }) => (
  <div class={` ${style.balloon} ${style.you}`}>
    {text}}
  </div>
);
export default ChatBubbleYou;
