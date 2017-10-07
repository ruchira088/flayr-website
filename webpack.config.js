const path = require("path")

const fromAppPath = (...paths) => path.join.apply(null, [__dirname, "app"].concat(paths))

module.exports = {
    entry: fromAppPath("Index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public", "build"),
        publicPath: "/build/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpeg|jpg|png|svg)$/,
                use: "file-loader?name=assets/[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            styles: fromAppPath("styles"),
            assets: fromAppPath("assets"),
            pages: fromAppPath("pages")
        }
    }
}