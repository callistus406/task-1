import { Link } from "react-router-dom";

export const InnerLayout = ({
  children,
  heading,
  section,
  page,
  plain,
  url,
}: {
  children: React.ReactNode;

  heading: string;

  section: string;

  page: string;

  plain?: boolean;

  url: string;
}) => {
  return (
    <div className="w-full py-4 px-2 md:px-4 gap-10 flex-col flex bg-muted rounded-md">
      <div className="w-full px-4 flex items-center justify-between">
        <h4 className="text-2xl font-bold capitalize">{heading}</h4>
        <h4 className="hidden md:flex gap-2 items-center capitalize">
          {plain ? (
            ""
          ) : (
            <>
              <h4 className="hidden md:flex gap-2 items-center capitalize">
                <Link to={url}>
                  <h4 className=" text-lg font-semibold ">{section}</h4>
                </Link>
              </h4>

              <h4 className="text-lg">/</h4>
              <h4 className=" text-lg font-semibold text-gray-500">{page}</h4>
            </>
          )}
        </h4>
      </div>
      {children}
    </div>
  );
};
