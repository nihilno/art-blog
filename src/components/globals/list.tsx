import { cn } from "@/lib/utils";
import { format } from "date-fns";

function List({
  type = "magazine",
  size = "base",
  compact = false,
  details,
}: ListProps) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-2 md:flex-row md:items-center md:gap-4 lg:gap-8",
        size === "sm" && "text-sm",
      )}
    >
      {type === "author" ? (
        <>
          <li>
            <span className="mr-1.5 font-bold">Job</span>
            {details?.occupation || "Not provided"}
          </li>
          <li>
            <span className="mr-1.5 font-bold">City</span>
            {details?.city || "Not provided"}
          </li>
        </>
      ) : (
        <>
          {type === "magazine" && (
            <li>
              <span className="mr-1.5 font-bold">Text</span>
              {details?.name || "Anonymous Author"}
            </li>
          )}
          {!compact && (
            <li>
              <span className="mr-1.5 font-bold">Date</span>
              {details?.createdAt
                ? format(details?.createdAt, "d. MMMM yyyy")
                : "Unknown Date"}
            </li>
          )}

          <li>
            <span className="mr-1.5 font-bold">
              {type === "podcast" ? "Duration" : "Read"}
            </span>
            {details?.durationInMinutes ?? "--"} min
          </li>
        </>
      )}
    </ul>
  );
}

export default List;
