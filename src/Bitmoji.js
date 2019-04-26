import React, {Component} from 'react';
import './App.css';
import typingbit from './typing-bit.png';
import onionsbit from './onions-bit.png';


class Bitmoji extends Component {
    state = {
        moji: typingbit
    };
    changeMoji = this.changeMoji.bind(this);

    changeMoji(){
        if (this.state.moji === typingbit){
            this.setState({
                moji: onionsbit
            })
        } else {
            this.setState({
                moji: typingbit
            })
        }
    }

    render(){
        return(
            <div>
                <img src={this.state.moji} />
                <button className={"button"} onClick={this.changeMoji}>Change Bitmoji</button>
            </div>
        );
    }
}

export default Bitmoji