# Trulioo.ConfigurationApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessRegistrationNumbers**](ConfigurationApi.md#getBusinessRegistrationNumbers) | **GET** /{mode}/configuration/v1/businessregistrationnumbers/{countryCode}/{jurisdictionCode} | Get Business Registration Numbers
[**getConsents**](ConfigurationApi.md#getConsents) | **GET** /{mode}/configuration/v1/consents/{configurationName}/{countryCode} | Get Consents
[**getCountryCodes**](ConfigurationApi.md#getCountryCodes) | **GET** /{mode}/configuration/v1/countrycodes/{configurationName} | Get Country Codes
[**getCountrySubdivisions**](ConfigurationApi.md#getCountrySubdivisions) | **GET** /{mode}/configuration/v1/countrysubdivisions/{countryCode} | Get Country Subdivisions
[**getDatasources**](ConfigurationApi.md#getDatasources) | **GET** /{mode}/configuration/v1/datasources/{configurationName}/{countryCode} | Get Datasources
[**getDetailedConsents**](ConfigurationApi.md#getDetailedConsents) | **GET** /{mode}/configuration/v1/detailedConsents/{configurationName}/{countryCode} | Get Detailed Consents
[**getDocumentTypes**](ConfigurationApi.md#getDocumentTypes) | **GET** /{mode}/configuration/v1/documentTypes/{countryCode} | Get Document Types
[**getFields**](ConfigurationApi.md#getFields) | **GET** /{mode}/configuration/v1/fields/{configurationName}/{countryCode} | Get Fields
[**getRecommendedFields**](ConfigurationApi.md#getRecommendedFields) | **GET** /{mode}/configuration/v1/recommendedfields/{configurationName}/{countryCode} | Get Recommended Fields
[**getTestEntities**](ConfigurationApi.md#getTestEntities) | **GET** /{mode}/configuration/v1/testentities/{configurationName}/{countryCode} | Get Test Entities



## getBusinessRegistrationNumbers

> [BusinessRegistrationNumber] getBusinessRegistrationNumbers(mode, countryCode, jurisdictionCode)

Get Business Registration Numbers

Gets the currently configured business registration numbers, for country and an optionally supplied jurisdiction

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let countryCode = "countryCode_example"; // String | Country alpha2 code, get via the call to https://developer.trulioo.com/reference#getcountrycodes
let jurisdictionCode = "jurisdictionCode_example"; // String | Optional jurisdiction code, get via the call to https://developer.trulioo.com/reference#getcountrysubdivisions
apiInstance.getBusinessRegistrationNumbers(mode, countryCode, jurisdictionCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Country alpha2 code, get via the call to https://developer.trulioo.com/reference#getcountrycodes | 
 **jurisdictionCode** | **String**| Optional jurisdiction code, get via the call to https://developer.trulioo.com/reference#getcountrysubdivisions | 

### Return type

[**[BusinessRegistrationNumber]**](BusinessRegistrationNumber.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getConsents

> [String] getConsents(mode, configurationName, countryCode)

Get Consents

This method retrieves the consents required for data sources currently configured in your account configuration.   The response for this method contains a collection of strings that Verify method&#39;s ConsentForDataSources field expects to perform a verification using those data sources.   A failure to provide an element from the string collection will lead to a &lt;a class&#x3D;\&quot;link-to-api\&quot; href&#x3D;\&quot;#errors\&quot;&gt;1005&lt;/a&gt; service error.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getConsents(mode, configurationName, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getCountryCodes

> [String] getCountryCodes(mode, configurationName)

Get Country Codes

This method retrieves all the countries that are available to perform a verification.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
apiInstance.getCountryCodes(mode, configurationName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getCountrySubdivisions

> [CountrySubdivision] getCountrySubdivisions(mode, countryCode)

Get Country Subdivisions

Gets the provinces states or other subdivisions for a country, mostly matches ISO 3166-2

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let countryCode = "countryCode_example"; // String | Country alpha2 code, get the the call to countrycodes
apiInstance.getCountrySubdivisions(mode, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Country alpha2 code, get the the call to countrycodes | 

### Return type

[**[CountrySubdivision]**](CountrySubdivision.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getDatasources

> [NormalizedDatasourceGroupCountry] getDatasources(mode, configurationName, countryCode)

Get Datasources

Gets datasource groups configured for your product and country.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getDatasources(mode, configurationName, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

[**[NormalizedDatasourceGroupCountry]**](NormalizedDatasourceGroupCountry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getDetailedConsents

> [Consent] getDetailedConsents(mode, configurationName, countryCode)

Get Detailed Consents

This method retrieves details about consents required for data sources currently configured in your account configuration.   The response for this method contains a collection of objects.  Each object contains the Name of the data source, Text outlining what the user is consenting to, and optionally a Url where the user can find more information about how their data will be used.    Failure to provide a Name from the object collection will lead to a &lt;a class&#x3D;\&quot;link-to-api\&quot; href&#x3D;\&quot;#errors\&quot;&gt;1005&lt;/a&gt; service error.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getDetailedConsents(mode, configurationName, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

[**[Consent]**](Consent.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getDocumentTypes

> {String: [String]} getDocumentTypes(mode, countryCode)

Get Document Types

Gets the document types available for a country.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getDocumentTypes(mode, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

**{String: [String]}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getFields

> Object getFields(mode, configurationName, countryCode)

Get Fields

Generates json schema for the API, the schema is dynamic based on the country and configuration you are using.  http://json-schema.org/documentation.html

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getFields(mode, configurationName, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getRecommendedFields

> Object getRecommendedFields(mode, configurationName, countryCode)

Get Recommended Fields

Generates json schema for the API, the schema is dynamic based on the recommendedFields country and account you are using.  http://json-schema.org/documentation.html

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getRecommendedFields(mode, configurationName, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getTestEntities

> [TestEntityDataFields] getTestEntities(mode, configurationName, countryCode)

Get Test Entities

Gets the test entities configured for your product and country.

### Example

```javascript
import Trulioo from 'Trulioo SDK';
let defaultClient = Trulioo.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Trulioo.ConfigurationApi();
let mode = "'trial'"; // String | trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
apiInstance.getTestEntities(mode, configurationName, countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 

### Return type

[**[TestEntityDataFields]**](TestEntityDataFields.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json

