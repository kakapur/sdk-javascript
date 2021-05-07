/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.2
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */

import ApiClient from "../ApiClient";
import TransactionStatus from '../model/TransactionStatus';

/**
* Connection service.
* @module api/ConnectionApi
* @version v1
*/
export default class ConnectionApi {

    /**
    * Constructs a new ConnectionApi. 
    * @alias module:api/ConnectionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Connection Async Callback Url
     * If set, the transaction will run asynchronously and Trulioo will try to update the client with transaction state updates until completed. If callback is not desired but the client wants to initiate an asynchronous transaction, provide https://api.globaldatacompany.com/connection/v1/async-callback as the Callback URL.
     * @param {String} mode trial or live
     * @param {module:model/TransactionStatus} transactionStatus transactionStatus
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    connectionAsyncCallbackUrlWithHttpInfo(mode, transactionStatus) {
      let postBody = transactionStatus;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling connectionAsyncCallbackUrl");
      }
      // verify the required parameter 'transactionStatus' is set
      if (transactionStatus === undefined || transactionStatus === null) {
        throw new Error("Missing the required parameter 'transactionStatus' when calling connectionAsyncCallbackUrl");
      }

      let pathParams = {
        'mode': mode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json'];
      let accepts = ['application/json', 'text/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/{mode}/connection/v1/async-callback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Connection Async Callback Url
     * If set, the transaction will run asynchronously and Trulioo will try to update the client with transaction state updates until completed. If callback is not desired but the client wants to initiate an asynchronous transaction, provide https://api.globaldatacompany.com/connection/v1/async-callback as the Callback URL.
     * @param {String} mode trial or live
     * @param {module:model/TransactionStatus} transactionStatus transactionStatus
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    connectionAsyncCallbackUrl(mode, transactionStatus) {
      return this.connectionAsyncCallbackUrlWithHttpInfo(mode, transactionStatus)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Say Hello
     * This method enables you to check if your system can connect to our system. You can even use a web browser to verify a connection to our system.  Applied a maximum length for the name parameter of 100 via a route constraint
     * @param {String} mode trial or live
     * @param {String} name Name to be returned in the response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    sayHelloWithHttpInfo(mode, name) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling sayHello");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling sayHello");
      }

      let pathParams = {
        'mode': mode,
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{mode}/connection/v1/sayhello/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Say Hello
     * This method enables you to check if your system can connect to our system. You can even use a web browser to verify a connection to our system.  Applied a maximum length for the name parameter of 100 via a route constraint
     * @param {String} mode trial or live
     * @param {String} name Name to be returned in the response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    sayHello(mode, name) {
      return this.sayHelloWithHttpInfo(mode, name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test Authentication
     * This method enables you to check if your credentials are valid. You will need to use basic authentication to ensure a successful response.
     * @param {String} mode trial or live
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    testAuthenticationWithHttpInfo(mode) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling testAuthentication");
      }

      let pathParams = {
        'mode': mode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{mode}/connection/v1/testauthentication', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test Authentication
     * This method enables you to check if your credentials are valid. You will need to use basic authentication to ensure a successful response.
     * @param {String} mode trial or live
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    testAuthentication(mode) {
      return this.testAuthenticationWithHttpInfo(mode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
