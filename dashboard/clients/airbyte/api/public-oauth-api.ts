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
/**
 * PublicOauthApi - axios parameter creator
 * @export
 */
export const PublicOauthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Redirected to by identity providers after authentication.
         * @summary Receive OAuth callbacks
         * @param {{ [key: string]: string; }} [queryParams] Query parameters. Should contain state and code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthCallback: async (queryParams?: { [key: string]: string; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/oauth/callback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (queryParams !== undefined) {
                for (const [key, value] of Object.entries(queryParams)) {
                    localVarQueryParameter[key] = value;
                }
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PublicOauthApi - functional programming interface
 * @export
 */
export const PublicOauthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PublicOauthApiAxiosParamCreator(configuration)
    return {
        /**
         * Redirected to by identity providers after authentication.
         * @summary Receive OAuth callbacks
         * @param {{ [key: string]: string; }} [queryParams] Query parameters. Should contain state and code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oauthCallback(queryParams?: { [key: string]: string; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oauthCallback(queryParams, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicOauthApi.oauthCallback']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PublicOauthApi - factory interface
 * @export
 */
export const PublicOauthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PublicOauthApiFp(configuration)
    return {
        /**
         * Redirected to by identity providers after authentication.
         * @summary Receive OAuth callbacks
         * @param {PublicOauthApiOauthCallbackRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthCallback(requestParameters: PublicOauthApiOauthCallbackRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.oauthCallback(requestParameters.queryParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for oauthCallback operation in PublicOauthApi.
 * @export
 * @interface PublicOauthApiOauthCallbackRequest
 */
export interface PublicOauthApiOauthCallbackRequest {
    /**
     * Query parameters. Should contain state and code.
     * @type {{ [key: string]: string; }}
     * @memberof PublicOauthApiOauthCallback
     */
    readonly queryParams?: { [key: string]: string; }
}

/**
 * PublicOauthApi - object-oriented interface
 * @export
 * @class PublicOauthApi
 * @extends {BaseAPI}
 */
export class PublicOauthApi extends BaseAPI {
    /**
     * Redirected to by identity providers after authentication.
     * @summary Receive OAuth callbacks
     * @param {PublicOauthApiOauthCallbackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicOauthApi
     */
    public oauthCallback(requestParameters: PublicOauthApiOauthCallbackRequest = {}, options?: RawAxiosRequestConfig) {
        return PublicOauthApiFp(this.configuration).oauthCallback(requestParameters.queryParams, options).then((request) => request(this.axios, this.basePath));
    }
}
