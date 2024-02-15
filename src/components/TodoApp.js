import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {saveTodo, loadTodos, destroyTodo} from '../lib/service'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
  }

  componentDidMount () {
    loadTodos()
    .then( ({data}) => this.setState({ todos: data }))
    .catch( () => this.setState({errorLoad: true}))
  }

  handleDeleteTodo (id) {
    destroyTodo(id)
    .then(()=> this.setState({
      todos: this.state.todos.filter(t => t.id !== id) 
    }))
  }

  handleNewTodoChange (evt) {
    this.setState({currentTodo: evt.target.value})
  }

  handleTodoSubmit (evt) {
    evt.preventDefault()
    const newTodo = {name:  this.state.currentTodo, isComplete: false}
    saveTodo(newTodo)
    .then( ({data}) => this.setState({
      todos: this.state.todos.concat(data),
      currentTodo: ''
    }))
    .catch( () => this.setState({error: true}))

  }

  render () {
    const remainingTodos = this.state.todos.filter(t => !t.isComplete).length
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {this.state.errorLoad ? <span id='errorLoad' className='error'>Uh Oh! Todo load failed!</span> : null}
            {this.state.error ? <span id='errorSubmit' className='error'>Uh Oh! Todo submit failed!</span> : null}
            <TodoForm 
              currentTodo={this.state.currentTodo}
              handleTodoSubmit={this.handleTodoSubmit}
              handleNewTodoChange={this.handleNewTodoChange}
            />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} 
              handleDeleteTodo={this.handleDeleteTodo}/>
          </section>
          <Footer remaining={remainingTodos}/>
        </div>
      </Router>
    )
  }
}
