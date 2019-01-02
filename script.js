class Stopwatch extends React.Component {
    constructor() {
    	super();
        this.state = {
        	time: 0,
        	running: false
        }
    }

    reset() {
        this.setState ({
            time: 0
        });
    }

	start() {
	    if (!this.state.running) {
	        this.setState ({
	        	running: true
	        });
	        this.interval = setInterval(() => this.setState({
	        	time: this.state.time + 10
	        }), 10);
	    }
	}

	stop() {
	    this.setState ({
	    	running: false
	    });
	    clearInterval(this.interval);
	}

	getPreparedTime(millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  var miliseconds = millis < 1000 ? millis : 0;
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ':' + miliseconds;
	}

	render () {
    return (
      <div className="app">
	      	<div className="container">
			    <nav className="controls">
			    	<div className="button_cont" onClick={() => this.start()}>
			      		<a href="#" className="button" >Start</a>
			      	</div>
					<div className="button_cont" onClick={() => this.stop()}>
			      		<a href="#" className="button" >Stop</a>
			      	</div>
			      	<div className="button_cont" onClick={() => this.reset()}>
			      		<a href="#" className="button" >Reset</a>
			      	</div>
			    </nav>
			    {this.getPreparedTime(this.state.time)}
			</div>
	      </div>
    	)
    }
};

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('app')
);