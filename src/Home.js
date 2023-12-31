import React, { useState } from 'react'
import Alert from './Alert';


export default function Home(props) {


    const [alert, setalert] = useState(null);
    const [text, changetext] = useState("Start Writing Your Text here.....");
    const [prev, setprev] = useState(" ");
    const [prev2, setprev2] = useState(" ");

    const extractEmails = () => {

        setprev(" ");


        var regex = /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+)/gi;

        let emails = text.match(regex);         //extracting valid emails list

        if (emails === null) {

            setprev(" ");

            setalert({
                msg: "Oops! No Emails Found",
                type: "danger"
            })
            setTimeout(() => {
                setalert(null);
            }, 2000);

        } else {

            var unique = [];                  //removing duplicates.

            setalert({
                msg: "Successfully found Unique Emails!",
                type: "success"
            })
            setTimeout(() => {
                setalert(null);
            }, 2000);

            emails.forEach(element => {

                if (!unique.includes(element)) {
                    unique.push(element);

                }

            });



            var x = " ";
            unique.forEach(element => {

                if (!x.includes(element)) {
                    x += " [ " + element + " ] ";
                }
            });

            setprev(x);

        }



    }

    const updatetext = (event) => {

        changetext(event.target.value);


    }

    const format = () => {
        
        if(text==="" || text===null){return;}   

        let regex2 = /\s+/g;

        let fmt = text.split(regex2);
        let v2 = fmt.join(' ');     //extra space removal

        let n1 = v2.toLowerCase(); //making all letters small so that it can be converted into proper essay format

        let single = v2[0].toUpperCase(); //capitalizing first letter
        v2 = single + n1.slice(1);
        console.log(v2);

        var len = v2.length


        for (var i = 1; i < len; i++) {      //After fullstop the first letter must be capital

            if (v2[i - 1] === '.' && v2[i] === v2[i].toLowerCase()) {

                let x = v2[i].toUpperCase();
                let res = v2.slice(0, i);
                let second = v2.slice(i + 1);

                v2 = res + x + second;

            }
            else if (i > 1 && v2[i - 2] === '.' && v2[i - 1] === ' ' && v2[i] === v2[i].toLowerCase()) {
                let x = v2[i].toUpperCase();
                let res = v2.slice(0, i);
                let second = v2.slice(i + 1);

                v2 = res + x + second;

            }

        }
        setalert({
            msg: "Successfully Formatted Your Text!",
            type: "success"
        });
        setTimeout(() => {
            setalert(null);
        }, 2000);

        changetext(v2);
    }

    const extractPhoneNumbers = () => {

        setprev2(" ");

        let regex = /([0-9]+)/g
        let phoneNumbers = text.match(regex);         //extracting phone numbers (no validation checks, use multiple regex's for more validation checks)

        if (phoneNumbers === null) {

            // changetext("No Valid Phone Numbers Found");
            setprev2(" ");
            setalert({

                msg: "Oops! No Phone Numbers Found",
                type: "danger"

            });
            setTimeout(() => {
                setalert(null);
            }, 2000);

        } else {

            var unique = [];                  //removing duplicates.


            phoneNumbers.forEach(element => {

                if (!unique.includes(element)) {
                    unique.push(element);

                }

            });
            setalert({
                msg: "Successfully found Unique Phone Numbers!",
                type: "success"
            });
            setTimeout(() => {
                setalert(null);
            }, 2000);


            var x = " ";
            unique.forEach(element => {

                if (!x.includes(element)) {
                    x += ' [ ' + element;
                    x += ' ] '; 
                }
            });

            setprev2(x);


        }


    }
    return (


        <div>
            <Alert alert={alert} />
        <div style={{color: props.mode === "light" ? "black":"white"}} >
            <div className="mb-3 md-4">
                <h3 style={{ marginLeft: "25%", marginTop: "2%" }}>Enter Your Text Here: </h3>
                <textarea className="form-control my-3" value={text} onChange={updatetext} id="exampleFormControlTextarea1" rows="8" style={{ display: "block", zIndex: "-1", padding:"2px", marginLeft: "auto", marginRight: "auto", width: "50%", backgroundColor: props.mode==="light" ? "white" : "lightgrey"}}></textarea>
                <div className="my-5" style={{ display: "inline-block", marginLeft: "25%" }}>
                
                    <button type="button" style={{ marginInline: "auto", width: "200px", border: "2px solid black", borderRadius: "5px" }} className="btn btn-outline-success btn-md mx-3" title='Format Text: Removes Extra Spaces, and Makes First letter of every sentence capital and rest small' onClick={format}>Format Text</button>
                    <button type="button" style={{ marginInline: "auto", width: "200px", border: "2px solid black", borderRadius: "5px" }} className="btn btn-outline-success btn-md mx-3" title="Extracts unique valid emails from text" onClick={extractEmails}>Extract Emails</button>
                    <button type="button" style={{ marginInline: "auto", width: "200px", border: "2px solid black", borderRadius: "5px" }} className="btn btn-outline-success btn-md mx-3" title="Extracts unique valid Phone Numbers fron text" onClick={extractPhoneNumbers}>Extract Phone Numbers</button>
                </div>
            </div>

            
            <div className='container my-3' style={{ marginLeft: "25%" }}>
                <h3>Word Count: {text ? text.at(text.length - 1) === ' ' ? text.split(/\s+/g).join(" ").split(" ").length - 1 : text.split(/\s+/g).join(" ").split(" ").length : 0}</h3>
                <h5>
                    <strong>{prev === " " ? "" : "Exctracted Emails Are:"}{prev}</strong><br />
                    <strong>{prev2 === " " ? "" : "Exctracted Phone Numbers Are: "}{prev2}</strong>
                </h5>
            </div>
            </div>
        </div>
    )
}



