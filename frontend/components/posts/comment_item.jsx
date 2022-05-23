import React from "react";
import { Link } from "react-router-dom";
export default function (props) {
    let newDate = new Date(Date.parse(props.comment.created_at));
    let date = newDate.toDateString().slice(4, 15);
    let time = newDate.toTimeString().slice(0, 5);
    return (
        <div className="comment">
            <div className="body">
                <p>{props.comment.body}
                <Link to={`/users/${props.comment.commenter_id}`}>
                    <span className="commenter">  –{" "} {props.comment.commenter_name}</span>
                </Link> 
                <span className="date">
                    {" "}
                    {date} at {time}
                </span>
                </p>
            </div>
        </div>
    );
}
