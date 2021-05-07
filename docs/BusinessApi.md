# Trulioo.BusinessApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessSearchResult**](BusinessApi.md#getBusinessSearchResult) | **GET** /{mode}/business/v1/search/transactionrecord/{id} | Get Business Search Result
[**search**](BusinessApi.md#search) | **POST** /{mode}/business/v1/search | Search



## getBusinessSearchResult

> BusinessSearchResponse getBusinessSearchResult(mode, id)

Get Business Search Result

returns the a business search result.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.BusinessApi();
let mode = "'trial'"; // String | trial or live
let id = "id_example"; // String | transaction record id
apiInstance.getBusinessSearchResult(mode, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **id** | **String**| transaction record id | 

### Return type

[**BusinessSearchResponse**](BusinessSearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## search

> BusinessSearchResponse search(mode, businessSearchRequest)

Search

Calling this method will perform a business search.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.BusinessApi();
let mode = "'trial'"; // String | trial or live
let businessSearchRequest = new Trulioo.BusinessSearchRequest(); // BusinessSearchRequest | 
apiInstance.search(mode, businessSearchRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **businessSearchRequest** | [**BusinessSearchRequest**](BusinessSearchRequest.md)|  | 

### Return type

[**BusinessSearchResponse**](BusinessSearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json
- **Accept**: application/json, text/json

