import React from "react";
import "@/scss/footer.scss";
// import "./index.scss";

const Footer = () => {
    return (
        <div className="Landing-Footer">
            <hr />
            <div className="content">
                <div className="copyright">
                    © 2024 Webhawk, Inc. All rights reserved.
                </div>
                <div className="icons">
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.7844 12.1206C24.7844 18.1753 20.341 23.2046 14.5305 24.0835V15.6362H17.3625L17.8996 12.1206H14.5305V9.87451C14.5305 8.89795 15.0188 7.97021 16.5324 7.97021H18.0461V4.9917C18.0461 4.9917 16.6789 4.74756 15.3117 4.74756C12.5773 4.74756 10.7707 6.45654 10.7707 9.48389V12.1206H7.69453V15.6362H10.7707V24.0835C4.96016 23.2046 0.565625 18.1753 0.565625 12.1206C0.565625 5.43115 5.98555 0.0112305 12.675 0.0112305C19.3645 0.0112305 24.7844 5.43115 24.7844 12.1206Z"
                            fill="#202636"
                        />
                    </svg>

                    <svg
                        width="26"
                        height="21"
                        viewBox="0 0 26 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.5871 5.04248C22.5871 5.28662 22.5871 5.48193 22.5871 5.72607C22.5871 12.5132 17.4602 20.2769 8.03633 20.2769C5.10664 20.2769 2.42109 19.4468 0.175 17.9819C0.565625 18.0308 0.95625 18.0796 1.3957 18.0796C3.78828 18.0796 5.98555 17.2495 7.74336 15.8823C5.49727 15.8335 3.59297 14.3687 2.9582 12.3179C3.3 12.3667 3.59297 12.4155 3.93477 12.4155C4.37422 12.4155 4.8625 12.3179 5.25313 12.2202C2.90938 11.7319 1.15156 9.68115 1.15156 7.19092V7.14209C1.83516 7.53271 2.66523 7.72803 3.49531 7.77686C2.0793 6.84912 1.20039 5.28662 1.20039 3.52881C1.20039 2.55225 1.44453 1.67334 1.88398 0.940918C4.42305 4.01709 8.23164 6.06787 12.4797 6.31201C12.382 5.92139 12.3332 5.53076 12.3332 5.14014C12.3332 2.30811 14.6281 0.0131836 17.4602 0.0131836C18.925 0.0131836 20.2434 0.599121 21.2199 1.62451C22.343 1.38037 23.466 0.940918 24.4426 0.35498C24.052 1.57568 23.2707 2.55225 22.1965 3.18701C23.2219 3.08936 24.2473 2.79639 25.1262 2.40576C24.4426 3.43115 23.5637 4.31006 22.5871 5.04248Z"
                            fill="#202636"
                        />
                    </svg>

                    <svg
                        width="28"
                        height="20"
                        viewBox="0 0 28 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M26.4339 3.72412C27.0198 5.7749 27.0198 10.1694 27.0198 10.1694C27.0198 10.1694 27.0198 14.5151 26.4339 16.6147C26.1409 17.7866 25.2132 18.6655 24.0901 18.9585C21.9905 19.4956 13.6897 19.4956 13.6897 19.4956C13.6897 19.4956 5.34011 19.4956 3.2405 18.9585C2.11746 18.6655 1.18972 17.7866 0.896754 16.6147C0.310817 14.5151 0.310817 10.1694 0.310817 10.1694C0.310817 10.1694 0.310817 5.7749 0.896754 3.72412C1.18972 2.55225 2.11746 1.62451 3.2405 1.33154C5.34011 0.745605 13.6897 0.745605 13.6897 0.745605C13.6897 0.745605 21.9905 0.745605 24.0901 1.33154C25.2132 1.62451 26.1409 2.55225 26.4339 3.72412ZM10.9553 14.1245L17.8889 10.1694L10.9553 6.21436V14.1245Z"
                            fill="#202636"
                        />
                    </svg>
                    <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6653 5.50537C14.7415 5.50537 17.2805 8.04443 17.2805 11.1206C17.2805 14.2456 14.7415 16.7358 11.6653 16.7358C8.54031 16.7358 6.05007 14.2456 6.05007 11.1206C6.05007 8.04443 8.54031 5.50537 11.6653 5.50537ZM11.6653 14.7827C13.6673 14.7827 15.2786 13.1714 15.2786 11.1206C15.2786 9.11865 13.6673 7.50732 11.6653 7.50732C9.61453 7.50732 8.0032 9.11865 8.0032 11.1206C8.0032 13.1714 9.66336 14.7827 11.6653 14.7827ZM18.7942 5.31006C18.7942 6.04248 18.2083 6.62842 17.4759 6.62842C16.7434 6.62842 16.1575 6.04248 16.1575 5.31006C16.1575 4.57764 16.7434 3.9917 17.4759 3.9917C18.2083 3.9917 18.7942 4.57764 18.7942 5.31006ZM22.5052 6.62842C22.6028 8.43506 22.6028 13.855 22.5052 15.6616C22.4075 17.4194 22.0169 18.9331 20.7473 20.2515C19.4778 21.521 17.9153 21.9116 16.1575 22.0093C14.3509 22.1069 8.93093 22.1069 7.12429 22.0093C5.36648 21.9116 3.85281 21.521 2.53445 20.2515C1.26492 18.9331 0.874293 17.4194 0.776637 15.6616C0.678981 13.855 0.678981 8.43506 0.776637 6.62842C0.874293 4.87061 1.26492 3.30811 2.53445 2.03857C3.85281 0.769043 5.36648 0.378418 7.12429 0.280762C8.93093 0.183105 14.3509 0.183105 16.1575 0.280762C17.9153 0.378418 19.4778 0.769043 20.7473 2.03857C22.0169 3.30811 22.4075 4.87061 22.5052 6.62842ZM20.1614 17.5659C20.7473 16.1499 20.6009 12.7319 20.6009 11.1206C20.6009 9.55811 20.7473 6.14014 20.1614 4.67529C19.7708 3.74756 19.0384 2.96631 18.1106 2.62451C16.6458 2.03857 13.2278 2.18506 11.6653 2.18506C10.054 2.18506 6.63601 2.03857 5.22 2.62451C4.24343 3.01514 3.51101 3.74756 3.12039 4.67529C2.53445 6.14014 2.68093 9.55811 2.68093 11.1206C2.68093 12.7319 2.53445 16.1499 3.12039 17.5659C3.51101 18.5425 4.24343 19.2749 5.22 19.6655C6.63601 20.2515 10.054 20.105 11.6653 20.105C13.2278 20.105 16.6458 20.2515 18.1106 19.6655C19.0384 19.2749 19.8196 18.5425 20.1614 17.5659Z"
                            fill="#202636"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Footer;