import React, {Component} from 'react';

class Folder extends Component{
    constructor(props){
        super(props);
        this.state = {
            switch: 'on',
            root: 'Home',
            files: [
              'File1',
              'File2',
              'File3'
            ]   
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        if(this.state.switch === 'off'){
            document.getElementsByClassName('files')[0].style.visibility = 'visible';
            this.setState({
                switch: 'on'
            })
        } else {
            document.getElementsByClassName('files')[0].style.visibility = 'hidden';
            this.setState({
                switch: 'off'
            })
        }
    }

    render(){
        return <div>
            <div>
            {this.state.root}
                <div className = 'files'>
                    <div>{this.state.files[0]}</div>
                    <div>{this.state.files[1]}</div>
                    <div>{this.state.files[2]}</div>
                </div>
            </div>
            <button onClick = {this.toggle}>Toggle</button>
        </div>
    }
}
export default Folder;