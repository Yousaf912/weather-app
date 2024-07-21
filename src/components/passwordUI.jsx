import React, { useState } from 'react';
import style from './passwordUi.module.css'

export default function PasswordUI() {

    let up = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    let lc = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sum = "#$%&*^!()?/;:|";

    const [upercase, setupercase] = useState(false);
    const [lowercase, setlowercase] = useState(false);
    const [number, setnumber] = useState(false);
    const [symbol, setsymbol] = useState(false);
    const [passlength, setpaslength] = useState(10);
    const [fnalpass,setfnalpass]=useState();

    const handlepasslength = (event)=>{
        setpaslength(event.target.value)
    }

    const generate = () => {
        let pass = '';
        let finalpassword='';
        if (upercase || lowercase || number || symbol) {
            if (upercase) pass += up;
            if (lowercase) pass += lc;
            if (number) pass += num;
            if (symbol) pass += sum;

            for(let i=0; i<passlength; i++){
                finalpassword += pass.charAt(Math.floor(Math.random()*pass.length))
                setfnalpass(finalpassword)
            }
        } else {
            alert("Please select type")
        }
        
    }

    const copy=()=>{
        navigator.clipboard.writeText(fnalpass);
    }
    return (
        <div className={`${style.maindiv}`}>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={`${style.passwordiv} mx-auto p-3 text-center border-0 rounded-4`}>
                            <h1>Password Generator</h1>
                            <div className={`${style.inptdiv} d-flex justify-content-between`}>
                                <input type="text" readOnly className='px-5' value={fnalpass} />
                                <button className='px-3' onClick={copy}>Copy</button>
                            </div>
                            <div className={`${style.cherecterdiv}`}>
                                <h6> Select Scerectors</h6>
                                <input type='number' max={10} min={5} value={passlength} onChange={handlepasslength}/>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <h4><label htmlFor="up">Uppercase</label></h4>
                                <input id='up' type="checkbox" checked={upercase} onChange={() => setupercase(!upercase)} />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label htmlFor="low"><h4>Lower Case</h4></label>
                                <input id='low' type="checkbox" checked={lowercase} onChange={() => setlowercase(!lowercase)} />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label htmlFor="num"><h4> Numbers   </h4></label>
                                <input id='num' type="checkbox" checked={number} onChange={() => setnumber(!number)} />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label htmlFor="sym"> <h4>Symbols </h4></label>
                                <input id='sym' type="checkbox" checked={symbol} onChange={() => setsymbol(!symbol)} />
                            </div>
                            <button className='p-2 mt-3' onClick={generate}>Generate Password</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
