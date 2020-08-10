import React from 'react';
import { FontAwesomeIcon } from '../constants/fontAwesome';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            chosenData: "",
            modalVisible: false,
            form: {
                name: '',
                phone: ''
            },
            beforeSubmit:true
        }
    }


    componentWillReceiveProps({ datas, chosenData, modalVisible,driverData }) {
        const {beforeSubmit} = this.state;
        if(beforeSubmit){
            this.setState({
                datas: datas,
                chosenData: chosenData,
                modalVisible: modalVisible,
                driverData:driverData
            }, () => {
                console.log("DATETO = ", datas)
                console.log("chosenData = ", chosenData)
                this.setState({
                    datas: driverData[this.state.chosenData]
                }, () => {
                    console.log("LAST DATAAAA = ", this.state.datas)
                })
            })
        }
    }

    componentWillMount(){
        console.log("PROPSSSSSSCACA = ",this.props)
    }

    submitForm(e) {
        const {updateData} = this.props;
        e.preventDefault();
        console.log("KAMEEEEHAMEEEEEEEEEEEEEEEHAAAAAAAAAAAAAA = ",this.state.datas)
        this.setState({beforeSubmit:false},()=>{
            updateData(this.state.datas);
        })
        
    }

    updateInputValue(evt, val) {
        if (val === "name") {
            this.setState({
                datas: {
                    ...this.state.datas,
                    name: evt.target.value
                }
            },()=>{
                console.log("BRUAKAKAKAKAKAKA = ",this.state.datas)
            });
        } else {
            this.setState({
                datas: {
                    ...this.state.datas,
                    phone: evt.target.value
                }
            });
        }

    }

    render() {
        const { datas, chosenData, modalVisible } = this.state;
        const { toggleModal, refPass } = this.props
        return (
            <div>
                {
                    modalVisible && (
                        <div className="modalBg">
                            <div className="modalWrap">
                                <div className="modalContent" ref={refPass}>
                                    <form className="formWrapper">
                                        <FontAwesomeIcon icon={"times"} className="closeModal" onClick={() => toggleModal()} />
                                        <div className="rowWrap">
                                            <p>Name</p>
                                            <input type="text" value={datas.name} onChange={(e) => this.updateInputValue(e, 'name')} />
                                        </div>
                                        <div className="rowWrap">
                                            <p>Phone</p>
                                            <input type="text" value={datas.phone} onChange={(e) => this.updateInputValue(e, 'phone')} />
                                        </div>
                                        <input type="submit" onClick={(e) => this.submitForm(e)} />
                                        {/* <button onClick={()=>this.submitForm()}>Submit</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        );
    }
}

export default Modal;
