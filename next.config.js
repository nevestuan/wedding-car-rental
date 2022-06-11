const withAntdLess = require('next-plugin-antd-less');

const antdTheme = require('./styles/antdTheme');

/** @type {import('next').NextConfig} */
module.exports = withAntdLess({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  modifyVars: antdTheme,
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },
});
