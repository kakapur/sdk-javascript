# Trulioo.ConnectionApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectionAsyncCallbackUrl**](ConnectionApi.md#connectionAsyncCallbackUrl) | **POST** /{mode}/connection/v1/async-callback | Connection Async Callback Url
[**sayHello**](ConnectionApi.md#sayHello) | **GET** /{mode}/connection/v1/sayhello/{name} | Say Hello
[**testAuthentication**](ConnectionApi.md#testAuthentication) | **GET** /{mode}/connection/v1/testauthentication | Test Authentication



## connectionAsyncCallbackUrl

> Object connectionAsyncCallbackUrl(mode, transactionStatus)

Connection Async Callback Url

If set, the transaction will run asynchronously and Trulioo will try to update the client with transaction state updates until completed. If callback is not desired but the client wants to initiate an asynchronous transaction, provide https://api.globaldatacompany.com/connection/v1/async-callback as the Callback URL.

### Example

```javascript
import Trulioo from 'Trulioo SDK';

let apiInstance = new Trulioo.ConnectionApi();
let mode = "'trial'"; // String | trial or live
let transactionStatus = new Trulioo.TransactionStatus(); // TransactionStatus | transactionStatus
apiInstance.connectionAsyncCallbackUrl(mode, transactionStatus).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **transactionStatus** | [**TransactionStatus**](TransactionStatus.md)| transactionStatus | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json
- **Accept**: application/json, text/json


## sayHello

> String sayHello(mode, name)

Say Hello

This method enables you to check if your system can connect to our system. You can even use a web browser to verify a connection to our system.  Applied a maximum length for the name parameter of 100 via a route constraint

### Example

```javascript
import Trulioo from 'Trulioo SDK';

let apiInstance = new Trulioo.ConnectionApi();
let mode = "'trial'"; // String | trial or live
let name = "name_example"; // String | Name to be returned in the response
apiInstance.sayHello(mode, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **name** | **String**| Name to be returned in the response | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## testAuthentication

> String testAuthentication(mode)

Test Authentication

This method enables you to check if your credentials are valid. You will need to use basic authentication to ensure a successful response.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConnectionApi();
let mode = "'trial'"; // String | trial or live
apiInstance.testAuthentication(mode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json

