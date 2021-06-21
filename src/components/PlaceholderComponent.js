import React from "react";
import { Icon, Image, Item, Rating } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

const PlaceholderComponent = ({ eventItem, chosenCat }) => (
  <Item.Group className="eventList">
    {eventItem.length > 0 ? (
      eventItem
        .slice(0, 10)
        .filter((categoryItem) => categoryItem.categoryId === chosenCat)
        .map((itemEvent, index) => {
          return (
            <Item id={itemEvent.eventId}>
              <Router>
                <Link
                  to={{
                    pathname: `exploreinfo/${itemEvent.eventName}`,
                    state: { eventObj: itemEvent },
                  }}
                >
                  <Item.Image
                    size="small"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />
                </Link>
              </Router>
              <Item.Content>
                <Item.Header as="a">{itemEvent.eventName}</Item.Header>

                <Item.Description>{itemEvent.description}</Item.Description>
                <Item.Extra>
                  <Rating icon="heart" defaultRating={0} maxRating={1} />
                  121 gillningar
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })
    ) : (
      <tr>
        <td colSpan="5">Inget att visa för tillfället</td>
      </tr>
    )}
  </Item.Group>
);

export default PlaceholderComponent;
