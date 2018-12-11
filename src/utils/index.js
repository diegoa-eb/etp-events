export const formatEventData = ({
    id,
    start_date: startDate,
    image: {
        url: imageUrl
    },
    primary_venue_with_places: {
        address: {
            localized_address_display: address,
        }
    },
    ticket_availability,
    name,
    url,
    start_time: startTime,
    tickets_by: ticketsBy
}) => {
    let minPrice = {
        currency: 'AUD',
        currencyFormat: "¤#,##0.00",
        minPriceValue: 0
    }
    if (ticket_availability.minimum_ticket_price) {
        minPrice = {
            ...minPrice,
            currency: ticket_availability.minimum_ticket_price.currency,
            currencyFormat: "¤#,##0.00",
            minPriceValue: ticket_availability.minimum_ticket_price.value
        }
    }

    let shareOptions = {
        isMobile: false,
        twitterHandle: "Eventbrite",
        serverUrl: "https://www.eventbrite.com",
        facebookOptions: {
            appId: "28218816837",
            locale: "en_US",
            page: "www.facebook.com/Eventbrite",
            version: "v2.8",
            xfbml: true,
        },
        trackingCode: "user-profile",
        eventId: id,
        eventUrl: url,
        utm: {}
    }

    return {
        id,
        startDate,
        startTime,
        imageUrl,
        name,
        address,
        minPrice,
        isFree: ticket_availability.is_free,
        url,
        ticketsBy,
        shareOptions,
    };
}