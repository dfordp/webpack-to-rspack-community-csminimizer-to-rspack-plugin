export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Replace the require statement for CssMinimizerPlugin with rspack
  root.find(j.VariableDeclarator, {
    id: { name: 'CssMinimizerPlugin' },
    init: {
      callee: { name: 'require' },
      arguments: [{ value: 'css-minimizer-webpack-plugin' }]
    }
  }).forEach(path => {
    j(path).replaceWith(
      j.variableDeclarator(
        j.identifier('rspack'),
        j.callExpression(j.identifier('require'), [j.literal('@rspack/core')])
      )
    );
    dirtyFlag = true;
  });

  // Replace new CssMinimizerPlugin() with new rspack.LightningCssMinimizerRspackPlugin(options)
  root.find(j.NewExpression, {
    callee: { name: 'CssMinimizerPlugin' }
  }).forEach(path => {
    j(path).replaceWith(
      j.newExpression(
        j.memberExpression(
          j.identifier('rspack'),
          j.identifier('LightningCssMinimizerRspackPlugin')
        ),
        [j.identifier('options')]
      )
    );
    dirtyFlag = true;
  });

  return dirtyFlag ? root.toSource() : undefined;
}


export const parser = "tsx";