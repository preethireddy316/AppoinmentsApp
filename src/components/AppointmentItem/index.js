/* eslint-disable react/no-unknown-property */
// Write your code here

// Write your code here
// Write your code here
const AppointmentItem = props => {
  const {smallStarStatusChange, appointmentDetails} = props
  const {id, title, date, starred} = appointmentDetails
  const starChange = () => {
    smallStarStatusChange(id)
  }
  const url = starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li>
      <p>{title}</p>
      <button type="button" testid="star" onClick={starChange}>
        <img src={url} alt="star" />
      </button>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
