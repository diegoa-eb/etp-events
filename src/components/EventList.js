import React from 'react';
import EventCard from 'eventbrite_design_system/eventCard/EnhancedEventCard';


export default class EventList extends React.Component {

    _buildEventCards() {
        const {
            events
        }=this.props;

        let eventCards;

        eventCards=events.map(({
            id,
            minPrice,
            imageUrl,
            address,
            name,
            isFree,
            url,
            startTime,
            startDate,
            ticketsBy,
            shareOptions,
        }) => {
            return (
                <div className="event-card-container" key={id}>
                    <EventCard
                        id={id}
                        isAuthenticated={true}
                        minPrice={minPrice}
                        imageUrl={imageUrl}
                        edgeColor="#b18f7f"
                        locationInfo={address}
                        startTime={startTime}
                        startDate={startDate}
                        isFree={isFree}
                        ticketsBy={ticketsBy}
                        name={name}
                        savedByYou={true}
                        shareOptions={shareOptions}
                        url={url}
                        style="standard"
                        type="list"
                        imageStyle="fixed"
                        isNoFollow={false}
                    />
                </div>
            )
        });

        return eventCards;
    }

    render() {
        return (
            <div className="eds-l-mar-bot-10">
                {this._buildEventCards()}
            </div>
        );
    }
}