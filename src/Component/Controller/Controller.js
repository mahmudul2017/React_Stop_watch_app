import React, {Component} from 'react'

class Controller extends Component{

    constructor(props){
        super(props)

        this.state={
            start: true,
            lap: false,
            reset: false,
            pause: false

        }

    }


    startHandeler(){
        this.setState({
           ...this.state,
           start:false,
           pause:true,
           lap:true

        })

        this.props.start()
            
    }

    pauseHandeler(){
        this.setState({
            ...this.state,
            start: true,
            reset:true,
            pause: false,
            lap:false

        })

        this.props.pause()
    }

    lapHandeler(){
             
        this.props.lap()
    }

    resetHandeler(){
        this.setState({
            
            start:true,
            reset: false,
            lap:false,
            pause:false
        })

        this.props.reset()

    }
    
    getController(){
        let output= null

         if(this.state.start && !this.state.reset){
             output=(
                 <div className="py-5">
                        <button
                        className=" btn btn-success btn-lg px-5 ml-5"
                        onClick={ (event) => this.startHandeler()}
                        > Start
                        </button>
                 </div>
             )

         }
         else if(this.state.pause && this.state.lap){

            output=(
                <div className="py-5">

                <button 
                        className="btn btn-primary btn-lg bx-5 ml-5"
                        onClick={ (event) => this.pauseHandeler()}
                        >Pause
                </button>

                <button 
                        className="btn btn-warning btn-lg px-5 ml-5"
                        onClick={ (event) => this.lapHandeler()}
                        >lap
                </button>

                </div>
            )

         }

         else if(this.state.start && this.state.reset){
             output=(
                 <div className="py-5">
                        <button className="btn btn-success btn-lg px-5 ml-5"
                        onClick={ (event) => this.startHandeler()}
                        >Start
                        </button>

                        <button className="btn btn-danger btn-lg px-5 ml-5" 
                        onClick={ (event) => this.resetHandeler()}
                        >Reset
                        </button>

                 </div>
             )
         }



         return output
    }

    render(){
        return this.getController()
    }
}

export default Controller
