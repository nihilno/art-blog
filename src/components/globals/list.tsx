import { cn } from "@/lib/utils";
import { format } from "date-fns";

function List({
  type = "magazine",
  size = "base",
  compact = false,
}: {
  type?: "magazine" | "podcast" | "author";
  size?: "sm" | "base";
  compact?: boolean;
}) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-2 md:flex-row md:items-center md:gap-8",
        size === "sm" && "text-sm",
      )}
    >
      {type === "author" ? (
        <>
          <li>
            <span className="mr-1.5 font-bold">Job</span>Artist
          </li>
          <li>
            <span className="mr-1.5 font-bold">City</span>Berlin
          </li>
        </>
      ) : (
        <>
          {type === "magazine" && (
            <li>
              <span className="mr-1.5 font-bold">Text</span>Jakob Polowy
            </li>
          )}
          {!compact && (
            <li>
              <span className="mr-1.5 font-bold">Date</span>
              {format(new Date(), "d. MMMM yyyy")}
            </li>
          )}

          <li>
            <span className="mr-1.5 font-bold">
              {type === "podcast" ? "Duration" : "Read"}
            </span>
            1 Min
          </li>
        </>
      )}
    </ul>
  );
}

export default List;
