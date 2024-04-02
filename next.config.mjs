// Import necessary modules from the stylable webpack plugin
import {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
  bundleServerLibs, // Uncomment if you're going to use it
} from "@stylable/webpack-plugin";
import { StylableOptimizer } from "@stylable/optimizer";

// Initialize a single StylableOptimizer instance
const stylableOptimizer = new StylableOptimizer();

// Next.js configuration with TypeScript support for webpack function
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@actionishope/shelley"],
  // optimizePackageImports: ["@actionishope/shelley"],
  webpack: (config, { isServer }) => {
    // Apply stylable configuration exclusions
    applyWebpackConfigStylableExcludes(config);

    // Optionally bundle specific server libraries
    // bundleServerLibs(config, new Set(["@actionishope/shelley"]), isServer);

    // Add the Stylable plugin to the webpack configuration
    config.plugins.push(
      new StylableWebpackPlugin({
        stcConfig: true,
        filterAssets: () => false, // Let Next.js handle assets
        filename: "static/css/stylable.[contenthash].css", // Output CSS location
        optimizer: stylableOptimizer, // Use shared optimizer instance
        cssInjection: "css", // Serve CSS as a bundled asset
        experimentalAttachCssToContainingChunks: true, // Attach CSS to all chunks
        unsafeMuteDiagnostics: { DUPLICATE_MODULE_NAMESPACE: true }, // Mute specific diagnostics
      })
    );

    // Add any additional plugins, like VeliteWebpackPlugin if needed
    config.plugins.push(new VeliteWebpackPlugin());

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

// Define the VeliteWebpackPlugin class
class VeliteWebpackPlugin {
  static started = false;

  apply(compiler) {
    compiler.hooks.beforeCompile.tap("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      const { build } = await import("velite");
      await build({ watch: dev, clean: !dev });
    });
  }
}

// Export the configuration using ESM syntax
export default nextConfig;
