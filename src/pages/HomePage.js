import { useState } from 'react'
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


    const noClicked = () => {
        setButtonSize(buttonSize + 10);
        setNoNumber(noNumber + 1)
        setNoState(true)
        setYesState(false)
        setYesNumber(1)
        console.log(noNumber)

        if(yesState) {
            setGIF(BearReally)
            setHeader('But you clicked yes!!')
            setButtonSize()
            setYesNumber(1)
            setButtonEnable(true)
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
        } if (noNumber === 20) {
            setGIF(BearDepress)
            setHeader("Ok fine...")
            setYesColor('#d60000')
        }
      };

    const resetSize = () => {
        setButtonSize(20)
        setButtonEnable(false)
        setHeader("Will you be my valentine?")
        setGIF(BearQuestion)
    }

    const yesClicked = () => {
        setYesNumber(yesNumber + 1)
        setYesState(true)
        setNoState(false)
        setButtonEnable(false)
        // setGIF(BearJump)
        setNoNumber(1)
        setButtonSize(20)
        setYesColor()
        console.log(yesNumber)

        if(noState) {
            setYesNumber(1)
        }


        if(yesNumber === 1) {
            setGIF(BearJump)
            setHeader("YAY!!!!!!!!!!!!")
        } if(yesNumber === 2) {
            setGIF(BearKiss2)
            setHeader("YAY!!!!!!!!!!!!!!!!!!!!")
        } if(yesNumber === 3) {
            setGIF(BearKiss)
            setHeader("YAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        }


    }




    return ( 


        <div className="mainframe">
            <h1>{Header}</h1>
            <div className="img">
                <img src={GIF} alt='bearQuestion'/>
            </div>
            <div className="buttons">
                <button className='Yes' style={{fontSize: buttonSize, backgroundColor: yesColor}} onClick={yesClicked} >Yes</button>
                <button className='No' onClick={noClicked} disabled={buttonEnabled}>No</button>
            </div>
                {/* <button onClick={resetSize}>Reset</button> */}
            <p className='copyright'>© Marcus Teo</p>
            {/* <button style={{backgroundColor:'#ffc5e6'}}>Test</button>
            <button style={{backgroundColor:'#FF8896'}}>Test</button>
            <button style={{backgroundColor:'#FF7871'}}>Test</button>
            <button style={{backgroundColor:'#ff257e'}}>Test</button>
            <button style={{backgroundColor:'#ff2644'}}>Test</button>
            <button style={{backgroundColor:'#E72650'}}>Test</button>
            <button style={{backgroundColor:'#d60000'}}>Test</button> */}




        </div>

     );
}
 
export default HomePage;