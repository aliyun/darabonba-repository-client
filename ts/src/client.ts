// This file is auto-generated, don't edit it
import Util from '@alicloud/tea-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import * as $tea from '@alicloud/tea-typescript';

/**
 * object about user operation
 */
export class UserObject extends $tea.Model {
  username: string;
  password: string;
  email: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
      password: 'password',
      email: 'email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
      password: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module download operation
 */
export class DownloadModuleObject extends $tea.Model {
  specs: string;
  static names(): { [key: string]: string } {
    return {
      specs: 'specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module publish operation
 */
export class PublishModuleObject extends $tea.Model {
  author: string;
  name: string;
  version: string;
  scope: string;
  darafile: string;
  dara_ast: string;
  readme: string;
  size: number;
  file: $FileForm.FileField;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      name: 'name',
      version: 'version',
      scope: 'scope',
      darafile: 'darafile',
      dara_ast: 'dara_ast',
      readme: 'readme',
      size: 'size',
      file: 'file',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      name: 'string',
      version: 'string',
      scope: 'string',
      darafile: 'string',
      dara_ast: 'string',
      readme: 'string',
      size: 'number',
      file: $FileForm.FileField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module maintainer operation
 */
export class GetModuleObjectMaintainersObject extends $tea.Model {
  scope: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module scope operation
 */
export class GetScopesObject extends $tea.Model {
  scope: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module scope operation
 */
export class GetScopeModulesObject extends $tea.Model {
  scope: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module version operation
 */
export class GetModuleVersionsObject extends $tea.Model {
  scope: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module scope operation
 */
export class LoginResultObject extends $tea.Model {
  ok: boolean;
  rev: string;
  static names(): { [key: string]: string } {
    return {
      ok: 'ok',
      rev: 'rev',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ok: 'boolean',
      rev: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Config extends $tea.Model {
  endpoint: string;
  protocol: string;
  auth: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      protocol: 'protocol',
      auth: 'auth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      protocol: 'string',
      auth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about module scope operation
 */
export class ScopeObject extends $tea.Model {
  scope: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

/**
 * object about scope maintainer operation
 */
export class ScopeMaintainerObject extends $tea.Model {
  username: string;
  scope: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client {
  _auth: string;
  _endpoint_host: string;
  _protocol: string;

  /**
   * init the client
   * @param config Config of the config
   */
  constructor(config: Config) {
    this._endpoint_host = config.endpoint;
    this._auth = config.auth;
    this._protocol = config.protocol;
  }

  /**
   * the api use to deal with get request
   * @param pathname pathname of the get api
   * @param query the model of query params 
   * @return result result of the server
   */
  async _get(pathname: string, query: $tea.Model): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
      timeout: 60000,
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        request_.protocol = this._protocol;
        request_.method = "GET";
        request_.pathname = pathname;
        request_.headers = {
          host: this._endpoint_host,
          accept: "application/json",
          authorization: this._auth,
        };
        request_.query = Util.stringifyMapValue($tea.toMap(query));
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        // return result
        return await this._handle(response_);
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  /**
   * the api use to deal with post request
   * @param pathname pathname of the post api
   * @param body the model of body params 
   * @return result result of the server
   */
  async _post(pathname: string, body: $tea.Model): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        request_.protocol = this._protocol;
        request_.method = "POST";
        request_.pathname = pathname;
        request_.headers = {
          host: this._endpoint_host,
          accept: "application/json",
          'content-type': "application/json; charset=utf-8",
        };
        if (this._auth) {
          request_.headers["authorization"] = this._auth;
        }

        request_.body = new $tea.BytesReadable(Util.toJSONString($tea.toMap(body)));
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        return await this._handle(response_);
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  /**
   * the api use to deal with put request
   * @param pathname pathname of the put api
   * @param body the model of body params 
   * @return result result of the server
   */
  async _put(pathname: string, body: $tea.Model): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        request_.protocol = this._protocol;
        request_.method = "PUT";
        request_.pathname = pathname;
        request_.headers = {
          host: this._endpoint_host,
          accept: "application/json",
          authorization: this._auth,
          'content-type': "application/json; charset=utf-8",
        };
        request_.body = new $tea.BytesReadable(Util.toJSONString($tea.toMap(body)));
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        return await this._handle(response_);
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  /**
   * the api use to deal with delete request
   * @param pathname pathname of the delete api
   * @param query the model of query params 
   * @return result result of the server
   */
  async _delete(pathname: string, query: $tea.Model): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        request_.protocol = this._protocol;
        request_.method = "DELETE";
        request_.pathname = pathname;
        request_.headers = {
          host: this._endpoint_host,
          accept: "application/json",
          authorization: this._auth,
        };
        request_.query = Util.stringifyMapValue($tea.toMap(query));
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        return await this._handle(response_);
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  /**
   * publish module function
   * @param from PublishModuleObject for publish module operation
   * @return result result of the server
   */
  async publishModule(form: PublishModuleObject): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
      timeout: 60000,
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        let boundary = FileForm.getBoundary();
        request_.protocol = this._protocol;
        request_.method = "POST";
        request_.pathname = `/publish/module`;
        request_.headers = {
          host: this._endpoint_host,
          'content-type': `multipart/form-data; boundary=${boundary}`,
          accept: "application/json",
          authorization: this._auth,
        };
        request_.body = FileForm.toFileForm($tea.toMap(form), boundary);
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        return await this._handle(response_);
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  /**
   * the handler use to deal with the response
   * @param reponse response from tea repository server
   * @return result result of the server
   */
  async _handle(response: $tea.Response): Promise<{[key: string]: any}> {
    let result = Util.assertAsMap(await Util.readAsJSON(response.body));
    if (!Util.equalNumber(response.statusCode, 200)) {
      throw $tea.newError({
        message: `code: ${response.statusCode}, ${result["code"]} reason: ${result["message"]}`,
        code: `${result["code"]}`,
      });
    }

    if (!Util.assertAsBoolean(result["ok"])) {
      throw $tea.newError({
        message: `code: ${result["status"]}, ${result["code"]} reason: ${result["message"]}`,
        code: `${result["code"]}`,
      });
    }

    return result;
  }

  /**
   * user login function
   * @param body UserObject for user login info 
   * @return result result of the server
   */
  async userLogin(body: UserObject): Promise<LoginResultObject> {
    return $tea.cast<LoginResultObject>(await this._post(`/user/login`, body), new LoginResultObject({}));
  }

  /**
   * get scope info function
   * @param query GetScopesObject for get scope info operation
   * @return result result of the server
   */
  async getScopes(query: GetScopesObject): Promise<{[key: string]: any}> {
    return await this._get(`/scopes`, query);
  }

  /**
   * get  modules of certain scope function
   * @param query GetScopeModulesObject for get module list operation
   * @return result result of the server
   */
  async getScopeModules(query: GetScopeModulesObject): Promise<{[key: string]: any}> {
    return await this._get(`/scope/modules`, query);
  }

  /**
   * get versions of certain module function
   * @param query GetModuleVersionsObject for get version list operation
   * @return result result of the server
   */
  async getModuleVersions(query: GetModuleVersionsObject): Promise<{[key: string]: any}> {
    return await this._get(`/module/versions`, query);
  }

  /**
   * get versions of certain module function
   * @param query GetModuleVersionsObject for get version list operation
   * @return result result of the server
   */
  async getModuleMaintainers(query: GetModuleObjectMaintainersObject): Promise<{[key: string]: any}> {
    return await this._get(`/module/maintainers`, query);
  }

  /**
   * download module function
   * @param query DownloadModuleObject for download module operation
   * @return result result of the server
   */
  async downloadModule(query: DownloadModuleObject): Promise<{[key: string]: any}> {
    return await this._get(`/download/modules`, query);
  }

  /**
   * delete module function
   * @param scope module scope info
   * @param name module name info
   * @return result result of the server
   */
  async deleteModule(scope: string, name: string): Promise<{[key: string]: any}> {
    return await this._delete(`/scope/${scope}/module/${name}`, null);
  }

  /**
   * get module info function
   * @param scope module scope info
   * @return result result of the server
   */
  async getScopeInfo(scope: string): Promise<{[key: string]: any}> {
    return await this._get(`/scope/${scope}`, null);
  }

  /**
   * get module info function
   * @param scope module scope info
   * @param name module name info
   * @param name module version info
   * @return result result of the server
   */
  async getModuleInfo(scope: string, name: string, version: string): Promise<{[key: string]: any}> {
    return await this._get(`/scope/${scope}/module/${name}/version/${version}`, null);
  }

  /**
   * delete module info function
   * @param scope module scope info
   * @param name module name info
   * @param version module version info
   * @return result result of the server
   */
  async deleteModuleVersion(scope: string, name: string, version: string): Promise<{[key: string]: any}> {
    return await this._delete(`/scope/${scope}/module/${name}/version/${version}`, null);
  }

}
