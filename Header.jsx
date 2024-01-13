import React,{useState, useRef, useEffect} from 'react';
import s from './theforest.scss';
import {Icon} from 'antd';
import PushMenu from './PushMenu';
import cx from 'classnames';

function HeaderWithVideo({data}){

    const [activePushMenu, switchActivePushMenu] = useState(false);

    function SwitchActivePushMenuHandler(){
        switchActivePushMenu((prev) => !prev);
    }

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

        <div ref={backgroundVideoRef} className={isSticky ? cx(s.sticky, s.header) : s.header}>
            <PushMenu data={data} activePushMenu={activePushMenu}/>
            <div className={s.headerContent}>
                <a href={data.Information.logohref} className={s.logo}>
                    <img src={data.Information.logolink} />
                </a>
                <nav className={s.menu_option}>
                    <ul>
                    {

                        data.Menu.map((content) => (
                            <li>
                                <a href={content.link}>
                                    {content.title}
                                </a>
                            </li>
                        ))
                    }
                    </ul>
                </nav>
                <div className={s.switch_language}>
                    <span>
                        <a href="#">繁</a>
                        <a href="#">简</a>
                    </span>
                </div>
                <div className={s.top_social}>
                    <a href={data.Information.fblink}>
                        <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><circle cx="256" cy="256" r="52.5"/><path d="m256 6c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm154.458 313.54c-1.2 23.768-7.879 47.206-25.2 64.343-17.489 17.3-41.038 23.746-65.035 24.934h-128.445c-24-1.188-47.546-7.63-65.035-24.934-17.322-17.137-24-40.575-25.2-64.343v-127.08c1.2-23.768 7.879-47.206 25.2-64.344 17.489-17.3 41.038-23.746 65.035-24.933h128.444c24 1.187 47.546 7.63 65.035 24.933 17.322 17.138 24 40.576 25.2 64.344z"/><path d="m318.6 132.138c-31.286-.858-93.906-.858-125.192 0-16.281.447-34.738 4.5-46.338 16.89-12.054 12.879-16.609 28.439-17.071 45.846-.812 30.552 0 122.252 0 122.252.529 17.405 5.017 32.967 17.071 45.846 11.6 12.394 30.057 16.443 46.338 16.89 31.286.858 93.906.858 125.192 0 16.281-.447 34.738-4.5 46.338-16.89 12.054-12.879 16.609-28.439 17.071-45.846v-122.252c-.462-17.407-5.017-32.967-17.071-45.846-11.604-12.394-30.061-16.443-46.338-16.89zm-62.6 205.237a81.375 81.375 0 1 1 81.375-81.375 81.375 81.375 0 0 1 -81.375 81.375zm81.721-145.953a16.275 16.275 0 1 1 16.279-16.275 16.275 16.275 0 0 1 -16.279 16.275z"/></svg>
                    </a>
                    <a href={data.Information.iglink}>
                        <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m256 506c138.071 0 250-111.929 250-250s-111.929-250-250-250-250 111.929-250 250 111.929 250 250 250zm-88.011-295.4h51.911v-44.521c0-51.628 31.519-79.729 77.573-79.729a426.783 426.783 0 0 1 46.539 2.379v53.96h-31.759c-25.057 0-29.909 11.907-29.909 29.382v38.529h59.91l-7.806 60.5h-52.1v154.55h-62.448v-154.55h-51.911z" fill-rule="evenodd"/></svg>
                    </a>
                </div>
            </div>

            <div className={s.menu_bars} style={{position: activePushMenu ? "fixed" :""}}> 
                    <Icon type="bars" style={{display: activePushMenu ? "none" : ""}} onClick={SwitchActivePushMenuHandler}/>
                    <Icon type="close" style={{display: activePushMenu ? "" : "none" ,color:"rgb(34, 34, 34)"}} onClick={SwitchActivePushMenuHandler}/>
            </div>

            <div className={s.headerVideo}>
                <video playsInline autoPlay muted loop>
                    <source src={data.Information.videolink}/>
                </video>
            </div>

            <div className={s.headerBackgroundimage}>
                <img src={data.Information.backgroundimagelink}></img>
            </div>

            <div className={s.banner}>
                <div>
                    <h1>
                        <img className={s.single_line} src={data.Information.imagelink}/>
                        <img className={s.double_line} src={data.Information.imagelink_mobile}/>
                    </h1>
                    <p>ACTIVATE NEW URBAN STYLE</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default HeaderWithVideo;