import React,{Component} from 'react';
import Driver from '../contents/driver';
import Modal from '../modal';



class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            datas:[],
            driverData:this.props.driverData,
            chosenData:"",
            modalVisible:false
        }
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({
                modalVisible:false
            },()=>{
                document.removeEventListener('mousedown', this.handleClickOutside);
            })
        }else{
            this.setState({
                modalVisible:true
            },()=>{
                document.addEventListener('mousedown', this.handleClickOutside);
            })
        }
    }

    componentWillReceiveProps({datas, chosenData,driverData}) {      
        this.setState({
            datas:datas,
            chosenData:chosenData,
            driverData:driverData
        })
    }
    toggleModal(idx){
        const {datas} = this.state;
        
        this.setState({
            modalVisible:!this.state.modalVisible,
            chosenData:idx
        },()=>{
            if(this.state.modalVisible){
                document.addEventListener('mousedown', this.handleClickOutside);
            }else{
                document.removeEventListener('mousedown', this.handleClickOutside);
            }
        })
    }

    componentWillMount(){
        console.log("HHAHAHAHAHEHJEHEHEHEHEHEHHE = ",this.props)
    }

    updateData(datas){
        console.log("YOOOOOOHOOOOO")
        this.setState({
            // datas:[{
            //     ...this.state.datas,
            //     contentData:{
            //         ...this.state.datas.contentData,
            //         driver:{
            //             ...this.state.datas.contentData.driver,
            //             datas
            //         }
            //     }
            // }],
            driverData:[
                ...this.state.driverData,
                datas
            ]
        },()=>{
            console.log("DRIVEROOO DATA =",this.state.driverData)
        })
    }

    
    render() {
        const {datas,chosenData,modalVisible} = this.state;
        const {driverData} = this.props;
        return (
            <div className="flex mainContent">
                <div>
                    <Modal modalVisible={modalVisible} toggleModal={(val)=>this.toggleModal(val)} refPass={this.wrapperRef} datas={datas} chosenData={chosenData} updateData={(val)=>this.updateData(val)} driverData={driverData}   />
                </div>
                
                <Driver datas={datas} chosenData={chosenData} toggleModal={(val)=>this.toggleModal(val)} driverData={driverData} />
            </div>
        );
    }
}

export default MainContent;
