import tw from "tailwind-styled-components";
// import {Link} from "react-router-dom";
import React, { ReactElement } from "react";

type PageHeaderProps = {
  title: string | ReactElement;
  titleHighlightPart?: string;
  subtitle?: string | ReactElement;
  backHref?: () => string;
  actions?: ReactElement;
};

export function PageHeader(props: PageHeaderProps) {
  const UI = {
    Wrapper: tw.div`flex flex-col md:flex-row justify-between md:items-start space-y-8 md:space-y-5`,
    Main: tw.div`flex items-top grow`,
    Heading: tw.div`min-w-0`,
    Header: tw.h2`font-bold text-3xl text-blue-800 leading-2 text-ellipsis`,
    Highlight: tw.span`text-orange-500`,
    Subtitle: tw.h3`mt-2 max-w-4xl text-sm text-gray-500`,
    Actions: tw.div`mb-8 md:mb-0`,
  };

  return (
    <UI.Wrapper data-cy={"page-header"}>
      <UI.Main>
        {props.backHref && <BackButton href={props.backHref} />}
        <UI.Heading>
          <UI.Header data-cy={"page-header-title"}>
            {props.title}{" "}
            {props.titleHighlightPart && (
              <UI.Highlight data-cy={"page-header-highlight"}>
                {props.titleHighlightPart}
              </UI.Highlight>
            )}
          </UI.Header>
          {props.subtitle && (
            <UI.Subtitle data-cy={"page-header-subtitle"}>
              {props.subtitle}
            </UI.Subtitle>
          )}
        </UI.Heading>
      </UI.Main>
      <UI.Actions className="mb-8 md:mb-0" data-cy={"page-header-actions"}>
        {props.actions}
      </UI.Actions>
    </UI.Wrapper>
  );
}

const BackButton = (props: { href: () => string }) => {
  // const linkTo = props.href();
  const Wrapper = tw.div`w-6 text-gray-500 -ml-0 xl:-ml-10 mr-4 mt-1`;

  return (
    <Wrapper data-cy={"page-header-back"}>
      {/* <Link to={linkTo}>
        </Link> */}
    </Wrapper>
  );
};
