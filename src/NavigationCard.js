import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationCard.css';

const NavigationCard = props => {
    let statusContainer, statusDiv;
    if (props.status) {
        statusContainer = "navigation-card-container navigation-card-container-active"
        statusDiv = "status-div status-div-active pull-left";
    } else {
        statusContainer = "navigation-card-container navigation-card-container-inactive"
        statusDiv = "status-div status-div-inactive pull-left";
    }

    return (
        <Link to={props.path}>
            <div className={statusContainer}>
                    <div className={statusDiv}/>
                    <div className="navigation-card-text">
                        <p className="card-text">
                            {props.text}
                        </p>
                    </div>
            </div>
        </Link>
    )
}

export default NavigationCard;