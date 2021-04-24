import Tasks from './Tasks';

const Task = ({task}) => {
    return (
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task