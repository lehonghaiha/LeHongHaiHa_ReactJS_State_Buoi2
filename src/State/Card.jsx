import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        let {glassPush} = this.props;
        return (
            <div className="container py-5">
                <div className='text-center'>
                    <div className='position-relative d-inline-block'>
                        <img src="/glassesImage/model.jpg" alt="model" />
                        <div>
                            <img className='position-absolute top-0 start-50 translate-middle' src={glassPush.url}alt="v1" style={{
                                width: '60%',
                                marginTop: '180px',
                                opacity: '60%'
                            }} /></div>
                        <div className='text-white bg-warning bg-opacity-25 position-absolute bottom-0 start-0 text-start p-2'>
                            <h3>
                                {glassPush.name}
                            </h3>
                            <p>{glassPush.desc}</p>
                        </div>
                    </div>
                </div>
            </div>  


        )
    }
}

