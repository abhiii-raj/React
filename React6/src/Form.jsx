// import { useState } from "react";

// export default function Form() {
//     let [fullName, setFullName] = useState("");
//     let [userName, setUsername] = useState("");

//     let handleChange = (event) => {
//         setFullName(event.target.value);
//     }
//     let handleUsername = (event) => {
//         setUsername(event.target.value);
//         console.log(event.target.value);
//     }

//     return (
//         <form>
//             <label htmlFor="fullName">FullName</label> 
//             <input
//                 placeholder="enter your name"
//                 type="text"
//                 value={fullName}
//                 onChange={handleChange}
//                 id="fullName" 
//             />
//             &nbsp;&nbsp;
//             <br></br>
//             <br></br>
//             <label htmlFor="userName">Username</label>
//             <input 
//                 placeholder="enter username"
//                 type="text"
//                 id="userName"
//                 value={userName}
//                 onChange={handleUsername}
//             />
//             <button>Submit</button>
//         </form>
//     )
// }

import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    let handleFormdata = (event) => {
        // let fieldName = event.target.name;
        // let newVal = event.target.value;

        // setFormData((currData) =>{
        //     currData[fieldName] = newVal;
        //     return{...currData};
        // });

        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    }

    let handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">FullName</label> 
            <input
                placeholder="enter your name"
                type="text"
                value={formData.fullName}
                onChange={handleFormdata}
                id="fullName"
                name="fullName"
            />
            &nbsp;&nbsp;
            <br></br>
            <label htmlFor="userName">Username</label>
            <input 
                placeholder="enter username"
                type="text"
                id="userName"
                value={formData.userName}
                onChange={handleFormdata}
                name="userName"
            />
            <br></br>
            <label htmlFor="pass">Password</label>
            <input 
                placeholder="password"
                type="password"
                id="pass"
                value={formData.password}
                onChange={handleFormdata}
                name = "password"
            />
            <br></br>
            <button>Submit</button>
        </form>
    )
}