import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
   const errors = {};
   if (!values.userName) {
     errors.userName = 'username should not be empty';
   } 
   return errors;
 };

export default function CommentForm({ addNewComment }) {
    // let [formData, setformData] = useState({
    //     username: "",
    //     remarks: "",
    //     ratings: 1
    // });

    const formik = useFormik({
     initialValues: {
       userName: '',
       remarks: '',
       ratings: 1,
     },
     validate,
     onSubmit: values => {
    //    alert(JSON.stringify(values, null, 2));
            set
     },
   });

    // let handleInputChange = (event) => {
    //     setformData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     });
    // };

    // let handleSubmit = (event) => {
    //     if (!formData.username) {
    //         alert("username is empty!!");
    //     } else {
    //         console.log(formData);
    //         addNewComment(formData);
    //         event.preventDefault();
    //         setformData({ username: "", remarks: "", ratings: 1 });
    //     }
    // }

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Hope you have enjoyed....</h3>
            <label htmlFor="username" type="text">Username : </label>
            <input
                placeholder="username"
                id="username"
                value={formik.values.userName}
                onChange={formik.handleChange}
                name="userName"
            />
            {formik.errors.userName ? <div > {formik.errors.userName}</div> : null}
            <br></br>
            <br></br>

            <label htmlFor="remarks">Remarks : </label>
            <textarea
                placeholder="write kinds words"
                id="remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange}
                name="remarks"
            ></textarea>
            <br></br>
            <br></br>

            <label htmlFor="ratings">Ratings : </label>
            <input
                type="number"
                id="ratings"
                value={formik.values.ratings}
                onChange={formik.handleChange}
                name="ratings"
                min={1}
                max={5}
            />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}