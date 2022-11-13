import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', isStarred: false, AppointmentList: []}

  submitForm = event => {
    event.preventDefault()
    const {title, date, AppointmentList} = this.state
    console.log(date)
    const myDateFormat = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const obj = {
      id: uuidv4(),
      title,
      date: myDateFormat,
      starred: false,
    }
    console.log(obj)
    const list1 = [...AppointmentList, obj]
    this.setState({AppointmentList: list1, title: '', date: ''})
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  dateChange = event => {
    this.setState({date: event.target.value})
  }

  bigStarStatusChange = () =>
    this.setState(prevState => ({isStarred: !prevState.isStarred}))

  smallStarStatusChange = id => {
    const {AppointmentList} = this.state
    const updatedList = AppointmentList.map(each => {
      if (each.id === id) {
        return {...each, starred: !each.starred}
      }
      return each
    })
    this.setState({AppointmentList: updatedList})
  }

  render() {
    const {isStarred, title, date, AppointmentList} = this.state
    const filteredList = AppointmentList.filter(each => each.starred === true)
    const class1 = isStarred ? 'blue' : 'transparent'
    const finalList = isStarred ? filteredList : AppointmentList
    return (
      <>
        <div>
          <h1>Add Appointment</h1>
          <form onSubmit={this.submitForm}>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              placeholder="Title"
              type="text"
              value={title}
              onChange={this.titleChange}
            />
            <label htmlFor="date">DATE</label>
            <input
              type="date"
              id="date"
              placeholder="dd/mm/yyyy"
              value={date}
              onChange={this.dateChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
          alt="appointments"
        />
        <div>
          <h1>Appointments</h1>
          <button
            type="button"
            className={class1}
            onClick={this.bigStarStatusChange}
          >
            Starred
          </button>
        </div>
        <ul>
          {finalList.map(each => (
            <AppointmentItem
              key={each.id}
              appointmentDetails={each}
              smallStarStatusChange={this.smallStarStatusChange}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Appointments
