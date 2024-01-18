[@mavrykdynamics/mavryk-wallet-dapp](README.md)

# @mavrykdynamics/mavryk-wallet-dapp

## Index

### Enumerations

* [MavrykWalletDAppErrorType](enums/mavrykwalletdapperrortype.md)
* [MavrykWalletDAppMessageType](enums/mavrykwalletdappmessagetype.md)
* [MavrykWalletPageMessageType](enums/mavrykwalletpagemessagetype.md)

### Classes

* [InvalidParamsMavrykWalletError](classes/invalidparamsmavrykwalleterror.md)
* [NotConnectedMavrykWalletError](classes/notconnectedmavrykwalleterror.md)
* [NotFoundMavrykWalletError](classes/notfoundmavrykwalleterror.md)
* [NotGrantedMavrykWalletError](classes/notgrantedmavrykwalleterror.md)
* [MavrykWallet](classes/mavrykwallet.md)
* [MavrykWalletError](classes/mavrykwalleterror.md)

### Interfaces

* [MavrykWalletDAppBroadcastRequest](interfaces/mavrykwalletdappbroadcastrequest.md)
* [MavrykWalletDAppBroadcastResponse](interfaces/mavrykwalletdappbroadcastresponse.md)
* [MavrykWalletDAppGetCurrentPermissionRequest](interfaces/mavrykwalletdappgetcurrentpermissionrequest.md)
* [MavrykWalletDAppGetCurrentPermissionResponse](interfaces/mavrykwalletdappgetcurrentpermissionresponse.md)
* [MavrykWalletDAppMessageBase](interfaces/mavrykwalletdappmessagebase.md)
* [MavrykWalletDAppMetadata](interfaces/mavrykwalletdappmetadata.md)
* [MavrykWalletDAppOperationRequest](interfaces/mavrykwalletdappoperationrequest.md)
* [MavrykWalletDAppOperationResponse](interfaces/mavrykwalletdappoperationresponse.md)
* [MavrykWalletDAppPermissionRequest](interfaces/mavrykwalletdapppermissionrequest.md)
* [MavrykWalletDAppPermissionResponse](interfaces/mavrykwalletdapppermissionresponse.md)
* [MavrykWalletDAppSignRequest](interfaces/mavrykwalletdappsignrequest.md)
* [MavrykWalletDAppSignResponse](interfaces/mavrykwalletdappsignresponse.md)
* [MavrykWalletPageMessage](interfaces/mavrykwalletpagemessage.md)

### Type aliases

* [MavrykWalletDAppMessage](README.md#mavrykwalletdappmessage)
* [MavrykWalletDAppNetwork](README.md#mavrykwalletdappnetwork)
* [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission)
* [MavrykWalletDAppRequest](README.md#mavrykwalletdapprequest)
* [MavrykWalletDAppResponse](README.md#mavrykwalletdappresponse)

### Functions

* [assertConnected](README.md#assertconnected)
* [assertResponse](README.md#assertresponse)
* [createError](README.md#createerror)
* [formatOpParams](README.md#formatopparams)
* [getCurrentPermission](README.md#getcurrentpermission)
* [isAvailable](README.md#isavailable)
* [onAvailabilityChange](README.md#onavailabilitychange)
* [onPermissionChange](README.md#onpermissionchange)
* [permissionsAreEqual](README.md#permissionsareequal)
* [request](README.md#request)
* [requestBroadcast](README.md#requestbroadcast)
* [requestOperation](README.md#requestoperation)
* [requestPermission](README.md#requestpermission)
* [requestSign](README.md#requestsign)
* [send](README.md#send)

## Type aliases

###  MavrykWalletDAppMessage

Ƭ **MavrykWalletDAppMessage**: *[MavrykWalletDAppRequest](README.md#mavrykwalletdapprequest) | [MavrykWalletDAppResponse](README.md#mavrykwalletdappresponse)*

*Defined in [types.ts:1](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/types.ts#L1)*

___

###  MavrykWalletDAppNetwork

Ƭ **MavrykWalletDAppNetwork**: *"mainnet" | "ithacanet" | "hangzhounet" | "idiazabalnet" | "granadanet" | "edo2net" | "florencenet" | "sandbox" | object*

*Defined in [types.ts:115](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/types.ts#L115)*

___

###  MavrykWalletDAppPermission

Ƭ **MavrykWalletDAppPermission**: *object | null*

*Defined in [types.ts:109](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/types.ts#L109)*

Misc

___

###  MavrykWalletDAppRequest

Ƭ **MavrykWalletDAppRequest**: *[MavrykWalletDAppGetCurrentPermissionRequest](interfaces/mavrykwalletdappgetcurrentpermissionrequest.md) | [MavrykWalletDAppPermissionRequest](interfaces/mavrykwalletdapppermissionrequest.md) | [MavrykWalletDAppOperationRequest](interfaces/mavrykwalletdappoperationrequest.md) | [MavrykWalletDAppSignRequest](interfaces/mavrykwalletdappsignrequest.md) | [MavrykWalletDAppBroadcastRequest](interfaces/mavrykwalletdappbroadcastrequest.md)*

*Defined in [types.ts:3](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/types.ts#L3)*

___

###  MavrykWalletDAppResponse

Ƭ **MavrykWalletDAppResponse**: *[MavrykWalletDAppGetCurrentPermissionResponse](interfaces/mavrykwalletdappgetcurrentpermissionresponse.md) | [MavrykWalletDAppPermissionResponse](interfaces/mavrykwalletdapppermissionresponse.md) | [MavrykWalletDAppOperationResponse](interfaces/mavrykwalletdappoperationresponse.md) | [MavrykWalletDAppSignResponse](interfaces/mavrykwalletdappsignresponse.md) | [MavrykWalletDAppBroadcastResponse](interfaces/mavrykwalletdappbroadcastresponse.md)*

*Defined in [types.ts:10](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/types.ts#L10)*

## Functions

###  assertConnected

▸ **assertConnected**(`perm`: [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission)): *asserts perm*

*Defined in [taquito-wallet.ts:156](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`perm` | [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission) |

**Returns:** *asserts perm*

___

###  assertResponse

▸ **assertResponse**(`condition`: any): *asserts condition*

*Defined in [client.ts:204](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | any |

**Returns:** *asserts condition*

___

###  createError

▸ **createError**(`payload`: any): *[MavrykWalletError](classes/mavrykwalleterror.md)‹›*

*Defined in [client.ts:179](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *[MavrykWalletError](classes/mavrykwalleterror.md)‹›*

___

###  formatOpParams

▸ **formatOpParams**(`op`: any): *any*

*Defined in [taquito-wallet.ts:162](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`op` | any |

**Returns:** *any*

___

###  getCurrentPermission

▸ **getCurrentPermission**(): *Promise‹null | object›*

*Defined in [client.ts:82](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L82)*

**Returns:** *Promise‹null | object›*

___

###  isAvailable

▸ **isAvailable**(): *Promise‹boolean›*

*Defined in [client.ts:15](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L15)*

**Returns:** *Promise‹boolean›*

___

###  onAvailabilityChange

▸ **onAvailabilityChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:42](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L42)*

**Parameters:**

▪ **callback**: *function*

▸ (`available`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`available` | boolean |

**Returns:** *(Anonymous function)*

___

###  onPermissionChange

▸ **onPermissionChange**(`callback`: function): *(Anonymous function)*

*Defined in [client.ts:62](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L62)*

**Parameters:**

▪ **callback**: *function*

▸ (`permission`: [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`permission` | [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission) |

**Returns:** *(Anonymous function)*

___

###  permissionsAreEqual

▸ **permissionsAreEqual**(`aPerm`: [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission), `bPerm`: [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission)): *boolean*

*Defined in [client.ts:171](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`aPerm` | [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission) |
`bPerm` | [MavrykWalletDAppPermission](README.md#mavrykwalletdapppermission) |

**Returns:** *boolean*

___

###  request

▸ **request**(`payload`: [MavrykWalletDAppRequest](README.md#mavrykwalletdapprequest)): *Promise‹[MavrykWalletDAppGetCurrentPermissionResponse](interfaces/mavrykwalletdappgetcurrentpermissionresponse.md) | [MavrykWalletDAppPermissionResponse](interfaces/mavrykwalletdapppermissionresponse.md) | [MavrykWalletDAppOperationResponse](interfaces/mavrykwalletdappoperationresponse.md) | [MavrykWalletDAppSignResponse](interfaces/mavrykwalletdappsignresponse.md) | [MavrykWalletDAppBroadcastResponse](interfaces/mavrykwalletdappbroadcastresponse.md)›*

*Defined in [client.ts:140](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [MavrykWalletDAppRequest](README.md#mavrykwalletdapprequest) |

**Returns:** *Promise‹[MavrykWalletDAppGetCurrentPermissionResponse](interfaces/mavrykwalletdappgetcurrentpermissionresponse.md) | [MavrykWalletDAppPermissionResponse](interfaces/mavrykwalletdapppermissionresponse.md) | [MavrykWalletDAppOperationResponse](interfaces/mavrykwalletdappoperationresponse.md) | [MavrykWalletDAppSignResponse](interfaces/mavrykwalletdappsignresponse.md) | [MavrykWalletDAppBroadcastResponse](interfaces/mavrykwalletdappbroadcastresponse.md)›*

___

###  requestBroadcast

▸ **requestBroadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [client.ts:131](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  requestOperation

▸ **requestOperation**(`sourcePkh`: string, `opParams`: any): *Promise‹string›*

*Defined in [client.ts:111](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`opParams` | any |

**Returns:** *Promise‹string›*

___

###  requestPermission

▸ **requestPermission**(`network`: [MavrykWalletDAppNetwork](README.md#mavrykwalletdappnetwork), `appMeta`: [MavrykWalletDAppMetadata](interfaces/mavrykwalletdappmetadata.md), `force`: boolean): *Promise‹object›*

*Defined in [client.ts:92](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [MavrykWalletDAppNetwork](README.md#mavrykwalletdappnetwork) |
`appMeta` | [MavrykWalletDAppMetadata](interfaces/mavrykwalletdappmetadata.md) |
`force` | boolean |

**Returns:** *Promise‹object›*

___

###  requestSign

▸ **requestSign**(`sourcePkh`: string, `payload`: string): *Promise‹string›*

*Defined in [client.ts:121](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`sourcePkh` | string |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  send

▸ **send**(`msg`: [MavrykWalletPageMessage](interfaces/mavrykwalletpagemessage.md)): *void*

*Defined in [client.ts:210](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/client.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [MavrykWalletPageMessage](interfaces/mavrykwalletpagemessage.md) |

**Returns:** *void*
