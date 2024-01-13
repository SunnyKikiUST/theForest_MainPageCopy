import React,{useEffect} from 'react';
import s from './theforest.scss';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function About({data}){
    // useEffect(() => {
    //     AOS.init();
    //   }, []);
    
    return(
        <>
        <section className={s.about}>
            <div className={s.about_text}>
                <div className={s.text_inner}>
                    <span>
                        <h2>
                            {data.text.title}
                        </h2>
                    </span>
                    <p>
                        {data.text.content}
                    </p>
                </div>
            </div>
            <div className={s.about_img}>
                <span>
                    <img src={data.imagelink}>
                    </img>
                </span>
            </div>
        </section>
        </>
    )
}

export default About;