import React,{useState} from 'react'

export default function TextForm(mean) {

    // const[lightMode, darkMode]=useState({
    //     color:"Black",
    //     backgroundColor:"White"
    // })

    // const[lightTheme, darkTheme]=useState("Enable Dark Mode")


//     const changeTheme=()=>{
//         if(lightMode.color=="Black"){
//             darkMode({
//             color:"White",
//             backgroundColor:"Black"
//         })
//         darkTheme("Enable Light Mode")
//         }
//         else{
//             darkMode({
//                 color:"Black",
//                 backgroundColor:"White"
//             })
//             darkTheme("Enable Dark Mode")
//         }
// }

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

    
    const Refresh=()=>{
        window.location.reload();
        
    }

    const handleOnChange=(event)=>{
        console.log("Something changed");
        setText(event.target.value);
    }



    const[text,setText]=useState('');
    return (
        <div  className='container' style={mean.lightMode}>
            <h1 style={mean.lightMode}>{mean.heading}</h1>
            <div className="mb-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={ mean.lightMode}>Text Area</label>
                <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea2" rows="7" style={{...mean.lightMode, border: '1.5px solid grey'}}></textarea>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-5" style={mean.lightMode}>
                <div>
                    <button type="button" className="btn btn-primary me-3" onClick={uppercase} style={mean.lightMode}>
                        Convert To Uppercase
                    </button>
                    <button type="button" className="btn btn-primary me-3" onClick={lowercase} style={mean.lightMode}>
                        Convert To Lowercase
                    </button>
                    <button type="button" className="btn btn-danger me-3" onClick={Clear} style={mean.lightMode}>
                        Clear
                    </button>
                    {/* <button type="button" class="btn btn-success me-2" onClick={Up}>👆🏻</button> */}
                    {/* <button type="button" class="btn btn-success me-2"onClick={Down}>👇🏻</button> */}
                    <button type="button" className="btn btn-danger me-3" onClick={Refresh} style={mean.lightMode}>
                        Refresh
                    </button>
                    
                </div>
                <p className="mb-0 ms-3">{text.split(" ").length} words and {text.length} characters</p>
            </div>
            <div style={mean.lightMode}>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text area to preview."}</p>

            </div>
        
        </div>
    );
    
}
