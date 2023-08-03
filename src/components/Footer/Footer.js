import "./footer.css"
import chat from "../../assets/chat.png"
import letter from "../../assets/letter.png"
import call from "../../assets/call.png"
import feedback from "../../assets/feedback.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import instagram from "../../assets/IMAGE.png"
import facebook from "../../assets/IMAGE-1.png"
import youtube from "../../assets/IMAGE-2.png"
import linkedIn from "../../assets/IMAGE-3.png"
import pinterest from "../../assets/IMAGE-4.png"

const Footer = () => {

  useEffect(() =>{
    Aos.init()
  } ,[])

  return (
    <footer>
        <div className='footer-1'>
          <div className='footer-box footBox1'>
            <div className='footer-box-icon'>
              <img src={chat} alt="chat" />
            </div>
            <div className='footer-box-text'>
              <p className='footerBoxText1'>Chat</p>
              <p className='footerBoxText2'>We are currently offline</p>
            </div>
          </div>
          <div className='footer-box footBox2'>
            <div className='footer-box-icon'>
              <img src={letter} alt="letter" />
            </div>
            <div className='footer-box-text'>
              <p className='footerBoxText1'>Email</p>
              <p className='footerBoxText2'>We usually reply within 48 hours</p>
            </div>
          </div>
          <div className='footer-box footBox3'>
            <div className='footer-box-icon'>
              <img src={call} alt="call" />
            </div>
            <div className='footer-box-text'>
              <p className='footerBoxText1'>Call us</p>
              <p className='footerBoxText2'>Mon-Fri: 9am-6pm CET</p>
            </div>
          </div>
          <div className='footer-box footBox4'>
            <div className='footer-box-icon'>
              <img src={feedback} alt="feedback" />
            </div>
            <div className='footer-box-text'>
              <p className='footerBoxText1'>Feedback</p>
              <p className='footerBoxText2'>Always a good idea 🚀</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='footer-2'>
          <ul className="footer-icons">
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={youtube} alt="" />
            </li>
            <li>
              <img src={linkedIn} alt="" />
            </li>
            <li>
              <img src={pinterest} alt="" />
            </li>
          </ul>
        </div>
    </footer>
  )
}

export { Footer }
