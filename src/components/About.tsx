import React from 'react'
// import Header from './Header';
import SearchEngineOptimize from './utils/SearchEngineOptimize';
// import aboutBG from '/src/assets/img/about-bg.jpg';

const About = (): JSX.Element => {

    return (
        <>
            {/* <Header  */}
                {/* heading="About Me" */}
                {/* subHeading="This is what we do" */}
                {/* backgroundImage={aboutBG} */}
            {/* /> */}
            <SearchEngineOptimize
                title="About"
                description="A place to know a little bit about everything"
                name="All-About-It"
                type="article"
            />

            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
