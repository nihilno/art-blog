import { Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

function AuthorData() {
  return (
    <aside className="space-y-8">
      <Image
        src="/sample/authors/author-1.png"
        alt="Author"
        width={350}
        height={350}
      />
      <div className="border-foreground flex justify-between border-t pt-8">
        <h4 className="uppercase">Follow</h4>
        <ul className="flex items-center gap-2">
          <li>
            <Instagram className="size-4.5" />
          </li>
          <li>
            <Twitter className="size-4.5" />
          </li>
          <li>
            <Youtube className="size-4.5" />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default AuthorData;
