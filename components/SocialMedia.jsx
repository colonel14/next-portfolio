import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

function SocialMedia() {
  return (
    <div className="app__social">
      <Link href="https://www.linkedin.com/in/drcolonel/" target="blank">
        <Linkedin />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=100009694934872"
        target="blank"
      >
        <Facebook />
      </Link>
      <Link href="https://github.com/colonel14" target="blank">
        <Github />
      </Link>
    </div>
  );
}

export default SocialMedia;
