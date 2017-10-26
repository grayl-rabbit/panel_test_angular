/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
  map: {
    '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
  };
}
