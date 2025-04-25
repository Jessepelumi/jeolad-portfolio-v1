import { parse, format, differenceInMonths } from "date-fns";

const getTimeline = (start, end) => {
  const startDate = parse(start, "MMM yyyy", new Date());
  const endDate =
    end === "Present" ? new Date() : parse(end, "MMM yyyy", new Date());

  const formattedStartDate = format(startDate, "MMM yyyy");
  const formattedEndDate =
    end === "Present" ? "Present" : format(endDate, "MMM yyyy");

  const months = differenceInMonths(endDate, startDate);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const duration =
    years > 0
      ? `${years} year${years > 1 ? "s " : ""}${
          remainingMonths ? `, ${remainingMonths} month${remainingMonths > 1 ? "s " : ""}` : ""
        }`
      : `${months} month${months > 1 ? "s " : ""}`;

  return {
    label: `${formattedStartDate} — ${formattedEndDate}`,
    duration,
  };
};

export default getTimeline;
