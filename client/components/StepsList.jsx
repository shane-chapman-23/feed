import React from 'react'
import {connect} from 'react-redux'

function StepsList (props) {
  const steps = props.steps

  return(
    <>
      {/* map over steps for desired recipe */}
      <div>
        {steps.map(step => <ul><li key={step.step_number}>{step.step_number}. {step.step_desc}</li></ul>)}
      </div>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    steps: globalState.steps.steps
  }
}

export default connect(mapStateToProps)(StepsList)