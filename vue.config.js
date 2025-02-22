const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082',  // 后端地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',  // 将 `/api` 替换为空
        },
      },
    },
    client: {
      overlay: false,  // 禁用错误覆盖
    },
  },
});
