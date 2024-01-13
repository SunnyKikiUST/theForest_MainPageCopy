import React from 'react';
import Map from './MapAPI';
import s from './theforest.scss';

function MapPart({data}){
    return(
        <>
        <section className={s.map}>
            <div style={{textAlign:"center"}}>
                <div>
                    <Map 
                      lat={data.map.lat}
                      lng={data.map.lng}
                      isSeller={data.map.isSeller}
                      description={data.map.description}
                      isShowDescription={data.map.isShowDescription}
                      descriptionPosition={data.map.descriptionPosition}
                      preview={data.map.preview}
                    />
                </div>
            
            </div>
            <div className={s.dsec}>
                <div>{/* <div> for view check later */}
                    <span>{/* <span> for view check later */}
                        <h2>
                        {data.description.title.first_part} 
                        <br/>
                        {data.description.title.second_part}
                        </h2>
                    </span>
                    <p>
                        {data.description.text}
                        <br />
                        <img src={data.description.picture}></img>
                    </p>
                    <div className={s.buttonCenter}>
                        <a className={s.button}>Location Map</a>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default MapPart;