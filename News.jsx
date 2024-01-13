import React, {useState, useEffect, useRef}from 'react';
import s from './theforest.scss';
import cx from 'classnames';


function News({data}){

    const backgroundVideoRef = useRef(null);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = backgroundVideoRef.current;
            const elementOffsetTop = element.offsetTop;
            const elementOffsetBottom = element.offsetTop + element.offsetHeight;
            const scrollTop = window.pageYOffset;
            // console.log("lll", backgroundVideoRef.current)
            // console.log("lllscrollTop", scrollTop);
            // console.log("lllelementOffsetTop", elementOffsetTop);
            if(scrollTop >= elementOffsetTop && scrollTop < elementOffsetBottom)
                setIsSticky(true);
            else
                setIsSticky(false);
        }

        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
       
      }, []);

    return(
        <>
            <div ref={backgroundVideoRef} className={isSticky ? cx(s.sticky, s.news) : s.news} >
                
                <div className={s.newsVideo}>
                    <video playsInline autoPlay muted loop>
                        <source src={data.backgroundvideolink}/>
                    </video>
                </div>
                <h2>happening</h2>
                <ul>
                    {
                        data.news.map((content) => (
                            <li className={s.eachnews}>
                                <div>
                                    <h3>{content.title}</h3>
                                    <small>{content.date}</small>
                                    <figure className={s.news_image}>
                                        <a>   
                                            <img src={content.image}></img>         
                                        </a>
                                    </figure>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className={s.buttonCenter}>
                    <a className={s.button}>More Happening</a>
                </div>
            </div>
            
        </>
    )
}

export default News;
