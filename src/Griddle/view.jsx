var React = require('react');
var Griddle = require('griddle-react');
var request = require('browser-request')

module.exports = React.createClass({

  url: 'https://brilliant-inferno-2993.firebaseio.com/prayersForChildren.json',

  getInitialState: function() {
    return { data: [] };
  },

  componentDidMount: function() {
    request(this.url, function(err, res) {
      if (err) throw err;
      var data = JSON.parse(res.body);
      this.setState({ data: data });
    }.bind(this));
  },

  render: function() {

    //show loading indicator
    var content;
    if (this.state.data.length > 0)
      content = <Griddle 
        results={this.state.data} 
        resultsPerPage={100} 
        showPager={false} 
        showFilter={true}
      />
    else
      content = <span>Loading...</span>    

    return (
      <div className="starter-template">
        <h3>Griddle</h3>
        {content}
      </div>
    );
  }
});