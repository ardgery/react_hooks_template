import React from 'react';
import Menu from '../menu';



class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            datas:[],
            setContentData:null
        }
    }
    componentWillReceiveProps({datas}) {    
        this.setState({ datas:datas })
    }
    render() {
        const {datas} = this.state;
        const {setContentData} = this.props;
        
        return (
            <div className="sideBar">
                <Menu datas={datas} setContentData={(val)=>setContentData(val)} />
            </div>
        );
    }
}

export default SideBar;
