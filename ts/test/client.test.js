const Client = require('../dist/client');
const assert = require('assert');
const { readFileSync } = require('fs');
const { BytesReadable } = require('@alicloud/tea-typescript');
const { FileField } = require('@alicloud/tea-fileform');
const path = require('path');


describe('tea repository sdk test', () => {
  const teaPkgA = path.join(__dirname, './fixture/testScope-TestTea-0.0.1.tgz');
  const teaPkgB1 = path.join(__dirname, './fixture/testScope-TestTea2-1.0.0.tgz');
  const teaPkgB2 = path.join(__dirname, './fixture/testScope-TestTea2-1.0.1.tgz');
  const daraFileInfoA = JSON.parse(readFileSync(path.join(__dirname, './fixture/Darafile1$0.0.1'), { encoding: 'utf8' }))
  const daraFileInfoB1 = JSON.parse(readFileSync(path.join(__dirname, './fixture/Darafile2$1.0.0'), { encoding: 'utf8' }))
  const daraFileInfoB2 = JSON.parse(readFileSync(path.join(__dirname, './fixture/Darafile2$1.0.1'), { encoding: 'utf8' }))
  const testScope = 'testScope';
  const usernameA = process.env.USER_A;
  const emailA = 'userA@alibaba.com';
  const passwordA = process.env.USER_A_PW;
  let configMap = Object.create(null);
  configMap['endpoint'] = process.env.REPO_ENDPOINT;
  configMap['protocol'] = 'http';
  let config = new Client.Config(configMap);
  let client = new Client["default"](config);

  it('userA login is ok!', async () => {
    let user = new Client.UserObject({
      username: usernameA,
      email: emailA,
      password: passwordA
    });
    let ret = await client.userLogin(user);
    configMap['auth'] = ret.rev;
    config = new Client.Config(configMap);
    client = new Client["default"](config);
    assert.equal(ret.ok, true);
  });

  it('publish a module!', async () => {
    let fileContent = readFileSync(teaPkgA);
    let fileInfo = new FileField({
      filename: 'testScope-TestTea-0.0.1.tgz',
      contentType: 'application/x-gzip',
      content: new BytesReadable(fileContent)
    });
    let moduleInfo = new Client.PublishModuleObject({
      scope: daraFileInfoA.scope,
      name: daraFileInfoA.name,
      version: daraFileInfoA.version,
      file: fileInfo,
      author: usernameA,
      darafile: JSON.stringify(daraFileInfoA),
      readme: 'NO ReadMe',
      size: fileContent.length,
    });
    let ret = await client.publishModule(moduleInfo);
    assert.equal(ret.ok, true);
  });

  it('publish module B!', async () => {
    let fileContent = readFileSync(teaPkgB1);
    let fileInfo = new FileField({
      filename: 'testScope-TestTea1-1.0.0.tgz',
      contentType: 'application/x-gzip',
      content: new BytesReadable(fileContent)
    });
    let moduleInfo = new Client.PublishModuleObject({
      scope: daraFileInfoB1.scope,
      name: daraFileInfoB1.name,
      version: daraFileInfoB1.version,
      file: fileInfo,
      author: 'cpj',
      darafile: JSON.stringify(daraFileInfoB1),
      readme: 'NO ReadMe',
      size: fileContent.length,
    });
    let ret = await client.publishModule(moduleInfo);
    assert.equal(ret.ok, true);
  });

  it('get scope modules by keyword is ok!', async () => {
    let scopeModulesObj = new Client.GetScopeModulesObject({
      scope: testScope,
      name: daraFileInfoA.name
    });
    let ret = await client.getScopeModules(scopeModulesObj);
    assert.equal(ret.ok, true);
    assert.equal(ret.data.list.length, 2);
  });

  it('get module versions is ok!', async () => {
    let scopeModuleVersionsObj = new Client.GetModuleVersionsObject({
      scope: testScope,
      name: daraFileInfoA.name
    });
    let ret = await client.getModuleVersions(scopeModuleVersionsObj);
    assert.equal(ret.ok, true);
    assert.equal(ret.data.list.length, 1);
  });

  it('publish module B new version!', async () => {
    let fileContent = readFileSync(teaPkgB2);
    let fileInfo = new FileField({
      filename: 'testScope-TestTea1-1.0.0.tgz',
      contentType: 'application/x-gzip',
      content: new BytesReadable(fileContent)
    });
    let moduleInfo = new Client.PublishModuleObject({
      scope: daraFileInfoB2.scope,
      name: daraFileInfoB2.name,
      version: daraFileInfoB2.version,
      file: fileInfo,
      author: 'cpj',
      darafile: JSON.stringify(daraFileInfoB2),
      readme: 'NO ReadMe',
      size: fileContent.length,
    });
    let ret = await client.publishModule(moduleInfo);
    assert.equal(ret.ok, true);
  });

  it('download the module is ok!', async () => {
    let downloadInfo = new Client.DownloadModuleObject({
      'specs': `${daraFileInfoA.scope}:${daraFileInfoA.name}:${daraFileInfoA.version},${daraFileInfoB1.scope}:${daraFileInfoB1.name}:${daraFileInfoB1.version}`
    });
    let ret = await client.downloadModule(downloadInfo);
    assert.equal(ret.ok, true);
    assert.equal(ret.download_list.length, 2);
  });
  
  it('get the module\' one maintainer is ok!', async () => {
    let maintainersInfo = new Client.GetModuleObjectMaintainersObject({
      scope: daraFileInfoB1.scope,
      name: daraFileInfoB1.name
    });
    let ret = await client.getModuleMaintainers(maintainersInfo);
    assert.equal(ret.ok, true);
    assert.equal(ret.maintainers.length, 1);
  });

  it('get the scope info should be ok!', async () => {
    let ret = await client.getScopeInfo(testScope);
    assert.equal(ret.ok, true);
    assert.equal(ret.scopeInfo.scope, testScope);
  });

  it('get the module info should be ok!', async () => {
    let ret = await client.getModuleInfo(daraFileInfoA.scope, daraFileInfoA.name, daraFileInfoA.version);
    assert.equal(ret.ok, true);
    assert.equal(ret.moduleInfo.maintainers.length, 1);
    assert.equal(ret.moduleInfo.version, daraFileInfoA.version);
    assert.equal(ret.moduleInfo.name, daraFileInfoA.name);
    assert.equal(ret.moduleInfo.scope, daraFileInfoA.scope);
  });

  it('delete a module by module version!', async () => {
    let ret = await client.deleteModuleVersion(testScope, daraFileInfoA.name, daraFileInfoA.version);
    assert.equal(ret.ok, true);
  });

  it('module has been deleted should be error!', async () => {
    let downloadInfo = new Client.DownloadModuleObject({
      specs: `${daraFileInfoA.scope}:${daraFileInfoA.name}:${daraFileInfoA.version}`
    });
    try {
      await client.downloadModule(downloadInfo);
    } catch (err) {
      assert.deepStrictEqual(err.message, `DaraPackageError: code: 412, DaraPackageError reason: pakcage ${daraFileInfoA.scope}:${daraFileInfoA.name}:${daraFileInfoA.version} doesn\'t exist in repository !`);
    };
  });

  it('delete the modules with same name!', async () => {
    let ret = await client.deleteModule(daraFileInfoA.scope, daraFileInfoA.name);
    assert.equal(ret.ok, true);
  });

  it('modules have been deleted should be error!', async () => {
    let downloadInfo = new Client.DownloadModuleObject({
      specs: `${daraFileInfoA.scope}:${daraFileInfoA.name}:${daraFileInfoA.version}`
    });
    try {
      await client.downloadModule(downloadInfo);
    } catch (err) {
      assert.deepStrictEqual(err.message, `DaraPackageError: code: 412, DaraPackageError reason: pakcage ${daraFileInfoA.scope}:${daraFileInfoA.name}:${daraFileInfoA.version} doesn\'t exist in repository !`);
    };
  });
});