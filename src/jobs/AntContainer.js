import React, { Component } from 'react';
import { Slider, Switch } from 'antd';

const marks = {
  0: '0',
  10: '1K',
  20: '2K',
  30: '3K',
  40: '4K',
  50: '5K',
  60: '6K',
  70: '7K',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>10K Euro</strong>,
  },
};

class AntContainer extends Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Slider range marks={marks} defaultValue={[20,60]} />

      </div>
    );
  }
}

export default AntContainer;
