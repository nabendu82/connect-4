import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class GameCell extends Component {

    render() {
        const { playingBoard, row, col } = this.props;
        let class__style = "cell__style";

        if(playingBoard[row][col] !== undefined) {
            if (playingBoard[row][col] === 'red'){
                class__style += " player1"
            } else {
                class__style += " player2";
            }     
          
        }

        return (
            <Fragment>
                {/* <div className={class__style}>{this.props.row}, {this.props.col}</div> */}
                <div className={class__style}></div>
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
