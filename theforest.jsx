import React , {useState} from 'react';
import HeaderWithVideo from './Header';
import About from './About';
import News from './News';
import MapPart from './Map';
import Footer from './Footer'
import MapStateToProps from 'react-redux/es/connect/mapStateToProps';

const HeaderData = {
    "Information": {
        "imagelink":"/image/sunnyimage/theforest/theforest_banner.png",
        "imagelink_mobile":"/image/sunnyimage/theforest/theforest_banner_mobile.png",
        "videolink":"/image/sunnyimage/theforest/theforest_video.mp4",
        "logolink":"/image/sunnyimage/theforest/theforest_logo.svg",
        "logohref":"#",
        "backgroundimagelink":"/image/sunnyimage/theforest/theforest_header_background.jpeg",
        "iglink":"#",
        "fblink":"#"
    } ,

    "Menu" : [
    {"title": "Latest Happening", "link":"#"},
    {"title": "Shopping & Dining", "link":"#"},
    {"title": "Location", "link":"#"},
    ] ,

    "pushmenu" : {
        "logolink":"/image/sunnyimage/theforest/theforest_logo2.svg",
        "logohref":"#",
    }

}

const AboutData = {
    "text": {
        "title": "Urbanities, Pursuit of Wellness Living, Learning & sharing",
        "content": "THE FOREST – a hub of outdoor living that fosters a sustainable environment with ample greenery. "
    },

    "imagelink": "/image/sunnyimage/theforest/theforest_aboutimg.jpeg"
}

const NewsData = {
    "backgroundvideolink": "/image/sunnyimage/theforest/theforest_grassvideo.mp4",

    "news": [
        {
            "title":"【Shopage Good News】",
            "date":"03/06/2023 - 31/07/2023",
            "image":"/image/sunnyimage/theforest/theforest_newspicture.jpeg"
        },
        {
            "title":"【Shopage Good News】",
            "date":"03/06/2023 - 31/07/2023",
            "image":"/image/sunnyimage/theforest/theforest_newspicture.jpeg"
        },
        {
            "title":"【Shopage Good News】",
            "date":"03/06/2023 - 31/07/2023",
            "image":"/image/sunnyimage/theforest/theforest_newspicture.jpeg"
        },
        {
            "title":"【Shopage Good News】",
            "date":"03/06/2023 - 31/07/2023",
            "image":"/image/sunnyimage/theforest/theforest_newspicture.jpeg"
        },
        {
            "title":"【Shopage Good News】",
            "date":"03/06/2023 - 31/07/2023",
            "image":"/image/sunnyimage/theforest/theforest_newspicture.jpeg"
        },
        {
            "title":"【Shopage Good News】",
            "date":"03/06/2023 - 31/07/2023",
            "image":"/image/sunnyimage/theforest/theforest_newspicture.jpeg"
        },

    ]
}

const MapData = {
    "description": {
        "title": {
           "first_part":"THE FOREST at Hong Kong’s historical "  ,
           "second_part":"landmark of Sneaker Street"
        } ,
        "text": "Inspired by The Artisanal Movement, THE FOREST showcases a comprehensive range of the latest sports-related products in the stunning heritage location of Sneaker Street.",
        "picture": "/image/sunnyimage/theforest/theforest_map_companylogo.svg"
    } ,
    "map":{
        "lat": 22.335508,
        "lng": 114.145844,
        "isSeller": false,
        "description": "",
        "isShowDescription": false,
        "descriptionPosition": 2,
        "preview": false
    }
}

const FooterData = {
     "menu": [
        {
            "title":"Home" ,
            "link":"#"
        },
        {
            "title":"Latest Happening" ,
            "link":"#"
        },
        {
            "title":"Shopping & Dining" ,
            "link":"#"
        },
        {
            "title":"Location" ,
            "link":"#"
        },
        {
            "title":"Contact us" ,
            "link":"#"
        },
        {
            "title":"Terms of Use" ,
            "link":"#"
        },
     ],

     "logolink":"/image/sunnyimage/theforest/theforest_logo2.svg" ,
     "image":[
        {"imagelink":"/image/sunnyimage/theforest/theforest_footer_image1.svg", "href":"#"},
        {"imagelink":"/image/sunnyimage/theforest/theforest_footer_image2.svg", "href":"#"},
     ]
 }

function TheForest(){
    return(
        <>
            <HeaderWithVideo 
            data={HeaderData}
            />
            <About
            data={AboutData}
             />
             <News
             data={NewsData}
             />
             <MapPart
             data={MapData}
             />
             <Footer
             data={FooterData}
             />
        </>
    )
}

export default TheForest;