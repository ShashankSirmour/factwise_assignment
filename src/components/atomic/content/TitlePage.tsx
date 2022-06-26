import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

type TitlePageType = {
  children: React.ReactNode;
  title: string;
};

const TitlePage = forwardRef<HTMLDivElement, TitlePageType>(
  ({ children, title = '', ...rest }: TitlePageType, ref) => (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  ),
);

TitlePage.defaultProps = {
  title: 'Application',
};

export default TitlePage;
