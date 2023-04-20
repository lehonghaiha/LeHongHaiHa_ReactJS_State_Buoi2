import React, { Component } from 'react'
import Card from './Card'
import List from './List'
import Header from './Header'



export default class BaiTapChonKinh extends Component {
    state = {
        glassPush: {
            "id": '',
            "price": '',
            "name": "",
            "url": "",
            "desc": "",
        }
    }
    // Ham setState khi nguoi dung click
    selectGlasses = (glassClick) => {
        console.log(glassClick);
        this.setState({
            glassPush:glassClick
        })
    }

    render() {

        return (
            <div style={{
                backgroundImage: "url(/glassesImage/bg-img.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition:'center center',

                // minHeight: '900px'
            }}>
                <Header />
                <Card  glassPush={this.state.glassPush}  />
                <List selectGlasses={this.selectGlasses}/>
                <br />

            </div>
        )
    }
}
