/**
 * Trulioo_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import TransactionRecordResult from '../model/TransactionRecordResult';
import VerifyRequest from '../model/VerifyRequest';
import VerifyResult from '../model/VerifyResult';

/**
* Verifications service.
* @module api/VerificationsApi
* @version 1.4.0
*/
export default class VerificationsApi {

    /**
    * Constructs a new VerificationsApi. 
    * @alias module:api/VerificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTransactionRecord operation.
     * @callback module:api/VerificationsApi~getTransactionRecordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionRecordResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transaction Record
     * This method is used to retrieve the request and results of a verification performed using the verify method.   The response for this method includes the same information as verify method's response, along with data present in the input fields of the verify request.
     * @param {String} id The TransactionRecordID from the Verify response, this will be a GUID
     * @param {module:api/VerificationsApi~getTransactionRecordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionRecordResult}
     */
    getTransactionRecord(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionRecord");
      }

      let pathParams = {
        'id': id
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
      let returnType = TransactionRecordResult;
      return this.apiClient.callApi(
        '/verifications/v1/transactionrecord/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verify operation.
     * @callback module:api/VerificationsApi~verifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerifyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify
     * Calling this method will perform a verification. If your account includes address cleansing set the CleansedAddress flag to get  additional address information in the result.  You can query configuration to get what fields are available to you in each country.  It is also possible to get sample requests from the customer portal. If you are configured for a sandbox account make sure to call Get Test Entities to get test data for a country you want to try. Sandbox accounts only use these test entities and so trying to verify with any other data will result in no matches being found.
     * @param {module:model/VerifyRequest} verifyRequest 
     * @param {module:api/VerificationsApi~verifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerifyResult}
     */
    verify(verifyRequest, callback) {
      let postBody = verifyRequest;
      // verify the required parameter 'verifyRequest' is set
      if (verifyRequest === undefined || verifyRequest === null) {
        throw new Error("Missing the required parameter 'verifyRequest' when calling verify");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json', 'text/json'];
      let accepts = ['application/json', 'text/json'];
      let returnType = VerifyResult;
      return this.apiClient.callApi(
        '/verifications/v1/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
