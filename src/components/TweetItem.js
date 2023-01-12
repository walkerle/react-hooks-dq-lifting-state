import React, { useState } from "react";

function TweetItem(props) {

  const [ likeCount, setLikeCount ] = useState(props.tweet.favorite_count);

  const handleLikeChange = () => {
    setLikeCount(likeCount => likeCount + 1);
  }

  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={() => handleLikeChange()}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {likeCount} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
