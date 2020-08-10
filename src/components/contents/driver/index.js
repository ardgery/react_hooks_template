import React from 'react';
import Cards from './cards';
import { FontAwesomeIcon } from '../../constants/fontAwesome';


class Driver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            chosenData: "",
            toggleModal: ""
        }
    }
    componentWillReceiveProps({ datas, chosenData, toggleModal,driverData }) {
        console.log("DRIVERDATAAA = ",driverData)
        this.setState({
            datas: datas,
            chosenData: chosenData,
            toggleModal: toggleModal,
            driverData:driverData
        })
    }
    render() {
        const { datas, chosenData,driverData } = this.state;
        const { toggleModal } = this.props;
        return (
            <div>
                <div className="headerDriverWrapper">
                    <div>
                        <p>DRIVER MANAGEMENT</p>
                        <p>Daftar Driver yang bekerja dengan Anda</p>
                    </div>
                    <div className="headerRight">
                        <div className="search">
                            <FontAwesomeIcon icon={"search"} className="searchIcon" />
                            <input type="text" placeholder="Cari Driver" />
                        </div>
                        <button>TAMBAH DRIVER <FontAwesomeIcon icon={"plus"} /></button>
                    </div>
                </div>
                <Cards datas={datas} chosenData={chosenData} toggleModal={toggleModal} driverData={driverData} />
            </div>
        );
    }
}

export default Driver;
