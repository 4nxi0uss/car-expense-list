import * as React from 'react';

import "./ContentForm.scss"

const ContentForm = () => {
    return (
        <div className='divForm'>
            <form className='form' method='post'  >
                <label>
                    Cena:
                    <input type="number" />
                </label>
                <label>
                    Rzecz:
                    <input type="text" />
                </label>
                <label>
                    Data:
                    <input type="date" />
                </label>
            </form>
            <button className='submitBtn' type='submit'>Zapisz</button>
            <button className='submitBtn' type='button'>Anuluj</button>
        </div>

    )
}

export default ContentForm