var USER_DATA = {
  name: "Luke Aveil",
  username: "LukeAveil",
  image: "https://pbs.twimg.com/profile_images/606810691551559680/9AGnc6wG.jpg"
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} />;
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
