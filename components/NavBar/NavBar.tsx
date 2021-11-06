import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo/Logo";
import NavItems from "./Items/NavItems";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import SideBar from "./SideBar/SideBar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./styles.module.css";
import breakpoints from "../../styles/breakpoints";
import CategoryList from "../Categories/CategoryList/CategoryList";
import { useRouter } from "next/router";
import LazyHydrate from "react-lazy-hydration";

const NavBar: React.FC = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isPageWide = useMediaQuery(`(min-width: ${breakpoints.lg}px)`);

	useEffect(() => {
		setIsOpen(isOpen && !isPageWide);
	}, [isPageWide]);
	return (
		<LazyHydrate whenVisible>
			<>
				<header className={styles["nav-header"]}>
					<nav className={`${styles["nav-bar"]} elevate-1`}>
						<Logo />
						<NavItems />
						<div className={styles["menu_icon__list"]}>
							{router.pathname !== "/articulos" && (
								<div
									className={styles["menu-icon"]}
									style={{ marginRight: "3rem" }}
								>
									<Link href="/articulos">
										<a>
											<FaSearch size="18px" />
										</a>
									</Link>
								</div>
							)}
							<div
								className={styles["menu-icon"]}
								onClick={() => setIsOpen(!isOpen)}
							>
								{isOpen ? <FaTimes size="24px" /> : <FaBars size="24px" />}
							</div>
						</div>
					</nav>
					<nav className={styles["nav-header__categories"]}>
						<CategoryList />
					</nav>
				</header>
				{!isPageWide && (
					<SideBar isOpenned={isOpen} onClose={() => setIsOpen(false)} />
				)}
			</>
		</LazyHydrate>
	);
};

export default NavBar;
