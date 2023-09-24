import React, { CSSProperties } from 'react'
// import Header from './Header';
import { circleBG, cupBG, cupTablesBG, multipleCapsulBG, singleCapsulBG } from './utils/ImageImporter';
import PostImage from './utils/PostImage';
import SearchEngineOptimize from './utils/SearchEngineOptimize';
// import aboutBG from '/src/assets/img/about-bg.jpg';


const saberMasStyle: CSSProperties = {
    backgroundColor: "#e1dfe3", 
    color: "#54587a",
    borderRadius: "20px",
    fontFamily: "inherit",
}


const backgroundStyle: CSSProperties = {
    // backgroundImage: `url('${drynkBG4}')`
    marginTop: "20px"
}

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

            <main className="mb-4 text-center" style={backgroundStyle} >

                <div style={backgroundStyle} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <PostImage image_path={circleBG} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div><h1></h1></div>


                <div style={backgroundStyle} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <PostImage image_path={multipleCapsulBG} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={backgroundStyle} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <PostImage image_path={cupBG} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={backgroundStyle} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <PostImage image_path={singleCapsulBG} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={backgroundStyle} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <PostImage image_path={cupTablesBG} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container px-4 px-lg-5"> */}
                {/* <div className="row gx-4 gx-lg-5 justify-content-center"> */}
                {/* <div className="col-md-10 col-lg-8 col-xl-7"> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
{/*  */}

            </main>
        </>
    );
};

export default About;
