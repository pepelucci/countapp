var Counter = React.createClass({
	propTypes: {
		value: React.PropTypes.number.isRequired,
		onIncreaseClick: React.PropTypes.func.isRequired
	},
	render: function () {
		const { value, onIncreaseClick } = this.props
		console.log(onIncreaseClick)
		console.log(value)
		return (
			<div>
			  <button type="button" onClick={onIncreaseClick}>Click!</button>
			  <p>Total count: { value }</p>
			
			</div>
		);
	}
});
	  
// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
	 return {
		onIncreaseClick: function() { dispatch({ type: 'INCREMENT' })}
	}
}
	  
var store = Redux.createStore(count)

var App = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


ReactDOM.render(
	<ReactRedux.Provider store={store}>
		<App />
	</ReactRedux.Provider>,
		
	document.getElementById('message')
);



console.log('armed and ready')