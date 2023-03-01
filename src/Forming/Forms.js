import React, { Component } from 'react';
class Form extends Component{
    constructor(props){
        super(props)
        this.state={username:'',comments:'',topic:'react'}
    }
    handleUserNameChange=(event)=>this.setState({username:event.target.value})
    handleCommentChange=(event)=>this.setState({Comment:event.target.value})
    handleTopicChange=(event)=>this.setState({topic:event.target.value})

    handleSubmit=event=>{alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)}

    render(){
        //const {username,comments,topic}=this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                        <label>UserName</label>
                        <input type='text' value={this.state.username} onChange={this.handleUserNameChange}/>
                </div>
                <div>
                        <label>Comments</label>
                        <textarea value={this.state.comment} onChange={this.handleCommentChange}/>
                </div>
                <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}
export default Form