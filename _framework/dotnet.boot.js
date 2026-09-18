export const config = /*json-start*/{
  "mainAssemblyName": "RaylibWasm.dll",
  "resources": {
    "hash": "sha256-RRA8MXAOKqKB8ZMdWBQESw2Q1PL/ckuUnx+tTRfwMvA=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.wasm",
        "hash": "sha256-UJZ+kLMtKmHzQNjpvqYV91k7tQMGN0bN/eXNRUEdI8E="
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "Raylib-cs.wasm",
        "name": "Raylib-cs.wasm",
        "hash": "sha256-BISKLsHMwEsEsI866UzNFXxQjhn3E2X3o5n40Ijntn8="
      },
      {
        "virtualPath": "RaylibWasm.wasm",
        "name": "RaylibWasm.wasm",
        "hash": "sha256-R5fI53KWp8sc9cc68ksWpOZ1guoyhEK39L3s5yBXb7o="
      },
      {
        "virtualPath": "System.Private.CoreLib.wasm",
        "name": "System.Private.CoreLib.wasm",
        "hash": "sha256-8jhIs8OL9aPeY/u2K/kWYyEU0oDaHcbwugTOdEpEGYk="
      },
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.wasm",
        "name": "System.Runtime.InteropServices.JavaScript.wasm",
        "hash": "sha256-8Tcgk9jTROAprUAG3SkNuBSl12OusxWGO/UB4cjJGjA="
      }
    ],
    "assembly": [],
    "vfs": [
      {
        "virtualPath": "Resources/raylib_logo.png",
        "name": "supportFiles/0_raylib_logo.png",
        "hash": "sha256-tRbYuDIagXxsCoy2AuoCiC107Lt8YOhS0uFHEUpDYLc="
      }
    ]
  },
  "debugLevel": 0,
  "globalizationMode": "invariant",
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "Microsoft.Extensions.DependencyInjection.VerifyOpenGenericServiceTrimmability": true,
        "System.ComponentModel.DefaultValueAttribute.IsSupported": false,
        "System.ComponentModel.Design.IDesignerHost.IsSupported": false,
        "System.ComponentModel.TypeConverter.EnableUnsafeBinaryFormatterInDesigntimeLicenseContextSerialization": false,
        "System.ComponentModel.TypeDescriptor.IsComObjectDescriptorSupported": false,
        "System.Data.DataSet.XmlSerializationIsSupported": false,
        "System.Diagnostics.Debugger.IsSupported": false,
        "System.Diagnostics.Metrics.Meter.IsSupported": false,
        "System.Diagnostics.Tracing.EventSource.IsSupported": false,
        "System.Globalization.Invariant": true,
        "System.TimeZoneInfo.Invariant": false,
        "System.Globalization.PredefinedCulturesOnly": true,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": false,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
        "System.Resources.ResourceManager.AllowCustomResourceTypes": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.CompilerServices.RuntimeFeature.IsDynamicCodeSupported": true,
        "System.Runtime.InteropServices.BuiltInComInterop.IsSupported": false,
        "System.Runtime.InteropServices.EnableConsumingManagedCodeFromNativeHosting": false,
        "System.Runtime.InteropServices.EnableCppCLIHostActivation": false,
        "System.Runtime.InteropServices.Marshalling.EnableGeneratedComInterfaceComImportInterop": false,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.StartupHookProvider.IsSupported": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault": false,
        "System.Threading.Thread.EnableAutoreleasePool": false
      }
    }
  }
}/*json-end*/;