import React, { Component } from 'react';
import "./likeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCheck } from "@fortawesome/free-solid-svg-icons";

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} className="thumbsUp" />
const check = <FontAwesomeIcon icon={faCheck} className="check" />


class LikeButton extends Component {
    state = {  
        clicks: 23,
        liked: false
    }

    
    componentDidMount() {
        if (!localStorage.getItem('liked')) {
            const { clicks, liked } = this.state;
            localStorage.setItem('liked', liked)
            localStorage.setItem('clicks', clicks)
        }
        // const liked = localStorage.getItem('liked') ? localStorage.getItem('liked') : false;
        // const clicks = localStorage.getItem('clicks') ? localStorage.getItem('clicks') : 23;
        // this.setState({ liked, clicks});
        
    }
    

    HandleClick = () => {
        const { clicks, liked} = this.state
        if (!this.state.liked) {
            this.setState({
                liked: true,
                clicks: this.state.clicks + 1,
            });
        } else {
            this.setState({
                liked: false,
                clicks: this.state.clicks - 1
            })
        };
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('liked', liked);
    };

    render() { 
        return ( 
            <button className="like-button" onClick={this.HandleClick}>
            {this.state.liked ? check : thumbsUp}
            Like |
            <span className="likes-counter">{this.state.clicks}</span>
          </button>
          
         );
    }
}
 
export default LikeButton;