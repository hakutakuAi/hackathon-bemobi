/* tslint:disable */
/* eslint-disable */
/**
 * airbyte-api
 * Programatically control Airbyte Cloud, OSS & Enterprise.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { PermissionCreateRequest } from '../model';
// @ts-ignore
import type { PermissionResponse } from '../model';
// @ts-ignore
import type { PermissionUpdateRequest } from '../model';
// @ts-ignore
import type { PermissionsResponse } from '../model';
/**
 * PermissionsApi - axios parameter creator
 * @export
 */
export const PermissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a permission
         * @param {PermissionCreateRequest} permissionCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPermission: async (permissionCreateRequest: PermissionCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'permissionCreateRequest' is not null or undefined
            assertParamExists('createPermission', 'permissionCreateRequest', permissionCreateRequest)
            const localVarPath = `/permissions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(permissionCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a Permission
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePermission: async (permissionId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'permissionId' is not null or undefined
            assertParamExists('deletePermission', 'permissionId', permissionId)
            const localVarPath = `/permissions/{permissionId}`
                .replace(`{${"permissionId"}}`, encodeURIComponent(String(permissionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Permission details
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermission: async (permissionId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'permissionId' is not null or undefined
            assertParamExists('getPermission', 'permissionId', permissionId)
            const localVarPath = `/permissions/{permissionId}`
                .replace(`{${"permissionId"}}`, encodeURIComponent(String(permissionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List Permissions by user id
         * @param {string} [userId] User Id in permission.
         * @param {string} [organizationId] This is required if you want to read someone else\&#39;s permissions, and you should have organization admin or a higher role.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPermissions: async (userId?: string, organizationId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/permissions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (organizationId !== undefined) {
                localVarQueryParameter['organizationId'] = organizationId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a permission
         * @param {string} permissionId 
         * @param {PermissionUpdateRequest} permissionUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePermission: async (permissionId: string, permissionUpdateRequest: PermissionUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'permissionId' is not null or undefined
            assertParamExists('updatePermission', 'permissionId', permissionId)
            // verify required parameter 'permissionUpdateRequest' is not null or undefined
            assertParamExists('updatePermission', 'permissionUpdateRequest', permissionUpdateRequest)
            const localVarPath = `/permissions/{permissionId}`
                .replace(`{${"permissionId"}}`, encodeURIComponent(String(permissionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(permissionUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PermissionsApi - functional programming interface
 * @export
 */
export const PermissionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PermissionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a permission
         * @param {PermissionCreateRequest} permissionCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPermission(permissionCreateRequest: PermissionCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPermission(permissionCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PermissionsApi.createPermission']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete a Permission
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePermission(permissionId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePermission(permissionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PermissionsApi.deletePermission']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Permission details
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPermission(permissionId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPermission(permissionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PermissionsApi.getPermission']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List Permissions by user id
         * @param {string} [userId] User Id in permission.
         * @param {string} [organizationId] This is required if you want to read someone else\&#39;s permissions, and you should have organization admin or a higher role.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPermissions(userId?: string, organizationId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPermissions(userId, organizationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PermissionsApi.listPermissions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a permission
         * @param {string} permissionId 
         * @param {PermissionUpdateRequest} permissionUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePermission(permissionId: string, permissionUpdateRequest: PermissionUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePermission(permissionId, permissionUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PermissionsApi.updatePermission']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PermissionsApi - factory interface
 * @export
 */
export const PermissionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PermissionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a permission
         * @param {PermissionsApiCreatePermission1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPermission(requestParameters: PermissionsApiCreatePermission1Request, options?: RawAxiosRequestConfig): AxiosPromise<PermissionResponse> {
            return localVarFp.createPermission(requestParameters.permissionCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a Permission
         * @param {PermissionsApiDeletePermission1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePermission(requestParameters: PermissionsApiDeletePermission1Request, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deletePermission(requestParameters.permissionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Permission details
         * @param {PermissionsApiGetPermission1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermission(requestParameters: PermissionsApiGetPermission1Request, options?: RawAxiosRequestConfig): AxiosPromise<PermissionResponse> {
            return localVarFp.getPermission(requestParameters.permissionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Permissions by user id
         * @param {PermissionsApiListPermissions1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPermissions(requestParameters: PermissionsApiListPermissions1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<PermissionsResponse> {
            return localVarFp.listPermissions(requestParameters.userId, requestParameters.organizationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a permission
         * @param {PermissionsApiUpdatePermission1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePermission(requestParameters: PermissionsApiUpdatePermission1Request, options?: RawAxiosRequestConfig): AxiosPromise<PermissionResponse> {
            return localVarFp.updatePermission(requestParameters.permissionId, requestParameters.permissionUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createPermission operation in PermissionsApi.
 * @export
 * @interface PermissionsApiCreatePermission1Request
 */
export interface PermissionsApiCreatePermission1Request {
    /**
     * 
     * @type {PermissionCreateRequest}
     * @memberof PermissionsApiCreatePermission1
     */
    readonly permissionCreateRequest: PermissionCreateRequest
}

/**
 * Request parameters for deletePermission operation in PermissionsApi.
 * @export
 * @interface PermissionsApiDeletePermission1Request
 */
export interface PermissionsApiDeletePermission1Request {
    /**
     * 
     * @type {string}
     * @memberof PermissionsApiDeletePermission1
     */
    readonly permissionId: string
}

/**
 * Request parameters for getPermission operation in PermissionsApi.
 * @export
 * @interface PermissionsApiGetPermission1Request
 */
export interface PermissionsApiGetPermission1Request {
    /**
     * 
     * @type {string}
     * @memberof PermissionsApiGetPermission1
     */
    readonly permissionId: string
}

/**
 * Request parameters for listPermissions operation in PermissionsApi.
 * @export
 * @interface PermissionsApiListPermissions1Request
 */
export interface PermissionsApiListPermissions1Request {
    /**
     * User Id in permission.
     * @type {string}
     * @memberof PermissionsApiListPermissions1
     */
    readonly userId?: string

    /**
     * This is required if you want to read someone else\&#39;s permissions, and you should have organization admin or a higher role.
     * @type {string}
     * @memberof PermissionsApiListPermissions1
     */
    readonly organizationId?: string
}

/**
 * Request parameters for updatePermission operation in PermissionsApi.
 * @export
 * @interface PermissionsApiUpdatePermission1Request
 */
export interface PermissionsApiUpdatePermission1Request {
    /**
     * 
     * @type {string}
     * @memberof PermissionsApiUpdatePermission1
     */
    readonly permissionId: string

    /**
     * 
     * @type {PermissionUpdateRequest}
     * @memberof PermissionsApiUpdatePermission1
     */
    readonly permissionUpdateRequest: PermissionUpdateRequest
}

/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export class PermissionsApi extends BaseAPI {
    /**
     * 
     * @summary Create a permission
     * @param {PermissionsApiCreatePermission1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public createPermission(requestParameters: PermissionsApiCreatePermission1Request, options?: RawAxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).createPermission(requestParameters.permissionCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a Permission
     * @param {PermissionsApiDeletePermission1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public deletePermission(requestParameters: PermissionsApiDeletePermission1Request, options?: RawAxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).deletePermission(requestParameters.permissionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Permission details
     * @param {PermissionsApiGetPermission1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public getPermission(requestParameters: PermissionsApiGetPermission1Request, options?: RawAxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).getPermission(requestParameters.permissionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Permissions by user id
     * @param {PermissionsApiListPermissions1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public listPermissions(requestParameters: PermissionsApiListPermissions1Request = {}, options?: RawAxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).listPermissions(requestParameters.userId, requestParameters.organizationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a permission
     * @param {PermissionsApiUpdatePermission1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public updatePermission(requestParameters: PermissionsApiUpdatePermission1Request, options?: RawAxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).updatePermission(requestParameters.permissionId, requestParameters.permissionUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

