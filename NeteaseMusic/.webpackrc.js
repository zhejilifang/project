const path = require('path');

export default {
  alias: {
    "@": path.resolve(__dirname, './src')
  },
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css" }]
  ]
}