import './CSS/TodoItem.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';
import PropTypes from "prop-types";

export const TodoItem = ({no, text, display}) => {
	return (
		<div className={'todo-item'}>
			<div className={'todo-item-container'}>
				{display === "" ? <img src={not_tick} alt={'not ticked'}/> : <img src={tick} alt={'ticked'}/>}
				<div className={'todo-item-text'}>{text}</div>
			</div>
			<img className={'todo-item-delete'} src={cross} alt={'delete todo'}/>
		</div>
	)
}

TodoItem.propTypes = {
	no: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	display: PropTypes.string
}
