import React from 'react';
import {
  AppRegistry,
  Box,
  View,
  Plane
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

  state = {
    color: '#FFFFFF',
    rotate: 45,
  }

  componentWillMount() {
    this.setRotation();    
  }

  setRotation = () => {
    setTimeout(() => {
      this.setState({
        rotate: this.state.rotate + 10
      });
      this.setRotation();
    }, 100)
  }

  setColor(position) {
    this.setState({
      position,
    });
  }

  resetColor() {
    this.setState({
      position: -1
    })
  }

  render() {
    const { position, rotate } = this.state;
    return (
      <View>
        {[0, 1, 2, 3, 4].map(val =>
          <Box
            key={val}
            texture="https://i.imgur.com/mYmmbrp.jpg"
            dimWidth={1}
            dimDepth={1}
            dimHeight={1}
            style={{
              color: position === val ? 'red' : '#FFFFFF',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, (3 * val) - 1, (-5 * (val + 1))]}, {rotateY: rotate}, {rotateZ: rotate}],
            }}
            onEnter={this.setColor.bind(this, val)}
            onExit={this.resetColor.bind(this, val)}
          />)}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
