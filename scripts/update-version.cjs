const fs = require('fs');

const TAG_VERSION = process.env.TAG_VERSION || process.argv[2];
if (!TAG_VERSION) {
  console.error('TAG_VERSION not provided');
  process.exit(1);
}

// Remove 'v' prefix
const VERSION = TAG_VERSION.replace(/^v/, '');

console.log('Updating to version:', VERSION);

const configPath = 'src-tauri/tauri.conf.json';
const cargoPath = 'src-tauri/Cargo.toml';

// Update tauri.conf.json
try {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  config.version = VERSION;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
  console.log('Updated tauri.conf.json');
} catch (e) {
  console.error('Error updating tauri.conf.json:', e.message);
  process.exit(1);
}

// Update Cargo.toml
try {
  let cargo = fs.readFileSync(cargoPath, 'utf8');

  // Replace version = "x.y.z" or version = 'x.y.z'
  const versionRegex = /^version = "[0-9]+\.[0-9]+\.[0-9]+"$/m;
  const versionRegexSingle = /^version = '[0-9]+\.[0-9]+\.[0-9]+'$/m;

  if (versionRegex.test(cargo)) {
    cargo = cargo.replace(versionRegex, `version = "${VERSION}"`);
  } else if (versionRegexSingle.test(cargo)) {
    cargo = cargo.replace(versionRegexSingle, `version = '${VERSION}'`);
  } else {
    console.error('Could not find version line in Cargo.toml');
    process.exit(1);
  }

  fs.writeFileSync(cargoPath, cargo);
  console.log('Updated Cargo.toml');
} catch (e) {
  console.error('Error updating Cargo.toml:', e.message);
  process.exit(1);
}

console.log('Version update complete!');