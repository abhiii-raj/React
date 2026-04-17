import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";


export default function Comment() {
    let [comments, setComment] = useState([{
        username: "@gajodhar",
        remarks: "bade badtameez ho",
        ratings: -1
    }]);

    let addNewComment = (comment) => {
        setComment((currComments) =>
            [...currComments, comment]
        );
        console.log(comments)
    }

    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span><i>{comment.remarks}</i></span>
                        &nbsp;
                        <span>(rating = {comment.ratings})</span>
                        <p>-{comment.username}</p>
                    </div>
                ))};
            </div>
            <hr />
            <CommentForm addNewComment={addNewComment} />
        </>
    )
}