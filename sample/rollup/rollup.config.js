import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
//import uglify from "rollup-plugin-uglify";

export default {
    input: "main.js",
    output: {
        name: "bundle",
        file: "bundle.js",
        format: "iife"
    },
    plugins: [
        resolve(),
        json(),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        //uglify()
    ],
    external: ['lodash']
};
