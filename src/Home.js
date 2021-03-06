import React from 'react';
import Utils from './utils';

const { firebase } = window;

export default function() {
    return (
        <div className='view row'>
            <div className='column column-50 column-offset-25' style={{textAlign: 'center'}}>
                <h3>Ready for Some Chess?</h3>
                <button onClick={createGame}>Let's Fight!</button>
            </div>
        </div>
    );
}

function createGame() {
    const newGame = {
        p1_token: Utils.token(),
        p2_token: Utils.token()
    };

    const game = firebase.database().ref("games").push();

    game
        .set(newGame)
        .then(() => {
            window.location.hash = `#/${newGame.p1_token}`;
        }, (err) => {
            throw err;
        });
}