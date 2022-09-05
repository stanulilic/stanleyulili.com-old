import Image from "next/image";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { socialItems } from "./navigation";
import { Subscribe } from "./subscribe";

const footerSocialItems = [
  ...socialItems,
  {
    url: "/rss.xml",
    label: "faRss",
    name: faRss,
  },
];

const footerItems = [
  { url: "/contact", label: "Contact" },
  { url: "https://ko-fi.com/stanleyulili", label: "Ko-Fi" },
  { url: "https://www.patreon.com/stanleyulili", label: "Patreon" },
];
export default function Footer() {
  return (
    <section>
      <div className="wrapper">
        <Subscribe />
        <div className="footer-social-icons">
          <ul>
            {footerSocialItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <NextLink href={item.url}>
                  <FontAwesomeIcon icon={item.name} />
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            {footerItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <NextLink href={item.url}>{item.label}</NextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright">
          <p>
            © Copyright 2019—2022. Built with passion by Stanley Ulili in Zomba,
            Malawi.
          </p>
        </div>
      </div>
    </section>
  );
}
