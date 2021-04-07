import { h } from 'preact';
// import { makeStyles } from '@material-ui/core/styles';
// import { lightGreen } from '@material-ui/core/colors';

// import { ExpandMore } from '@material-ui/icons';
import ChatBubbleYou from './ChatbubbleYou';
import ChatBubbleThem from './ChatbubbleThem';
// import ReplyOption from }./ReplyOption}
import style from './style.scss';
 

const profileImage =
  'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/to9wobgohx1tmried8r5';

/* function identifySpeaker(text,context) {
 switch (text) {
    case "Gavin": return <ChatBubbleThem text={text} />
    case "Nadia": return <ChatBubbleYou text={text} />
    default : return <ChatBubbleThem text={text} />
  }
  
}
  */

const WhatsappContainer = ({ episode, scene }) => (
  <div class={style.wa_container}>
    <div class={style.chat_window}>
      <div class={style.wrapperchat}>
        <div class={style.chat_root}>
          <div class={style.user_bar}>
            {/* user info start */}
            <div class={style.user}>
              <img src={profileImage} alt="user" />
            </div>
            <div class={style.user_name}>
              <b>Gavin</b>
              <span>online now</span>
            </div>
          </div>

          <div class={style.chat_window}>
            
            <div class={style.conversation}>
              
              {episode.map((s) => s.text.map((p) => p === '' ? '' : <ChatBubbleThem text={p} />))}
              {scene.text.map((p) => p === '' ? '' : <ChatBubbleYou text={p} />) }
              
            </div>
          </div>
        </div>

        <div class={style.textarea}>
          <div class={style.message}>Tap to continue</div>
          <div class={style.continue}>
            <div class={style.circle_cont}>
                +
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhatsappContainer;
