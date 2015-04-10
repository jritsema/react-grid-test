var React = require('react');
var Griddle = require('griddle-react');
var request = require('browser-request')

module.exports = React.createClass({

  url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Marietta%2C%20GA&units=imperial&cnt=5',

  columns: [
    'dt',
    'clouds',
    'rain',
    'speed',
    'humidity',
    'pressure',
    'deg'
  ],

  getInitialState: function() {
    return { data: [] };
  },

  componentDidMount: function() {
    request(this.url, function(err, res) {
      if (err) throw err;
      var data = JSON.parse(res.body);
      this.setState({ data: data.list });
    }.bind(this));
  },

  render: function() {

    //show loading indicator
    var content;
    if (this.state.data.length > 0)
      content = <Griddle 
        results={this.state.data} 
        columns={this.columns}
        resultsPerPage={100} 
        showPager={false} 
        showFilter={true}
      />
    else
      content = <span>Loading...</span>    

    return (
      <div className="starter-template">
        <h3>{this.url}</h3>
        {content}
      </div>
    );
  }
});