import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Submit'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'I am default props'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyles = {
//     color: 'red' ,
//     backgroundColor: 'black'
// }

export default Header
