import React,{useState} from 'react'

export default function TextForm(mean) {

    const lowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }

    const uppercase=()=>{
        console.log('Something Happened '+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        // setText("you havee clicked Uppercase");
    }

    const Clear=()=>{
        let newtext='';
        setText(newtext);
    }

    


    const handleOnChange=(event)=>{
        console.log("Something changed");
        setText(event.target.value);
    }



    const[text,setText]=useState('');
    return (
        <div>
            <h1>{mean.heading}</h1>
            <div className="mb-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea2" rows="7"></textarea>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-5">
                <div>
                    <button type="button" className="btn btn-primary me-3" onClick={uppercase}>
                        Convert To Uppercase
                    </button>
                    <button type="button" className="btn btn-primary me-3" onClick={lowercase}>
                        Convert To Lowercase
                    </button>
                    <button type="button" class="btn btn-danger me-3" onClick={Clear}>
                        Clear
                    </button>
                    {/* <button type="button" class="btn btn-success me-2" onClick={Up}>👆🏻</button> */}
                    {/* <button type="button" class="btn btn-success me-2"onClick={Down}>👇🏻</button> */}
                </div>
                <p className="mb-0 ms-3">{text.split(" ").length} words and {text.length} characters</p>
            </div>
            <div>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </div>
    );
    
}
