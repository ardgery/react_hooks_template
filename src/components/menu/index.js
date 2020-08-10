import React from 'react';
import { FontAwesomeIcon } from '../constants/fontAwesome';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            setContentData:this.props.setContentData
        }    
    }
    componentWillReceiveProps({ datas,setContentData }) {
        this.setState({  datas: datas })

    }
    render() {
        const {setContentData} = this.props;
        function chooseMenu(value){
            setContentData(value);
        }
        const { datas } = this.state;
        return (
            <div className="menuWrap">
                {
                    datas.map(function(v,i){
                        return(
                            <div className="menuContent" key={v.idMenu} onClick={()=>chooseMenu(v.idMenu)}>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={v.icon} />
                                </div>
                                <p className="titleMenu">{v.menu}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
