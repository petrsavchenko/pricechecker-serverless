import React, { Component } from 'react'
import { Layer } from 'grommet'

export class ToastLayer extends Component {
  componentDidMount() {
    this.startAutoHideTimeout()
  }

  componentWillUnmount() {
    const { timeoutAutoHide } = this
    if (timeoutAutoHide) {
      clearTimeout(this.timeoutAutoHide)
    }
  }

  startAutoHideTimeout() {
    const { duration, onClose } = this.props
    if (duration) {
      this.timeoutAutoHide = setTimeout(() => {
        onClose()
      }, duration * 1000)
    }
  }

  render() {
    const { children, modal, position, full, ...rest } = this.props
    return (
      <Layer
        position={position || 'top'}
        full={full}
        modal={modal}
        margin="none"
        responsive
        plain={modal ? false : true}
        {...rest}
      >
        {children}
      </Layer>
    )
  }
}
