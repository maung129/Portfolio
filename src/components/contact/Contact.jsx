import './contact.css'
import { useState } from 'react';
// import { Resend } from 'resend';
// import {Email} from "../../emails/Email"

const Contact = () => {
  const [email,setEmail] = useState("");
  const [contactNo,setContactNo] = useState("");
  const [message,setMessage] = useState("");

  // const emailHtml = render(<Email email={email} contactNo={contactNo} message={message} />);
//   const resend = new Resend('re_7YSQMwKq_9H69NpfqBiejHQtCpYjuKvEM');


// const handleSend = async()=>{
// await resend.sendEmail({
//     from: email,
//     to: 'awea60505@gmail.com',
//     subject: 'Contact you through portfolio',
//     react: <Email email={email} contactNo={contactNo} message={message} />,
//   });

// }

//react: <Email email={email} contactNo={contactNo} message={message} />,

  return (
    <div class="background">
    <div class="container">
      <div class="screen">
        <div class="screen-header">
          <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
          </div>
          <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
          </div>
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>CONTACT</span>
              <span>ME</span>
            </div>
            <div class="app-contact">CONTACT INFO : +95 09 980 977 122</div>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" value="To Moe Phyu Sin Maung" />
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT NO" value={contactNo} onChange={(e)=>setContactNo(e.target.value)}/>
              </div>
              <div class="app-form-group message">
                <input class="app-form-control" placeholder="MESSAGE" value={message} onChange={(e)=>setMessage(e.target.value)}/>
              </div>
              <div class="app-form-group buttons">
                <button class="app-form-button">CANCEL</button>
                <button class="app-form-button">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
  )
}

export default Contact