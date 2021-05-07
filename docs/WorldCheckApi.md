# Trulioo.WorldCheckApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWorldCheckProfile**](WorldCheckApi.md#getWorldCheckProfile) | **GET** /{mode}/worldcheck/v1/profile/{originalTransactionID}/{referenceID} | Get World Check Profile



## getWorldCheckProfile

> Object getWorldCheckProfile(mode, originalTransactionID, referenceID)

Get World Check Profile

Returns the corresponding world-check profile of the specified transaction ID and reference ID.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.WorldCheckApi();
let mode = "'trial'"; // String | trial or live
let originalTransactionID = "originalTransactionID_example"; // String | 
let referenceID = "referenceID_example"; // String | 
apiInstance.getWorldCheckProfile(mode, originalTransactionID, referenceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **originalTransactionID** | **String**|  | 
 **referenceID** | **String**|  | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json

