import React from 'react';
import Header from './header/';
import MainContent from './container/mainContent';
import SideBar from './container/sideBar';
import axios from "axios";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      chosenData:""
    };
    this.setContentData = this.setContentData.bind(this);
  }
  componentWillMount() {
    axios.get('datas.json')
      .then((response) => {
        // handle success
        console.log("resp = ", response.data);
        this.setState({ datas: response.data.datas, driverData:response.data.driverData })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  setContentData(value){
    console.log("Valueee = ",value)
    this.setState({ chosenData: value })
  }


  render() {
    const { datas,chosenData,driverData } = this.state;
    return (
      <div className="mainWrapper">
        <Header />
        <div className="flexContainer">
          <SideBar datas={datas} setContentData={(val)=>this.setContentData(val)}  />
          <MainContent datas={datas} chosenData={chosenData} driverData={driverData} />
        </div>
      </div>
    );
  }
}
