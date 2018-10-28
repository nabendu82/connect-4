import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class GameCell extends Component {

    render() {
        //console.log(`this.props.playingBoard`, this.props.playingBoard);
        const { playingBoard, row, col } = this.props;
        let class__style = "cell__style";
        console.log(`row is ${row} col is ${col} - ${playingBoard[row][col]}`);

        if(playingBoard[row][col] !== undefined) {
            if (playingBoard[row][col] === 'red'){
                class__style += " player1"
            } else {
                class__style += " player2";
            }     
          
        }
        console.log(class__style);

        return (
            <Fragment>
                <div className={class__style}>{this.props.row}, {this.props.col}</div>
            </Fragment>
        );
    }

}

const mapStateToProps = ({ gameReducer }) => ({
    playingBoard: gameReducer.playingBoard
});



export default connect(
    mapStateToProps,
    null
)(GameCell);
