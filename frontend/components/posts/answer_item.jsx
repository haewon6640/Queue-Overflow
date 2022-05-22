import React from "react";

export default function(props) {
    return (
        <div className="answer-container">
            <p className="body">{props.answer.body}</p>
            <div className="more-info">
                <ul className="share">
                    <li>Share</li>
                    <li>Edit</li>
                    <li>Follow</li>
                </ul>
            </div>
            <div className="bottom-border"></div>
        </div>
    );
}