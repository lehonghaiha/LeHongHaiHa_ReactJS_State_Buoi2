import React, { Component } from 'react'
import data from '../assets/data/dataGlasses.json'
export default class List extends Component {
    renderMapList = () => {
        let {selectGlasses} = this.props;
        return data.map((prod) => {
            return <div key={prod.id} className='col-2 p-3'>
                <img  style={{
                    width: '100%'
                }} src={prod.url} alt={prod.id} onClick={()=>{
                    selectGlasses(prod);
                }}/>
            </div>
        });
        
    }
    render() {
        let {selectGlasses} = this.props;
        return (

            <div className='container d-flex justify-content-center bg-body-tertiary mt-3'>
                <div className='row px-3'>
                    {this.renderMapList()}
                </div>
            </div>

        )
    }
}

/*
<div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v1.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v2.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v3.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v4.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v5.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v6.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v7.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v8.png" alt="v1" />
                    </div>
                    <div className='col-2 p-3'>
                        <img style={{
                            width: '100%'
                        }} src="/glassesImage/v9.png" alt="v1" />
                    </div>
*/