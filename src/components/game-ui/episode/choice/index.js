import { h, Component } from 'preact';
import style from './style';

// choice component
class Choice extends Component {
  makeChoice = (e) => {
    e.preventDefault();
    this.props.makeChoice(this.props.option.id);
  };

  render({ option }) {
    return (
      <a href="#" onClick={this.makeChoice} class={style.choice}>{option.choice}</a>
    );
  }
}

export default Choice;
