import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './loading';
import desktop from '../assets/asset1.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

function Dashboard(props) {
    if (props.isLoadingData || props.isLoadingList) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessData) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMessData}</h4>
                </div>
            </div>
        );
    }
    else if(props.errMessList) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMessList}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="dashboard row">          
                <Left />
                <Right appList={props.appsList.appsList} appData = {props.appData.appData}/>
            </div>
        );
    }    
}

function Left() {
    return (
        <div className="dashboard-left col-12 col-md-6">
            <div className="dashboard-left-top">
                <div className="container">
                    <div className="dashboard-header-adsoul">ADSOUL</div>                    
                </div>
                <div className="dashboard-top-image">
                <img src={desktop} alt="ERROR"/>
                </div>
            </div>
            <div className="dashboard-left-bottom col-12">
                <div className="dashboard-left-bottom-header container">Revenue Optimization</div>
                <div className="dashboard-left-bottom-items container">                    
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
    return (
        <div className="dashboard-right col-12 col-md-6">
            <div className="dashboard-right-header row">
                <span className="dashboard-right-header-app col">Apps</span>
                <span className="fa fa-cog ml-auto"></span>
            </div>
            <div className="dashboard-right-app-list container">
                {
                    appList?
                        appList.map( appItem => {
                            let appDataWithId = (appData[`${appItem.id}`]);
                            return(
                                <Card className="dashboard-right-app-item" key={appItem.id}>
                                    <div className="row">                                    
                                        <div className="col-9">
                                            <div className="dashboard-right-app-item-name row">
                                                <span className="dashboard-colored-box"></span>
                                                <span className="app-item-company">
                                                    <div className="dashboard-app-item-company-name">{appItem.appName}</div>
                                                    <div className="dashboard-app-item-publisher-name">{appItem.publisherName}</div>
                                                </span>
                                            </div>
                                            <div className="dashboard-right-app-item-details row">
                                                <div className="dashboard-app-item-component">
                                                    <div className="dashboard-app-item-component-name">Revenue</div>
                                                    <div className="dashboard-app-item-value-name">${appDataWithId[0].revenue}</div>
                                                </div>
                                                <div className="dashboard-app-item-component">
                                                    <div className="dashboard-app-item-component-name">Ad Requests</div>
                                                    <div className="dashboard-app-item-value-name">{Math.ceil(appDataWithId[0].adRequest/1000000)}M</div>                                            
                                                </div>
                                                <div className="dashboard-app-item-component">
                                                    <div className="dashboard-app-item-component-name">Ad Response</div>
                                                    <div className="dashboard-app-item-value-name">{Math.ceil(appDataWithId[0].adResponse/1000000)}M</div>                                            
                                                </div>
                                                <div className="dashboard-app-item-component">
                                                    <div className="dashboard-app-item-component-name">Impressions</div>
                                                    <div className="dashboard-app-item-value-name">{Math.ceil(appDataWithId[0].impressions/1000000)}M</div>                                            
                                                </div>
                                            </div>
                                            </div>
                                        <div className="col-3">
                                            <Link to={`/appstat/${appItem.id}`} ><span className="fa fa-arrow-right ml-12"></span></Link>
                                        </div>
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