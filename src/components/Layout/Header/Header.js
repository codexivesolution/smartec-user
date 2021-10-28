import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TopHeader from './TopBar';
import Image from 'next/Image';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../redux/actions/userDataAction'

const Header = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false)
	const dispatch = useDispatch();
	const { userData } = useSelector((state) => state.userData);
	const { is_loggedin } = useSelector((state) => state.login);
	const [path, setPath] = useState("")

	const goToLogin = () => {
		router.push("/auth/login");
	}

	useEffect(() => {
		if (is_loggedin) {
			dispatch(getUserData());
		}
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
										<Image src={'/assets/img/img/logo.svg'} width='185.55' height='46.44' alt="flag" />
									</Link>
								</div>
							</div>
							<div id="right-header" className="col-xl-9 col-lg-9 col-md-6 col-4">
								<div className="f-right d-none d-lg-block">
									{is_loggedin && userData &&
										<button className="UserLoginBtn"><img src="/assets/img/img/Union.svg" alt="user" />{userData?.first_name} {userData?.last_name}</button>
									}
									{!is_loggedin &&
										<button className="UserLoginBtn" onClick={goToLogin}><img src="/assets/img/img/Union.svg" alt="user" />{t("logIn.log_In")}</button>
									}
								</div>
								<div className="main-menu text-right d-none d-lg-block">
									<nav id="mobile-menu">
										<ul>
											<li><Link href="/" as="/"><a>{t("about_us")}</a></Link></li>
											<li><Link href="/" as="/"><a>{t("research_and_development")}</a></Link></li>
											<li><Link href="/" as="/"><a>{t("data_science")}</a></Link></li>
											<li><Link href="/" as="/"><a>{t("smart_fatty_liver_care")}</a></Link></li>
											<li><Link href="/" as="/"><a>{t("investment_information")}</a></Link></li>
										</ul>
									</nav>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div onClick={() => setMenuOpen(fasse)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

			</header>
		</React.Fragment>
	);
}

export default Header;