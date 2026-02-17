import { format } from "date-fns";

function List() {
  return (
    <ul className="flex items-center gap-8">
      <li>
        <span className="mr-1.5 font-bold">Text</span> Jakob Polowy
      </li>
      <li>
        <span className="mr-1.5 font-bold">Date</span>{" "}
        {format(new Date(), "d. MMMM yyyy")}
      </li>

      <li>
        <span className="mr-1.5 font-bold">Duration</span> 1 Min
      </li>
    </ul>
  );
}

export default List;
