import React from 'react';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  injectIntl,
  IntlShape
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Expertise: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'expertise.title' })} />
      <h1>{formatMessage({ id: 'expertise.title' })}</h1>
    </Layout>
  );
};

export default injectIntl(Expertise);
