import React from 'react'
import './Title.css'
class title extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: 'React js Stop Watch Application',
            isInput: false
        }
    }

    editHandeler(){
        this.setState({
              ...this.state,
              isInput: true

        })

    }

    inputChange(event){
        this.setState({
           ...this.state,
           title: event.target.value

        })
    }


    keyPressHandeler(event){
        if(event.key==='Enter'){
           this.setState({
               ...this.state,
               isInput: false
           })

        }
    }

    setBlur(event){
        this.setState({
            ...this.state,
            isInput: false
        })

    }
     



    render(){

        let output= null
        if(this.state.isInput){
             output=(
                 <div className="Title">
                 <input
                  className="form-control" 
                  onChange={(event)=> this.inputChange(event) }
                  onKeyPress={ (event)=> this.keyPressHandeler(event)}
                  onBlur={ (event)=> this.setBlur(event)}
                  type="text" 
                  value={this.state.title}/>
                    
                 </div>
             )
        }
        else{
            output=(
               <div className="d-flex Title">
                       <h1 className="display-4">{ this.state.title}</h1>
                       <span onClick={ ()=> this.editHandeler()}className="ml-auto edit-icon">
                       <i className="fas fa-marker"></i>
                       </span>

               </div>
            )
        }

         return(
                <div>
                   {output}
                </div>
         )

    }
}
export default title