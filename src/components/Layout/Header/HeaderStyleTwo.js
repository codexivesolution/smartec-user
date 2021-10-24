import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import Head from 'next/head';
import Image from 'next/image';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])
	
	return (
		<React.Fragment>
			<Head><script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script></Head>
			<header>
				<div id="sticky-header" className="main-menu-area menu-2 pl-45 pr-45">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6 col-8  d-flex align-items-center">
								<div className="logo">
									<Link href="/" as="/">
									<Image src={'/assets/img/logo/logo.png'} width="134" height="34" alt="logo" />
										</Link>
								</div>
							</div>

							<div className="col-xl-6 col-lg-7 d-none d-lg-block">
								<div className="main-menu text-right">
									<nav id="mobile-menu">
										<ul>
											<li><Link href="/" as="/"><a>home <i><FontAwesomeIcon icon={['fas', 'angle-down']} /></i></a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/" as="/"><a>home 1</a></Link></li>
													<li><Link href="/home-2" as="/home-2"><a>home 2</a></Link></li>
												</ul>
											</li>
											<li><Link href="/about" as="/about"><a>About</a></Link></li>
											<li><Link href="/service-1" as="/service-1"><a>Service <i><FontAwesomeIcon icon={['fas', 'angle-down']} /></i></a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/service-1" as="/service-1"><a>Service One</a></Link></li>
													<li><Link href="/service-2" as="/service-2"><a>Service Two</a></Link></li>
													<li><Link href="/service-3" as="/service-3"><a>Service Three</a></Link></li>
													<li><Link href="/service-manage" as="/service-manage"><a>Service Manage</a></Link></li>
												</ul>
											</li>
											<li><Link href="/blog" as="/blog"><a>blog <i><FontAwesomeIcon icon={['fas', 'angle-down']} /></i></a></Link>
												<ul className="sub-menu text-left">
													<li><Link href="/blog" as="/blog"><a>blog</a></Link></li>
													<li><Link href="/blog" as="/monthly-web-development-to-update-react-hooks-cons-wether-says-1"><a>blog details</a></Link></li>
												</ul>
											</li>
											<li><Link href="/" as="/"><a>Pages <i><FontAwesomeIcon icon={['fas', 'angle-down']} /></i></a></Link>
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
												</ul>
											</li>
											<li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
										</ul>
									</nav>
								</div>
							</div>

							<div className="col-xl-3 col-lg-3 d-none d-lg-block">
								<div className="header-right f-right ">
									<div className="header-icon header-2-icon f-right">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
									</div>
									<div className="header-lang pos-rel f-right d-none d-xl-block">
										<div className="lang-icon">
											<Image src={"/assets/img/icon/flag.png"} width="30" height="20" alt="" />
											<a href="">English <i><FontAwesomeIcon icon={['fas', 'angle-down']} /></i></a>
										</div>
										<ul className="header-lang-list">
											<li><a href="#">USA</a></li>
											<li><a href="#">UK</a></li>
											<li><a href="#">CA</a></li>
											<li><a href="#">AU</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-4 d-block d-xl-none d-lg-none text-right">
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

				<BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<div onClick={() => setMenuOpen(fasse)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
			</header>
		</React.Fragment>
	);
}

export default Header;