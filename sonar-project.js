const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "YOUR-TOKEN-HERE",
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "**/__tests__/**",
      "sonar.tests": "./src/__tests__",
      "sonar.test.inclusions": "**/*.test.tsx’",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {}
);
