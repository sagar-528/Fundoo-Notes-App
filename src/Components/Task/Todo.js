import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: false,
            title: '',
            task: ''
        }
    }

    showHandler = () => {
        this.setState({
            isShow: true
        })
    }

    hideHandler = () => {
        this.setState({
            isShow: false
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        this.setState({
            title: '',
            task: ''
        })
    }

    handleCancel = () => {
        this.setState({
            title: '',
            task: ''
        })
    }


    render() {
        return (
            <div className='container'>
            <form className='todo_form' onSubmit={this.handleSubmit} >
            {this.state.isShow ?
                <div >
                    <input name='title' value={this.state.title} required type='text' onChange={this.handleInput} placeholder='Title' />
                </div>
                : null}
            <div >
                <input onClick={this.showHandler} name='task' required value={this.state.task} onChange={this.handleInput} type='text' placeholder='Take a note...' />
            </div>
            {this.state.isShow ?
                <div className='form_button'>
                    <button className='form_btn' type='submit'>Add</button>
                    <button className='form_btn' onClick={this.handleCancel} type='button'>Cancel</button>
                    <button onClick={this.hideHandler} className='form_btn' type='button'>Close</button>
                </div>
                : null}
        </form>
            </div>
        )
    }
}

export default Todo
