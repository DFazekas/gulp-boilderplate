/* DO NOT edit unless you know what you're doing. */

var path = require("path");

// Bundles all JS files with a random name, and exports the new file to the `temp` directory.
module.exports = {
    // Take these files as the source.
    entry: {
        // The App file contains imports for all the other JS files in the modules directory.
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },

    // Export bundled file to this location.
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },

    // Convert our ES6/Babel into vanilla JS.
    module: {
        loaders: [
            {
                loader: "babel-loader",

                query: {
                    // We're using ES6 presets.
                    // Add more presets to the array if needed.
                    presets: ["es2015"]
                },

                // This is regex for JS-only files.
                test: /\.js$/,

                // This is regex for excluding the node_modules directory.
                exclude: /node_modules/
            }
        ]
    }
};
