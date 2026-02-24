#!/usr/bin/env node
const { execFileSync } = require("child_process")
const path = require("path")
// Find opencode binary in node_modules
const opencodeBin = path.join(__dirname, "..", "node_modules", ".bin", "opencode")
try {
  execFileSync(opencodeBin, process.argv.slice(2), { stdio: "inherit" })
} catch (e) {
  process.exit(e.status || 1)
}
