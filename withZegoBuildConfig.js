const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withZegoBuildConfig(config) {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      const projectRoot = config.modRequest.projectRoot;
      const gradlePath = path.join(
        projectRoot,
        'node_modules',
        'zego-express-engine-reactnative',
        'android',
        'build.gradle'
      );

      if (fs.existsSync(gradlePath)) {
        let content = fs.readFileSync(gradlePath, 'utf8');

        // إضافة buildFeatures { buildConfig true } داخل بلوك android
        if (!content.includes('buildFeatures')) {
          content = content.replace(
            /android\s*\{/,
            'android {\n    buildFeatures {\n        buildConfig true\n    }\n'
          );
          fs.writeFileSync(gradlePath, content, 'utf8');
          console.log('✅ [withZegoBuildConfig] Patched zego-express-engine-reactnative build.gradle');
        } else {
          console.log('ℹ️ [withZegoBuildConfig] buildFeatures already exists, skipping.');
        }
      } else {
        console.warn('⚠️ [withZegoBuildConfig] zego build.gradle not found at', gradlePath);
      }

      return config;
    },
  ]);
};
