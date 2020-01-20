import { MDXProvider } from '@mdx-js/react';
import components from '../utils/mdx-components';
import App from 'next/app';
import React from 'react';
import { Tina, TinaCMS } from 'tinacms';
import { GitClient } from '@tinacms/git-client';

export default class MyApp extends App {
  constructor() {
    super();
    this.cms = new TinaCMS();
    const client = new GitClient('http://localhost:3000/___tina');
    this.cms.registerApi('git', client);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Tina cms={this.cms}>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Tina>
    );
  }
}
