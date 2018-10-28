import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import GameCell from './GameCell';
import * as gameAction from '../actions/gameAction';


class Connect4Game extends Component {


    handleClick(col) {
        console.log(`Column number ${col}`);
        this.props.init(col);
    }

    showGrid() {
        const items = [];
        for(let i=5; i>=0; i--) {
            const row = [];
            for(let j=0; j<7; j++) {
                row.push(<GameCell key={j} row={j} col={i}/>)
            }
            items.push(<div className="row__style" key={i}>{row}</div>)
        }
        return items;
    }

    checkForWinning() {
        const { playingBoard, currentPlayer } = this.props;
        if (playingBoard) {
            //CHecking top to bottom for win
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {

                    if (playingBoard[i][j] === 'red' && playingBoard[i][j + 1] === 'red' && playingBoard[i][j + 2] === 'red' && playingBoard[i][j + 3] === 'red') {
                        return "red";
                    }
                    if (playingBoard[i][j] === 'yellow' && playingBoard[i][j + 1] === 'yellow' && playingBoard[i][j + 2] === 'yellow' && playingBoard[i][j + 3] === 'yellow') {
                        return "yellow";
                    }

                }
            }

            //CHecking left to for win
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (playingBoard[i][j] === 'red' && playingBoard[i+1][j] === 'red' && playingBoard[i+2][j] === 'red' && playingBoard[i+3][j] === 'red') {
                        return "red";
                    }
                    if (playingBoard[i][j] === 'yellow' && playingBoard[i+1][j] === 'yellow' && playingBoard[i+2][j] === 'yellow' && playingBoard[i+3][j] === 'yellow') {
                        return "yellow";
                    }

                }
            }

            //CHecking up diagnolly for win(/)
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (playingBoard[i][j] === 'red' && playingBoard[i+1][j+1] === 'red' && playingBoard[i+2][j+2] === 'red' && playingBoard[i+3][j+3] === 'red') {
                        return "red";
                    }
                    if (playingBoard[i][j] === 'yellow' && playingBoard[i+1][j+1] === 'yellow' && playingBoard[i+2][j+2] === 'yellow' && playingBoard[i+3][j+3] === 'yellow') {
                        return "yellow";
                    }

                }
            }

            //CHecking down diagnolly for win(\)
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (playingBoard[i][j] === 'red' && playingBoard[i + 1][j - 1] === 'red' && playingBoard[i + 2][j - 2] === 'red' && playingBoard[i + 3][j - 3] === 'red') {
                        return "red";
                    }
                    if (playingBoard[i][j] === 'yellow' && playingBoard[i + 1][j - 1] === 'yellow' && playingBoard[i + 2][j - 2] === 'yellow' && playingBoard[i + 3][j - 3] === 'yellow') {
                        return "yellow";
                    }

                }
            }
        }

        return false;
    }

    showCurrentPlayer() {
        const winningCheck = this.checkForWinning();
        console.log(`winningCheck `, winningCheck);
        if(!winningCheck) {
            if(this.props.currentPlayer) {
                return <div className="curr__style">Current Player: {this.props.currentPlayer}</div>
            } else {
                return <div className="curr__style">Current Player: Red</div>
            }
        } else {
            return <div className="curr__style">Player: {winningCheck} Wins</div>
        }

    }




    render() {

        return (
            <Fragment>
                <div className="header__style">Connect 4</div>
                {this.showCurrentPlayer()}
                <div className="row__style">
                    <div className="btn__style" onClick={() => this.handleClick(0)}>Drop 0</div>
                    <div className="btn__style" onClick={() => this.handleClick(1)}>Drop 1</div>
                    <div className="btn__style" onClick={() => this.handleClick(2)}>Drop 2</div>
                    <div className="btn__style" onClick={() => this.handleClick(3)}>Drop 3</div>
                    <div className="btn__style" onClick={() => this.handleClick(4)}>Drop 4</div>
                    <div className="btn__style" onClick={() => this.handleClick(5)}>Drop 5</div>
                    <div className="btn__style" onClick={() => this.handleClick(6)}>Drop 6</div>
                </div>
                {this.showGrid()}

            </Fragment>
        );
    }

}

const mapStateToProps = ({ gameReducer }) => ({
    playingBoard: gameReducer.playingBoard,
    currentPlayer: gameReducer.currentPlayer
});

const mapDispatchToProps = dispatch => ({
    init: (col) => {
        dispatch(gameAction.colorColumnCell(col));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Connect4Game);