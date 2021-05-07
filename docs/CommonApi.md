# Trulioo.CommonApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commonIpInfo**](CommonApi.md#commonIpInfo) | **GET** /{mode}/common/v1/ip-info | Common Ip Info



## commonIpInfo

> {String: String} commonIpInfo(mode)

Common Ip Info

This method returns the client&#39;s public IP address.

### Example

```javascript
import Trulioo from 'Trulioo SDK';

let apiInstance = new Trulioo.CommonApi();
let mode = "'trial'"; // String | trial or live
apiInstance.commonIpInfo(mode).then((data) => {
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

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json

