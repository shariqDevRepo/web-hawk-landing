// "use client";
import React, { FC, useEffect, useState } from "react";
import "@/scss/header.scss";
import { useRouter } from "next/navigation";
import LOGO from "@/app/icons/logo";
import { usePathname } from "next/navigation";

const Ham: FC<{ color: string }> = ({ color }) => (
    <svg
        width="21"
        height="14"
        viewBox="0 0 21 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="21" height="2" rx="1" fill="white" />
        <rect y="6" width="21" height="2" rx="1" fill="white" />
        <rect y="12" width="21" height="2" rx="1" fill="white" />
    </svg>
);

const OpenedHam = () => (
    <svg
        width="21"
        height="14"
        viewBox="0 0 21 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="21" height="2" rx="1" fill="white" />
        <rect y="6" width="21" height="2" rx="1" fill="white" />
        <rect y="12" width="21" height="2" rx="1" fill="white" />
    </svg>
);

const Header = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            setMobileMenu(false);
        };

        if (MobileMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [MobileMenu]);

    return (
        <div className="Landing-Header">
            <div className="logo" onClick={() => router.push("/Landing")}>
                <LOGO />
            </div>
            <nav>
                <Nav setMobileMenu={setMobileMenu} />
            </nav>
            <div className="buttons">
                <button className="simple_white_btn">Get Started</button>
                <button
                    className="mobile-ham"
                    onClick={() => setMobileMenu((p) => !p)}
                >
                    {!MobileMenu ? <Ham color={"white"} /> : <OpenedHam />}
                </button>
            </div>
            <div className={`MobileMenu ${MobileMenu ? "open" : ""}`}>
                <Nav setMobileMenu={setMobileMenu} />
            </div>
        </div>
    );
};

const Nav: FC<{ setMobileMenu: (data: boolean) => void }> = ({
    setMobileMenu,
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        const offset = 300; // Set your offset here
        if (section) {
            const topPos =
                section.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: topPos,
                behavior: "smooth",
            });
        }
    };
    return (
        <ul>
            <li
                className={pathname === "/Landing" ? "active" : ""}
                onClick={() => {
                    setMobileMenu(false);
                    router.push("/Landing");
                    // scrollToSection("PRODUCT");
                }}
            >
                Home
            </li>
            <li
                className={pathname === "/how-it-works" ? "active" : ""}
                onClick={() => {
                    setMobileMenu(false);
                    router.push("/how-it-works");
                    // scrollToSection("FEATURES");
                }}
            >
                How it Works
            </li>
            <li
                className={pathname === "/pricing" ? "active" : ""}
                onClick={() => {
                    setMobileMenu(false);
                    router.push("/pricing");
                    // scrollToSection("PRICING");
                }}
            >
                Pricing
            </li>

            <button
                className="mob_nav simple_white_btn"
                style={{
                    alignSelf: "flex-start",
                    margin: "20px 0",
                }}
                onClick={() => {
                    setMobileMenu(false);
                    // router.push("/pricing")
                    // scrollToSection("PRICING");
                }}
            >
                Get Started
            </button>
        </ul>
    );
};

export default Header;
