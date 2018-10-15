import React from 'react'
import styled from 'styled-components'

const FlashContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  paddding: 15px:
  margin-bottom: 20px !important;
  border: 1px solid transparent;
  border-radius: 4px;
`

const FlashError = styled(FlashContainer)`
  color: #A94442;
  background-color: #F2DEDE;
  borderColor: #EBCCD1;
`

const FlashSucces = styled(FLashContainer)`
  color: #3C763D;
  background-color: #DFF0D8;
  border-color: #D6E9C6;
`

const FlashInfo = styled(FlashCOntainer)`
  color: #31708F;
  background-color: #D9EDf7;
  border-color: #BCE8F1;
`

const Close = styled.span`
  float: right;
  color: grey;
  cursor: pointer;
  padding-right: 50px;
`



class Flash extends React.Component {
  state = {...this.props}
  
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props )
      this.setState({...this.props})
  }

  fade = () => {
    setTimeout ( () => {
      this.clearFlash()
    }, this.props.duration || 10000) 
  }

  clearFlash = () => {
    this.setState({message: '', msgType: ''})
  }

  render() {
    let FlashComponent

    const {message, msgType } = this.state
    if (message) {
      switch(msgType) {
        case 'success':
          FlashComponent = FlashSuccess
          break
        case 'error':
          FlashComponent = FlashError
          break
        default:
          FlashComponent = flashInfo
      }

    return(
      <FlashComponent>
        {message}
        { this.fade() }
        <Close onClick={this.clearflash}>close</Close>
      </FlashComponent>
    )
    } else {
     return null
    }
  }
}

export default Flash