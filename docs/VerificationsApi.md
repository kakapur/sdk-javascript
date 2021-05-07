# Trulioo.VerificationsApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentDownload**](VerificationsApi.md#documentDownload) | **GET** /{mode}/verifications/v1/documentdownload/{transactionRecordId}/{fieldName} | Document Download
[**getTransactionRecord**](VerificationsApi.md#getTransactionRecord) | **GET** /{mode}/verifications/v1/transactionrecord/{id} | Get Transaction Record
[**getTransactionRecordAddress**](VerificationsApi.md#getTransactionRecordAddress) | **GET** /{mode}/verifications/v1/transactionrecord/{id}/withaddress | Get Transaction Record Address
[**getTransactionRecordDocument**](VerificationsApi.md#getTransactionRecordDocument) | **GET** /{mode}/verifications/v1/transactionrecord/{transactionRecordID}/{documentField} | Get Transaction Record Document
[**getTransactionRecordVerbose**](VerificationsApi.md#getTransactionRecordVerbose) | **GET** /{mode}/verifications/v1/transactionrecord/{id}/verbose | Get Transaction Record Verbose
[**getTransactionStatus**](VerificationsApi.md#getTransactionStatus) | **GET** /{mode}/verifications/v1/transaction/{id}/status | Get Transaction Status
[**verify**](VerificationsApi.md#verify) | **POST** /{mode}/verifications/v1/verify | Verify



## documentDownload

> Object documentDownload(mode, transactionRecordId, fieldName)

Document Download

Download Document

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let transactionRecordId = "transactionRecordId_example"; // String | id of the transactionrecord, this will be a GUID
let fieldName = "fieldName_example"; // String | document field name
apiInstance.documentDownload(mode, transactionRecordId, fieldName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **transactionRecordId** | **String**| id of the transactionrecord, this will be a GUID | 
 **fieldName** | **String**| document field name | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getTransactionRecord

> TransactionRecordResult getTransactionRecord(mode, id)

Get Transaction Record

This method is used to retrieve the request and results of a verification performed using the verify method.  The response for this method includes the same information as verify method&#39;s response, along with data present in the input fields of the verify request.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let id = "id_example"; // String | id of the transactionrecord, this will be a GUID
apiInstance.getTransactionRecord(mode, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **id** | **String**| id of the transactionrecord, this will be a GUID | 

### Return type

[**TransactionRecordResult**](TransactionRecordResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getTransactionRecordAddress

> TransactionRecordResult getTransactionRecordAddress(mode, id)

Get Transaction Record Address

Fetch the results of a verification with the TransactionRecordId for the transaction this will include additional information if your account  includes address cleansing.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let id = "id_example"; // String | id of the transactionrecord, this will be a GUID
apiInstance.getTransactionRecordAddress(mode, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **id** | **String**| id of the transactionrecord, this will be a GUID | 

### Return type

[**TransactionRecordResult**](TransactionRecordResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getTransactionRecordDocument

> String getTransactionRecordDocument(mode, transactionRecordID, documentField)

Get Transaction Record Document

This method is used to retrieve the document of a verification performed using the verify method.  The response for this method includes the processed base64 JPEG formatted string

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let transactionRecordID = "transactionRecordID_example"; // String | id of the transactionrecord, this will be a GUID
let documentField = "documentField_example"; // String | FieldName of the Document, this will be a string
apiInstance.getTransactionRecordDocument(mode, transactionRecordID, documentField).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **transactionRecordID** | **String**| id of the transactionrecord, this will be a GUID | 
 **documentField** | **String**| FieldName of the Document, this will be a string | 

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getTransactionRecordVerbose

> TransactionRecordResult getTransactionRecordVerbose(mode, id)

Get Transaction Record Verbose

Fetch the results of a verification with the TransactionRecordId for the transaction this will include additional information if your account  includes address cleansing and watchlist details.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let id = "id_example"; // String | id of the transactionrecord, this will be a GUID
apiInstance.getTransactionRecordVerbose(mode, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **id** | **String**| id of the transactionrecord, this will be a GUID | 

### Return type

[**TransactionRecordResult**](TransactionRecordResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getTransactionStatus

> TransactionStatus getTransactionStatus(mode, id)

Get Transaction Status

This method is used to retrieve the processing status of an asynchronous transaction. The response for this method includes the processing status of the verification, the TransactionID, the TransactionRecordID as well as whether the verification request has timed out.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let id = "id_example"; // String | id of the asynchronous transaction, this will be a GUID
apiInstance.getTransactionStatus(mode, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **id** | **String**| id of the asynchronous transaction, this will be a GUID | 

### Return type

[**TransactionStatus**](TransactionStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## verify

> VerifyResult verify(mode, verifyRequest)

Verify

Calling this method will perform a verification. If your account includes address cleansing set the CleansedAddress flag to get  additional address information in the result.  You can query configuration to get what fields are available to you in each each country.  It is also possible to get sample requests from the customer portal.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.VerificationsApi();
let mode = "'trial'"; // String | trial or live
let verifyRequest = new Trulioo.VerifyRequest(); // VerifyRequest | 
apiInstance.verify(mode, verifyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **verifyRequest** | [**VerifyRequest**](VerifyRequest.md)|  | 

### Return type

[**VerifyResult**](VerifyResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json
- **Accept**: application/json, text/json

