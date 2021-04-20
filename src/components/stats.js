import { Loading } from './loading';
import moment from 'moment'
import { Link } from 'react-router-dom';

function Stats(props) {
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
            <div className="App">            
                <div className="stats-main">
                    <div className="stats-header">
                    <h6 className="stats-header-adsoul">ADSOUL</h6>
                    </div>
                    <div className="stats-app-data row">
                        <div className="stats-app-header col-12">
                            <Link to="/dashboard"><span className="fa fa-arrow-left"></span></Link>
                            <div className="colored-box"></div>
                            <span className="app-item-company">
                                <div className="app-item-company-name">{props.app.appName}</div>
                                <div className="app-item-publisher-name">{props.app.publisherName}</div>
                            </span>
                        </div>
                        <div className="container">                        
                            <div className="stats-app-table col-12 card">
                                {
                                    props.data?
                                    <table>
                                        <tbody>
                                            <tr className="stat-table-row">
                                                <th className="stat-table-date">Date</th>
                                                <th>Revenue</th>
                                                <th>Ad Requests</th>
                                                <th>Ad Responses</th>
                                                <th>Impressions</th>
                                                <th>Click8s</th>
                                                <th>Render Rate</th>
                                            </tr>
                                            {
                                                props.data.map( (item, index) => {
                                                    let currDate = moment(item.date, 'DD-MM-YYYY').format("DD MMMM YYYY")
                                                    let date = new Date(currDate).getDate();
                                                    let year = new Date(currDate).getFullYear();
                                                    let month = new Date(currDate).toLocaleString('default', { month: 'long' });
                                                    switch(date) {
                                                        case 1: date = date + "st";break;
                                                        case 2: date = date + "nd";break;
                                                        case 3: date = date + "rd";break;
                                                        default: date = date + "th";
                                                    }
                                                    return (
                                                        <tr className="stat-table-row" key ={index}>
                                                            <td className="stat-table-date">{`${date} ${month}, ${year}`}</td>
                                                            <td>{item.revenue}</td>
                                                            <td>{item.adRequest}</td>
                                                            <td>{item.adResponse}</td>
                                                            <td>{item.impressions}</td>
                                                            <td>{item.clicks}</td>
                                                            <td>{Math.round((item.impressions/item.adResponse)*100)}%</td>
                                                        </tr>
                                                    )                                            
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    :
                                    <Loading />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stats;