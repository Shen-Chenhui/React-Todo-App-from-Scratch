import React from 'react';
import ReactDOM from 'react-dom';
//import any other component file directly referenced
class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText: ""
    }
  }
  handleTyping(event){
    this.setState({typedText:event.target.value})
  }
  handleSubmit(){
    this.props.submit(this.state.typedText);
    this.setState({typedText:""})
  }
  render(){
    return (
      <div>
        <input type="text" onChange={(event)=>this.handleTyping(event)} value={this.state.typedText}/>
        {/* careful not to forget input of event, if not, nothing will be passed! */}
        <button className="btn-info" onClick={()=>this.handleSubmit()}>Add todo</button>
        {/* note that onClick must intake a function */}
      </div>
    )
  }
};

export default InputLine;
