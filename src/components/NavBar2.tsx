
import React, { CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom';
import { circleBG, multipleCapsulBG, singleCapsulBG } from './utils/ImageImporter';
import PostImage from './utils/PostImage';

const style: CSSProperties = {
    fontSize: "15px",
}

const saberMasStyle: CSSProperties = {
    backgroundColor: "#e1dfe3", 
    color: "#54587a",
    borderRadius: "20px",
    fontFamily: "inherit",
}

const NavBar2 = (): JSX.Element => {
    const [showCollapse, setShowCollapse] = useState<boolean>(false);

    const showCollapseNav = () => {
        setShowCollapse((prev) => !prev);
    }

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <PostImage image_path={circleBG} className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                        <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <PostImage image_path={multipleCapsulBG} className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                        <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <PostImage image_path={singleCapsulBG} className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                        <button style={saberMasStyle} type="button" className="btn btn-secondary btn-lg">SABER MAS</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link style={style} className="navbar-brand" to="/">DRYNK</Link>
                    <button onClick={showCollapseNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={`${showCollapse ? "true" : "false"}`}>
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className={`collapse navbar-collapse ${ showCollapse ? "show" : ""}`} id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/">PRODUCTO</Link> </li>
                            <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/">COMPRAR</Link> </li>
                            <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/">GALLERIA</Link> </li>
                            <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/">NOSOTROS</Link> </li>
                            <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/">INICIAR SECION</Link> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar2;
