# Commitlint

為git message增加格式限制。
[官方網站](https://commitlint.js.org/#/)

## Install
Make sure node version is over 16.

```bash!=
# Install and configure if needed
npm install --save-dev @commitlint/{cli,config-conventional}

# Configure commitlint to use conventional config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# Install Husky v6
npm install husky --save-dev

# Activate hooks
npx husky install

# Add hook
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

## Git message
- type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]

- If need to stop commitlint in specific commit:
use `--no-verify`
    ```bash!=
    git commit --no-verify -m "git message..."
    ```