export default {
  '*.{ts,js,tsx,jsx,json}': stagedFiles => [
    `eslint ${stagedFiles.join(' ')}`,
  ],
  // 注意tsc后面加了文件 就不会用config.json中的配置了 所以直接根据选择对应的config校验
  '*.{css,vue,less}': stagedFiles => [`stylelint ${stagedFiles.join(' ')}`],
}
