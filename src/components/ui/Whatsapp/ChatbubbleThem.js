import { h } from 'preact';
import style from './style.scss';

const ChatBubbleThem = ({ text }) => {

  return <div class={`${style.balloon} ${style.him}`}>
    {text}
    </div>;
}

export default ChatBubbleThem;