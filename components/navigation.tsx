import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { url: "/articles", label: "articles" },
  { url: "/projects", label: "projects" },
  { url: "/about", label: "about" },
];

const socialItems = [
  { url: "https://github.com/stanulilic", label: "faGithub", name: faGithub },
  { url: "https://twitter.com/home", label: "faTwitter", name: faTwitter },
  {
    url: "https://www.linkedin.com/in/stanleyulili/",
    label: "faLinkedin",
    name: faLinkedin,
  },
];

export default function Navigation() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <NextLink href="/" className="">
            <span>Stanley Ulili</span>
          </NextLink>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <NextLink href={item.url}>{item.label}</NextLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social-icons">
          <ul>
            {socialItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <NextLink href={item.url}>
                  <FontAwesomeIcon icon={item.name} />
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
