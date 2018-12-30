/*<div class="container">
	    <nav class="controls">
	    	<div class="button_cont" id="start">
	      		<a href="#" class="button" >Start</a>
	      	</div>
			<div class="button_cont" id="stop">
	      		<a href="#" class="button" >Stop</a>
	      	</div>
	      	<div class="button_cont" id="reset">
	      		<a href="#" class="button" >Reset</a>
	      	</div>
	    </nav>
	    <div class="stopwatch"></div>
	    <ul class="results"></ul>
	<div>
*/



class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    reset2() {
    	if (!this.running) {
	        this.times = {
	            minutes: 0,
	            seconds: 0,
	            miliseconds: 0
	        };
	        this.print(this.times);
    	}
    }

    print() {
        this.display.innerText = this.format(this.times);
	}

	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
	    if (!this.running) {
	        this.running = true;
	        this.watch = setInterval(() => this.step(), 10);
	    }
	}

	step() {
	    if (!this.running) return;
	    this.calculate();
	    this.print();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}

	stop() {
	    this.running = false;
	    clearInterval(this.watch);
	}
	
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
      	<div class="container">
		    <nav class="controls">
		    	<div class="button_cont" id="start">
		      		<a href="#" class="button" >Start</a>
		      	</div>
				<div class="button_cont" id="stop">
		      		<a href="#" class="button" >Stop</a>
		      	</div>
		      	<div class="button_cont" id="reset">
		      		<a href="#" class="button" >Reset</a>
		      	</div>
		    </nav>
		    <div class="stopwatch"></div>
		    <ul class="results"></ul>
		</div>
      </div>
    	)
    }
});

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset2());

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
