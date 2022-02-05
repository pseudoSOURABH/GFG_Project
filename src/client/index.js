const webpack = require('webpack');
const client_config = require('./webpack.client')
const server_config = require('./webpack.server')


const compiler = webpack(
    [client_config, server_config]
  );

const watching = compiler.watch({
    // Example [watchOptions](/configuration/watch/#watchoptions)
    aggregateTimeout: 300,
    poll: undefined
    }, (err, stats) => { // [Stats Object](#stats-object)
    // Print watch/build result here...
    console.log(stats);
});

if(module.hot)
{
  module.hot.accept();
}