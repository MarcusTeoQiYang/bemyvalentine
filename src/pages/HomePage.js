import { useState, useEffect } from 'react'
import BearKiss from '../img/bearKiss.gif'
import BearKiss2 from '../img/bearKiss2.gif'
import BearJump from '../img/bearJump.gif'
import BearQuestion from '../img/bearQuestion.gif'
import BearHello from '../img/bearHello.gif'
import BearSad from '../img/bearSad.gif'
import BearGoingToCry from '../img/bearGoingToCry.gif'
import BearCrying from '../img/bearCrying.gif'
import BearDepress from '../img/bearDepress.gif'
import BearCool2 from '../img/bearCool2.gif'
import BearReally from '../img/bearReally.gif'
import pinkArrow from '../img/pinkArrow2.gif'

const HomePage = () => {

    const [Header, setHeader] = useState("Will you be my valentine?")    
    const [buttonSize, setButtonSize] = useState(20);
    const [GIF, setGIF] = useState(BearCool2)

    const [buttonEnabled, setButtonEnable] = useState(false)

    const [noNumber, setNoNumber] = useState(1)
    const [yesNumber, setYesNumber] = useState(1)

    const [yesColor, setYesColor] = useState('#ffc5e6')

    const [yesState, setYesState] = useState(false)
    const [noState, setNoState] = useState(false)

    const [buttonState, setButtonState] = useState('row')

    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const valentinesDay = new Date(currentDate.getFullYear(), 1, 14); // Months are 0-based in JavaScript Date object
    
        if (currentDate > valentinesDay) {
          valentinesDay.setFullYear(valentinesDay.getFullYear() + 1); // If Valentine's Day has passed, set it for the next year
        }
    
        const timeDifference = valentinesDay - currentDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [timeLeft]);

    const noClicked = () => {
        setButtonSize(buttonSize + 10);
        setNoNumber(noNumber + 1)
        setNoState(true)
        setYesState(false)
        setYesNumber(1)
        console.log('no' + noNumber)
        setIsVisible('hidden');

        if(yesState) {
            setGIF(BearReally)
            setHeader('But you clicked yes...')
            setButtonSize()
            setYesNumber(1)
            setButtonEnable(true)
            setYesColor()
        }

        if(noNumber === 3) {
            setGIF(BearQuestion)
            setHeader("Are you sure??")
            setYesColor('#FF8896')
        } if (noNumber === 6) {
            setGIF(BearHello)
            setHeader("I dont believe you :P")
            setYesColor('#FF7871')
        } if (noNumber === 9) {
            setGIF(BearSad)
            setHeader("Pretty pleaseee")
            setYesColor('#ff257e')
        } if (noNumber === 12) {
            setGIF(BearGoingToCry)
            setHeader("You are making me sad...")
            setYesColor('#ff2644')
        } if (noNumber === 16) {
            setGIF(BearCrying)
            setHeader("Awwww ok... :(")
            setYesColor('#E72650')
            setButtonState('column')
        } if (noNumber === 20) {
            setGIF(BearDepress)
            setHeader("Ok fine...")
            setYesColor('#d60000')
        }
      };

    const yesClicked = () => {
        setYesNumber(yesNumber + 1)
        setYesState(true)
        setNoState(false)
        setButtonEnable(false)
        // setGIF(BearJump)
        setNoNumber(1)
        setButtonSize(20)
        setYesColor()
        console.log('yes' + yesNumber)
        setButtonState('row')
        setIsVisible('visible');


        if(yesNumber === 1) {
            setGIF(BearJump)
            setHeader("YAY!!!!!!!!!!!!")
            setYesColor('#FF8896')
        } if(yesNumber === 2) {
            setGIF(BearKiss2)
            setHeader("YOU MADE MY DAY!!!!")
            setYesColor('#FF7871')
        } if(yesNumber >= 3) {
            setGIF(BearKiss)
            setHeader("YOU JUST MADE MY VALENTINES DAY THE BEST EVER!!!! ")
            setYesColor('#ff257e')
            setIsVisible('hidden');
        }


    }

    const [isVisible, setIsVisible] = useState('hidden');




    return ( 


        <div className="mainframe">
            <div className='clock'>
                <span>{timeLeft.days}</span> days&nbsp;
                <span>{timeLeft.hours}</span> hours&nbsp;
                <span>{timeLeft.minutes}</span> minutes&nbsp;
                <span>{timeLeft.seconds}</span> seconds&nbsp;
                <span>to <b>VALENTINE'S</b> day!!</span>
            </div>
            <h1>{Header}</h1>
            <div className="img">
                <img src={GIF} alt='bearQuestion'/>
            </div>
            
            <div className="buttons" style={{flexDirection: buttonState}}>
                <div className="arrow" style={{position: 'relative', right:'40px'}}>
                    <img src={pinkArrow} alt="pinkArrow"style={{width:'50px', position: 'absolute',visibility: isVisible}}/>
                </div>
                <button className='Yes' style={{fontSize: buttonSize, backgroundColor: yesColor}} onClick={yesClicked} >Yes</button>
                <button className='No' onClick={noClicked} disabled={buttonEnabled}>No</button>
            </div>
            <p className='copyright'>© From whoever send you this.</p>




        </div>

     );
}
 
export default HomePage;