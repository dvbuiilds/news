// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Footer extends Component {
//   static propTypes = {}

  render() {
    return (
        <>
        <section className="bg-dark" >
            <div className="container text-center text-white">
                <div className='py-4 h5'>
                    NewsMonkey Pvt. Ltd. © 2023. Made with love by Dhairya Varshney.
                </div>
            </div>
        </section>
        </>
    )
  }
}

export default Footer