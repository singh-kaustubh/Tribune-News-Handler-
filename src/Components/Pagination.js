import React from 'react'

function Pagination() {
    return (
        <div className='container my-2'>
            <nav aria-label="...">
                <ul className="pagination pagination-lg justify-content-end">
                    <li className="page-item">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                    <li className="page-item" aria-current="page">
                        <span className="page-link">2</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/">Next</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Pagination