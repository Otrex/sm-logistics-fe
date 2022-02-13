import { H320 } from "@pages/landing/components/StyledComponents";
import { P } from "@ui-kit/TextTags";
import React from "react";

export default function Todos({ actions }: { actions: any[] }) {
  return (
    <>
      <div className="pb-5">
        <H320> ToDo </H320>
        <P>
          Please perform the following action(s) to complete profile
          setup.
        </P>
      </div>
      <hr />
      {actions.map((action, key) => (
        <div key={key} className="pt-9">
          <H320>{action.title}</H320>
          <P>{action.content}</P>
        </div>
      ))}
    </>
  );
}
