// Components
import { Fragment } from "react";

export const ContactItem = ({ title, content, type }) => {
  return (
    <li className="text-black">
      {type && (
        <a
          className="block"
          href={`${type === "email" ? "mailto" : "tel"}:${content}`}
        >
          <span className="shrink-0 font-bold underline float-left mr-1">
            {title}:
          </span>
          <span>{content}</span>
        </a>
      )}

      {!type && (
        <Fragment>
          <span className="shrink-0 font-bold underline float-left mr-1">
            {title}:
          </span>
          <span>{content}</span>
        </Fragment>
      )}
    </li>
  );
};
