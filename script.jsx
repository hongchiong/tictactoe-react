class Game extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {

  }
}

class Board extends React.Component {
    constructor(){
      super()
      this.state = {
        board: [
          [" "," "," "],
          [" "," "," "],
          [" "," "," "]
        ],
        playerCounter: 0
      }

    }

    squareClick(x,y){
        let currentBoard = this.state.board;
        if (this.state.playerCounter % 2 == 0) {
          currentBoard[y][x] = 'X';
        } else {
          currentBoard[y][x] = 'O';
        }

        this.setState( { board: currentBoard, playerCounter: this.state.playerCounter+1 } );
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div
                        className="boo col text-center"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {
                          col
                        }
                    </div>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className="row">
              {rows}
            </div>

          );

        });

        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);