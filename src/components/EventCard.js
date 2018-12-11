import React from 'react';
import './EventCard.scss';


export class EventCard extends React.Component {
    buildFreeTag(){
        const {isFree} = this.props;
        let freeTag;

        if(isFree){
            freeTag = (
                <div className="event-card__free-tag">
                    <span>Free</span>
                </div>
            );
        }

        return freeTag;
    }
    render () {
        const { imageURL, name, startDate, address, minimunTicketPrice, isFree } = this.props;

        return (
            <div className="event-card">
                <div className="event-card__image-wrapper">
                    {this.buildFreeTag()}
                    <img className="event-card__image" src={imageURL}
                        alt="Nonpalidece" />
                </div>
                <div className="event-card__content">
                    <h1 className="event-card__header">{name}</h1>
                    <div className="event-card__info ">{startDate}</div>
                    <div className="event-card__info">{address}</div>
                    <div className="event-card__info">{minimunTicketPrice}</div>
                </div>
            </div>
        );
    }
}