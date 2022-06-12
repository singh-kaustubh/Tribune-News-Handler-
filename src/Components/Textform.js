import React from 'react'
import { useState } from 'react'
export default function Textform() {
    const onclickhandeler = () => {
        setText("You clicked on the button");
    }
    function onchangehandler(event) {
        setText(event.target.value);
    }
    const [text, setText] = useState("Hi this is initial text");
    return (
        <div className='container my-5'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
            </div>

            <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea className="form-control" onChange={onchangehandler} value={text} aria-label="With textarea"></textarea>
            </div>
            <div className="text-center my-3">
                <button type="button" className="btn btn-outline-dark" onClick={onclickhandeler}>Submit</button>
            </div>
        </div>
    )
}
