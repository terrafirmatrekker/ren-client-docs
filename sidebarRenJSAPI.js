module.exports = [
  "api/index",
  "api/modules",
  {
    "type": "category",
    "label": "Modules",
    "items": [
      "api/modules/interfaces_build_main",
      "api/modules/interfaces_build_main_abi",
      "api/modules/interfaces_build_main_chain",
      "api/modules/interfaces_build_main_errors",
      "api/modules/interfaces_build_main_ethargs",
      "api/modules/interfaces_build_main_general",
      "api/modules/interfaces_build_main_logger",
      "api/modules/interfaces_build_main_networks",
      "api/modules/interfaces_build_main_parameters",
      "api/modules/interfaces_build_main_promievent",
      "api/modules/interfaces_build_main_transaction",
      "api/modules/interfaces_build_main_types",
      "api/modules/provider_build_main",
      "api/modules/provider_build_main_httpprovider",
      "api/modules/provider_build_main_jsonrpc",
      "api/modules/ren_src",
      "api/modules/ren_src_burnandrelease",
      "api/modules/ren_src_config",
      "api/modules/ren_src_defaultdeposithandler",
      "api/modules/ren_src_lockandmint",
      "api/modules/ren_src_types_declarations_declarations",
      "api/modules/rpc_build_main",
      "api/modules/rpc_build_main_abstract",
      "api/modules/rpc_build_main_combinedprovider",
      "api/modules/rpc_build_main_v1",
      "api/modules/rpc_build_main_v1_methods",
      "api/modules/rpc_build_main_v1_renvmprovider",
      "api/modules/rpc_build_main_v1_shard",
      "api/modules/rpc_build_main_v1_transaction",
      "api/modules/rpc_build_main_v1_unmarshal",
      "api/modules/rpc_build_main_v1_value",
      "api/modules/rpc_build_main_v2",
      "api/modules/rpc_build_main_v2_methods",
      "api/modules/rpc_build_main_v2_renvmprovider",
      "api/modules/rpc_build_main_v2_transaction",
      "api/modules/rpc_build_main_v2_unmarshal",
      "api/modules/rpc_build_main_v2_value",
      "api/modules/utils_build_main",
      "api/modules/utils_build_main_abi",
      "api/modules/utils_build_main_assert",
      "api/modules/utils_build_main_callableclass",
      "api/modules/utils_build_main_chainutils",
      "api/modules/utils_build_main_common",
      "api/modules/utils_build_main_contractcalls",
      "api/modules/utils_build_main_hash",
      "api/modules/utils_build_main_renvmhashes",
      "api/modules/utils_build_main_renvmutils",
      "api/modules/utils_build_main_signatureutils",
      "api/modules/utils_build_main_value"
    ]
  },
  {
    "type": "category",
    "label": "Enumerations",
    "items": [
      "api/enums/interfaces_build_main_errors.renjserrors",
      "api/enums/interfaces_build_main_logger.loglevel",
      "api/enums/interfaces_build_main_networks.rennetwork",
      "api/enums/interfaces_build_main_types.burnandreleasestatus",
      "api/enums/interfaces_build_main_types.lockandmintstatus",
      "api/enums/interfaces_build_main_types.txstatus",
      "api/enums/ren_src_burnandrelease.burnandreleasestatus",
      "api/enums/ren_src_lockandmint.depositstatus",
      "api/enums/rpc_build_main_v1_methods.rpcmethod",
      "api/enums/rpc_build_main_v1_value.renvmtype",
      "api/enums/rpc_build_main_v2.packprimitive",
      "api/enums/rpc_build_main_v2_methods.rpcmethod",
      "api/enums/rpc_build_main_v2_value.renvmtype"
    ]
  },
  {
    "type": "category",
    "label": "Classes",
    "items": [
      "api/classes/interfaces_build_main_logger.simplelogger",
      "api/classes/interfaces_build_main_promievent.internalpromievent",
      "api/classes/provider_build_main_httpprovider.httpprovider",
      "api/classes/ren_src.default",
      "api/classes/ren_src_burnandrelease.burnandrelease",
      "api/classes/ren_src_lockandmint.lockandmint",
      "api/classes/ren_src_lockandmint.lockandmintdeposit",
      "api/classes/rpc_build_main_combinedprovider.combinedprovider",
      "api/classes/rpc_build_main_v1_renvmprovider.renvmprovider",
      "api/classes/rpc_build_main_v2_renvmprovider.renvmprovider"
    ]
  },
  {
    "type": "category",
    "label": "Interfaces",
    "items": [
      "api/interfaces/interfaces_build_main_abi.abiinput",
      "api/interfaces/interfaces_build_main_abi.abiitem",
      "api/interfaces/interfaces_build_main_abi.abioutput",
      "api/interfaces/interfaces_build_main_chain.burndetails",
      "api/interfaces/interfaces_build_main_chain.chaincommon",
      "api/interfaces/interfaces_build_main_chain.chainstatic",
      "api/interfaces/interfaces_build_main_chain.lockchain",
      "api/interfaces/interfaces_build_main_chain.mintchain",
      "api/interfaces/interfaces_build_main_ethargs.etharg",
      "api/interfaces/interfaces_build_main_logger.logger",
      "api/interfaces/interfaces_build_main_networks.rennetworkdetails",
      "api/interfaces/interfaces_build_main_parameters.burnandreleaseparams",
      "api/interfaces/interfaces_build_main_parameters.contractcall",
      "api/interfaces/interfaces_build_main_parameters.lockandmintparams",
      "api/interfaces/interfaces_build_main_parameters.transferparamscommon",
      "api/interfaces/interfaces_build_main_transaction.rentransaction",
      "api/interfaces/interfaces_build_main_transaction.renvmfees",
      "api/interfaces/provider_build_main_jsonrpc.provider",
      "api/interfaces/ren_src_config.renjsconfig",
      "api/interfaces/rpc_build_main_abstract.abstractrenvmprovider",
      "api/interfaces/rpc_build_main_v1_methods.paramsqueryblock",
      "api/interfaces/rpc_build_main_v1_methods.paramsqueryblocks",
      "api/interfaces/rpc_build_main_v1_methods.paramsqueryfees",
      "api/interfaces/rpc_build_main_v1_methods.paramsquerynumpeers",
      "api/interfaces/rpc_build_main_v1_methods.paramsquerypeers",
      "api/interfaces/rpc_build_main_v1_methods.paramsqueryshards",
      "api/interfaces/rpc_build_main_v1_methods.paramsquerystat",
      "api/interfaces/rpc_build_main_v1_methods.paramsquerytx",
      "api/interfaces/rpc_build_main_v1_methods.paramsquerytxs",
      "api/interfaces/rpc_build_main_v1_methods.renvmblock",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryblock",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryblocks",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryburntx",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryepoch",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryfees",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryminttx",
      "api/interfaces/rpc_build_main_v1_methods.responsequerynumpeers",
      "api/interfaces/rpc_build_main_v1_methods.responsequerypeers",
      "api/interfaces/rpc_build_main_v1_methods.responsequeryshards",
      "api/interfaces/rpc_build_main_v1_methods.responsequerystat",
      "api/interfaces/rpc_build_main_v1_methods.responsequerytx",
      "api/interfaces/rpc_build_main_v1_methods.responsequerytxs",
      "api/interfaces/rpc_build_main_v1_methods.responsesubmittx",
      "api/interfaces/rpc_build_main_v1_shard.gateway",
      "api/interfaces/rpc_build_main_v1_shard.shard",
      "api/interfaces/rpc_build_main_v1_value.extethcompatpayload",
      "api/interfaces/rpc_build_main_v1_value.mintandburnfees",
      "api/interfaces/rpc_build_main_v1_value.renvmarg",
      "api/interfaces/rpc_build_main_v1_value.renvminpututxo",
      "api/interfaces/rpc_build_main_v1_value.renvmoutpututxo",
      "api/interfaces/rpc_build_main_v2.packstructtype",
      "api/interfaces/rpc_build_main_v2.typedpackvalue",
      "api/interfaces/rpc_build_main_v2_methods.paramsqueryblock",
      "api/interfaces/rpc_build_main_v2_methods.paramsqueryblocks",
      "api/interfaces/rpc_build_main_v2_methods.paramsqueryconfig",
      "api/interfaces/rpc_build_main_v2_methods.paramsquerystate",
      "api/interfaces/rpc_build_main_v2_methods.paramsquerytx",
      "api/interfaces/rpc_build_main_v2_methods.paramsquerytxs",
      "api/interfaces/rpc_build_main_v2_methods.paramssubmittx",
      "api/interfaces/rpc_build_main_v2_methods.responsequeryblock",
      "api/interfaces/rpc_build_main_v2_methods.responsequeryblocks",
      "api/interfaces/rpc_build_main_v2_methods.responsequeryconfig",
      "api/interfaces/rpc_build_main_v2_methods.responsequerystate",
      "api/interfaces/rpc_build_main_v2_methods.responsequerytx",
      "api/interfaces/rpc_build_main_v2_methods.responsequerytxs",
      "api/interfaces/rpc_build_main_v2_methods.responsesubmittx",
      "api/interfaces/rpc_build_main_v2_transaction.rpcvalue",
      "api/interfaces/rpc_build_main_v2_transaction.transactioninput",
      "api/interfaces/rpc_build_main_v2_transaction.transactionoutput",
      "api/interfaces/rpc_build_main_v2_value.extethcompatpayload",
      "api/interfaces/rpc_build_main_v2_value.mintandburnfees",
      "api/interfaces/rpc_build_main_v2_value.renvminpututxo",
      "api/interfaces/rpc_build_main_v2_value.renvmoutpututxo"
    ]
  }
];