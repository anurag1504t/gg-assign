import { Card } from 'reactstrap';
import desktop from '../assets/asset1.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

function Dashboard(props) {
    return (
        <div className="dashboard">            
            <div className="row">
                <Left />
                <Right appList={props.appsList.appsList} appData = {props.appData.appData}/>
            </div>
        </div>
    );
}

function Left() {
    return (
        <div className="dashboard-left col-12 col-md-6">
            <div className="dashboard-left-top">
                <div className="container">
                    <p>ADSOUL</p>
                    <span><img src={desktop} alt="ERROR"/></span>
                </div>
            </div>
            <div className="dashboard-left-bottom col-12">
                <div className="container">
                    <h4>Revenue Optimization</h4>
                    <div className="row">
                        <div className="dashboard-left-bootom-icons col-6">
                        <span><img src={icon1} alt="ERROR"/></span>
                        <p>Fill Rate</p>
                        </div>
                        <div className="dashboard-left-bootom-icons col-6">
                        <span><img src={icon2} alt="ERROR"/></span>
                        <p>Improve CTR</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="dashboard-left-bootom-icons col-6">
                        <span><img src={icon3} alt="ERROR"/></span>
                        <p>Refresh Rate</p>
                        </div>
                        <div className="dashboard-left-bootom-icons col-6">
                        <span><img src={icon4} alt="ERROR"/></span>
                        <p>Quick Integration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Right({appList, appData}) {
    // console.log(appData['1']);
    return (
        <div className="dashboard-right col-12 col-md-6">
            <div className="header">
                <h6>ADSOUL</h6>
            </div>
            <div className="app-list">
                {
                    appList?
                        appList.map( appItem => {
                            let appDataWithId = (appData[`${appItem.id}`]);
                            console.log(appDataWithId);
                            return(
                                <Card className="app-item" key={appItem.id}>
                                    <div className="app-item-name">
                                        <span className="colored-box"></span>
                                        <span className="app-item-company">
                                            <p>{appItem.appName}</p>
                                            <p>Publisher Name</p>
                                        </span>
                                    </div>
                                    <div className="app-item-details">

                                    </div>
                                </Card>
                            )
                        })
                        :<div></div>
                }
            </div>

        </div>
    );
}

export default Dashboard;