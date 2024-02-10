import Link from "next/link";

function NavigationDots({ active }) {
  const links = ["home", "about", "work", "skills", "contact"];
  return (
    <div className="app__navigation">
      {links.map((link, index) => (
        <Link
          href={`#${link}`}
          key={link + index}
          className="app__navigation-dot"
          style={active === link ? { color: "var(--red-color)" } : {}}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavigationDots;
