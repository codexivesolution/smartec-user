import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TopHeader from './TopBar';
import BurgerMenus from './BurgerMenus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/Image';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

	return (
		<React.Fragment>
			<Head>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>
			<header id="header-wrap">
				<TopHeader />
				<div id="sticky-header" className="main-menu-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
								<div className="logo">
									<Link href="/" as="/">
										<Image src={'/assets/img/logo/logo.png'} width='134' height='34' alt="flag" />
									</Link>
								</div>
							</div>
							<div id="right-header" className="col-xl-9 col-lg-9 col-md-6 col-4">
								<div className="header-button f-right d-none d-lg-block">
									<a className="btn" href="#"><span className="btn-text">Consultancy <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
								</div>
								<div className="main-menu text-right d-none d-lg-block">
									<nav id="mobile-menu">
										<ul>
											<li><Link href="/" as="/"><a>Home</a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/" as="/"><a>Home 1</a></Link></li>
													<li><Link href="/home-2" as="/home-2"><a>Home 2</a></Link></li>
												</ul>
											</li>
											<li><Link href="/about" as="/about"><a>About</a></Link></li>
											<li><Link href="/service-1" as="/service-1"><a>Service</a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/service-1" as="/service-1"><a>Service One</a></Link></li>
													<li><Link href="/service-2" as="/service-2"><a>Service Two</a></Link></li>
													<li><Link href="/service-3" as="/service-3"><a>Service Three</a></Link></li>
													<li><Link href="/service-manage" as="/service-manage"><a>Service Manage</a></Link></li>
												</ul>
											</li>
											<li><Link href="/blog" as="/blog"><a>Blog</a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/blog" as="/blog"><a>Blog</a></Link></li>
													<li><Link href="/monthly-web-development-to-update-react-hooks-cons-wether-says-1" as="/monthly-web-development-to-update-react-hooks-cons-wether-says-1"><a>Blog details</a></Link></li>
												</ul>
											</li>
											<li><Link href="#" as="#"><a>Pages</a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/case-1" as="/case-1"><a>Case One</a></Link></li>
													<li><Link href="/case-2" as="/case-2"><a>Case Two</a></Link></li>
													<li><Link href="/case-3" as="/case-3"><a>Case Three</a></Link></li>
													<li><Link href="/case-details" as="/case-details"><a>Case Details</a></Link></li>
													<li><Link href="/career" as="/career"><a>Career</a></Link></li>
													<li><Link href="/faq" as="/faq"><a>Faq</a></Link></li>
													<li><Link href="/goals" as="/goals"><a>Goals</a></Link></li>
													<li><Link href="/price" as="/price"><a>Price</a></Link></li>
													<li><Link href="/team" as="/team"><a>Team</a></Link></li>
													<li><Link href="/team-details" as="/team-details"><a>Team Single</a></Link></li>
													<li><Link href="/shop" as="/shop"><a>Shop</a></Link></li>
													<li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
												</ul>
											</li>
											<li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
										</ul>
									</nav>
								</div>
								<div className="d-block d-xl-none d-lg-none text-right">
									<div className="menu-bar">
										<button className="bars" onClick={() => {
											setMenuOpen(!menuOpen)
											}}>
											<i> <FontAwesomeIcon icon={['far', 'bars']} /></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<div onClick={() => setMenuOpen(fasse)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				
			</header>
		</React.Fragment>
	);
}

export default Header;