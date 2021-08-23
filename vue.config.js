module.exports = {
    // 配置反向代理，http://localhost:3000这个地址上
    devServer: {
      proxy: {
        'https://netease-cloud-music-api-six-henna.vercel.app': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    configureWebpack:{externals:'hls.js'}//忽略aplayer警告
  }