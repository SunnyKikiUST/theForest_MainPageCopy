import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { addBodyScript } from 'utilities/utilities';
import SafeSetInnerHTML from 'ecommerce/components/SafeSetInnerHTML';
import cuid from 'cuid';
import s from './theforest.scss';

@autobind
export default class App extends Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    isSeller: PropTypes.bool,
    description: PropTypes.string,
    isShowDescription: PropTypes.bool.isRequired,
    preview: PropTypes.bool,
  };

  static defaultProps = {
    isSeller: false,
    lat: 22.396428,
    lng: 114.17469499999993,
    description: '',
    isShowDescription: false,
    descriptionPosition: 2,
    preview: false,
  };

  constructor(...props) {
    super(...props);

    this.state = {
      mapId: cuid(),
    };
  }

  async componentDidMount() {
    await addBodyScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAPVhK-7wS1_yB1SBzGXBDa8rHYWBYcyS4'
    );
    this.initMap();

    // window.initMap = this.initMap;
    //
    // const GoogleMapLibrary = document.getElementById('googleMap');
    //
    // if (GoogleMapLibrary) {
    // this.initMap();
    // } else {
    // 	if (this.props.isSeller) {
    // 		loadJS(sellerApiURL, 'googleMap');
    // 		this.initMap();
    // 	} else {
    // 		loadJS(buyerApiURL, 'googleMap');
    // 		this.initMap();
    // 	}
    // }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.descriptionPosition !== this.props.descriptionPosition) {
      this.initMap();
    }

    if (prevProps.lat !== this.props.lat) {
      const location = {
        lat: this.props.lat,
        lng: this.props.lng,
      };

      if (this.marker !== null) {
        this.marker.setMap(null);
      }

      this.map.setCenter(location);
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    }
  }

  initMap() {
    //make sure the library have successfully loaded
    try {
      this.map = new google.maps.Map(
        document.getElementById(this.state.mapId),
        {
          center: {
            lat: this.props.lat,
            lng: this.props.lng,
          },
          scrollwheel: false,
          zoom: 18,
        }
      );

      this.marker = new google.maps.Marker({
        position: {
          lat: this.props.lat,
          lng: this.props.lng,
        },
        map: this.map,
      });
    } catch (err) {
      setTimeout(() => {
        this.initMap();
      }, 500);
    }
  }

  render() {
    const { description, isShowDescription, descriptionPosition } = this.props;

    return (
      <div>
            <Row
                type={'flex'}
                className={s.map_api}
            >
                <div>
                    <div
                    id={this.state.mapId}
                    />
                    {isShowDescription && (
                    <div style={{ marginTop: 10, color: 'initial' }}>
                        <SafeSetInnerHTML html={description} />
                    </div>
                    )}
                </div>
            </Row>
      </div>
    );
  }
}


