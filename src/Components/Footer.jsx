import {footerLinks} from "../constants/index.js";


const Footer = () => {
    return (
        <footer>
            <div className={"info"}>
                <p>More ways to shop:
                    <span className={"text-primary mx-0.5 cursor-pointer"}>Find an Apple Store</span>
                    or
                    <span className={"text-primary mx-0.5 cursor-pointer"}>other retailer</span>
                    near you. Or call 000800 040 1966 </p>
                <img src={"/logo.svg"} className={"Apple logo"} />
            </div>

            <hr/>

            <div className={"links"}>
                <p>Copyright @ 2024 Apple Inc. All rights reservd.</p>

                <ul>
                    {footerLinks.map(({label, link}) =>(
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
