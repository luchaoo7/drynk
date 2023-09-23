import React, { CSSProperties } from 'react'
import SearchEngineOptimize from '../utils/SearchEngineOptimize';
import SectionHeading from '../utils/SectionHeading';
import Header from '../Header';
// import SmallHeading from '../utils/SmallHeading';
// import SmallerHeading from '../utils/SmallerHeading';
// import PostImage from '../utils/PostImage';
// import Divider from '../utils/Divider';
// import Divider from '../utils/Divider';
import '../../Van.css'

const VanPage = (): JSX.Element => {

    // let boldStyle: CSSProperties | undefined = {
        // fontSize: "30px",
        // color: "#839bf9"
    // }

    const headingStyle: CSSProperties | undefined = {
        color: "#c40046"
    }
    // let postImageStyle: CSSProperties | undefined = {
        // height: "10vw",
        // width: "10vw",
        // position: "fixed",
 
    // }



    return (
        <>
            <Header 
                heading="Your Caravan Rights UK"
                backgroundImage=""
                subHeading="Static Homes Advisory: Your Partner for Fair Treatment and Compensation"
            />
            <SearchEngineOptimize
                title="Caravan Owners' Rights in the UK | Protecting Your Interests"
                description="Static Homes Advisory is your trusted partner for safeguarding caravan owners' rights in the UK. Get fair treatment and compensation you deserve."
                name=""
                type="article"
            />

            {/* <PostImage style={postImageStyle} image_path={staticHomeLog} /> */}

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 ptagcolour" >

                            <div className="col-sm">
                            <SectionHeading style={headingStyle} heading="Are You a Caravan Owner in the UK?" />
                            <p>Have you recently purchased a caravan only to be faced with unfair treatment from caravan park owners? You're not alone. At Static Homes Advisory, we specialize in helping caravan owners like you who have been dealt an unfair hand. Our mission is to ensure that your rights as a consumer are protected, and that you receive the compensation you deserve.</p>
                            {/* <PostImage image_path={staticHomeLog} /> */}
                            </div>

                            <div className="col-sm">
                            <SectionHeading style={headingStyle} heading="Our Expertise in Caravan Compensation Claims" />
                            <p><b>Unjust Upgrades and Removals:</b> Has the caravan park management demanded that you upgrade your recently purchased caravan or even remove it from the site? This can be a frustrating and financially burdensome situation. Our experienced team understands the legal complexities involved in such cases. We'll assess your situation thoroughly and fight for your rights.</p>

                            <p><b>High Ground Rates:</b> Are you facing exorbitant ground rates that are affecting your financial stability? Static Homes Advisory has a deep understanding of the regulations surrounding ground rates for caravans. We're here to advocate for fair pricing and to make sure you're not being taken advantage of.</p>

                            <p><b>Lack of Rental Facilities:</b> Owning a caravan comes with the expectation of access to certain facilities. If you're being denied essential amenities that were promised to you, it's time to take action. Our dedicated team will investigate the situation and work towards getting you the compensation you deserve.</p>

                            <p><b>Finance Overload:</b> Caravan park owners might sometimes overload you with financial obligations that were never part of the agreement. These unexpected expenses can cause significant stress. Let Static Homes Advisory be your guide in navigating through the intricacies of your contract, ensuring that you're not being unfairly burdened.</p>
                            </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 ptagcolour">

                            <div className="col-sm">
                            <SectionHeading style={headingStyle} heading="Your Path to Compensation Starts Here" />
                            <p>At Static Homes Advisory, we're committed to your peace of mind. We understand that dealing with these challenges can be overwhelming, and that's why we're here to support you every step of the way. Our experts are well-versed in consumer rights, contractual agreements, and legal frameworks pertaining to caravan ownership.</p>
                            </div>

                            <div className="col-sm">
                            <SectionHeading style={headingStyle} heading="Claim Your Free Advice Today" />
                            <p>Ready to take the first step towards claiming the compensation you deserve? Send our team your queries, and we'll provide you with a free consultation to help you understand the consumer grounds you have. Our goal is to empower you with knowledge so you can make informed decisions about your situation.</p>
                            </div>

                            <p> Don't let unfair treatment stand in your way. Contact Static Homes Advisory today and let us fight for your rights as a caravan owner. Your journey to fair compensation starts now." </p>

                    </div>
                </div>
            </article>
        </>
    );
};

export default VanPage;
