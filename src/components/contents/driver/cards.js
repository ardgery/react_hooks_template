import React from 'react';
import { FontAwesomeIcon } from '../../constants/fontAwesome';
import ProfilePicture from '../../../assets/images/brian_james.jpg';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            datas:[],
            chosenData:"",
            tooltipVisible:false,
            tooltipChosen:null
        }
    }
    componentWillReceiveProps({datas, chosenData,toggleModal,driverData}) {    
        console.log("HUBAHUBAAAAA = ",driverData)  
        // this.setState({
        //     datas:datas,
        //     chosenData:chosenData
        // })
        this.setState({
            datas: driverData,
            chosenData: chosenData,
            toggleModal:toggleModal
        },()=>{
            console.log("PAPUPAPUUUU =",this.state.datas)
        })
        this.setData(datas)
    }

    componentWillMount(){
        console.log("OWPAOWPAOPWOPWAOPOW = ",this.props)
        this.setData(this.props)
    }

    setData(props){
        console.log("THISPROPS = ",props)
    }

    render() {
        const {datas,chosenData,tooltipVisible,tooltipChosen} = this.state;
        const array =[1,2,3,4,5,6];
        let marginStyle={
            marginRight:"1%"
        }
        const toogleTooltip = (idx) =>{
            console.log("MBAAAA")
            this.setState({
                tooltipVisible:!this.state.tooltipVisible,
                tooltipChosen:idx
            })
        }
        const chooseTooltip = (par,idx) =>{
            const {toggleModal,tooltipVisible}=this.state;
            
            if(par==='edit'){
                this.setState({tooltipVisible:!tooltipVisible},()=>{
                    toggleModal(idx)
                })
                
            }
        }
        return (
            <div className="cardWrapper">
                {
                    datas && (
                        datas.map(function(v,i){
                            return(
                                <div key={i} className="card" style={  i%3 === 0 && i!==0  ?{}:marginStyle }>
                                    <div className="cardHeader">
                                        <div className="headerInside">
                                            <div className="headerLeft">
                                                <p className="idDriver">ID Driver</p>
                                                <p>{v.id}</p>
                                            </div>
                                            <div className="headerRight">
                                                <FontAwesomeIcon icon={"ellipsis-h"} className="ellipsis" onClick={ ()=> toogleTooltip(i)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardContent">
                                        {
                                            tooltipChosen === i && tooltipVisible && (
                                                <div className="toolTip">
                                                    <p className="tooltipOption" onClick={()=>chooseTooltip('edit',i)}>Edit</p>
                                                    <p className="tooltipOption" onClick={()=>chooseTooltip('delete',i)}>Delete</p>
                                                </div>
                                            )
                                        }
                                        <div className="circleContainer">
                                            <div id="activeBorder" className="active-border">
                                                <div id="circle" className="circle">
                                                    <p className="prec 270" id="prec">20%</p>
                                                    <p className="prec 270" id="prec">Ontime</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="photoWrap">
                                            <img src={ProfilePicture} alt="" width="100%"/>
                                        </div>
                                        <div className="texts">
                                            <div className="textWrap">
                                                <p>Nama Driver</p>
                                                <p>{v.name}</p>
                                            </div>
                                            <div className="textWrap">
                                                <p>Telepon</p>
                                                <p>{v.phone}</p>
                                            </div>
                                            <div className="textWrap">
                                                <p>Jadwal</p>
                                                <p className="schedule">{v.schedule}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )

                }
            </div>
        );
    }
}

export default Cards;
