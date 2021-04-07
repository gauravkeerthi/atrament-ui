import { h } from 'preact';
import style from './style.scss';

const ChatBubble = ({ text , tags }) => {
  // insert switch (tags) function for correct css class here
  return <div class={`${style.balloon} ${style.him}`}>
    {text}
    </div>;
}

export default ChatBubble;