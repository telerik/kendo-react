---
title: Barcode Types
description: 'Learn which are the supported encodings (symbologies) by the KendoReact Barcode component.'
components: ["barcode"]
slug: types_barcode_barcodes
position: 2
---

# Barcode Types

The KendoReact Barcode supports a variety of one-dimensional (1D) industry barcodes.

To configure the Barcode symbology (encoding scheme), set the [`type`]({% slug api_barcodes_barcodeprops %}#toc-type) prop.

The following table lists the available types and supported values by each Barcode type. Note that the checksum digits are computed automatically and that all `type` values can also be spelled in lowercase.

> If the value does not match the restrictions for the chosen type, the Barcode will throw an error. Always test the application with the values you expect to see in actual use.

| Type               | Symbology          | Allowed Values                                                   | Notes                                                                                                     |
| ------------------ | ------------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `'EAN13'`          | EAN-13             | 12 digits                                                        | [International Article Number on Wikipedia ↗](https://en.wikipedia.org/wiki/International_Article_Number) |
| `'EAN8'`           | EAN-8              | 7 digits                                                         | -                                                                                                         |
| `'UPCA'`           | UPC-A              | 11 digits                                                        | [Universal Product Code on Wikipedia ↗](https://en.wikipedia.org/wiki/Universal_Product_Code)             |
| `'UPCE'`           | UPC-E              | 5 digits                                                         | -                                                                                                         |
| `'Code11'`         | Code 11            | Variable length: `0-9`, `-`                                      | [Code 11 on Wikipedia ↗](https://en.wikipedia.org/wiki/Code_11)                                           |
| `'Code39'`         | Code 39            | Variable length: `A-Z`, `0-9`, `-`, `.`, `$`, `/`, `+`, `%`, ` ` | [Code 39 on Wikipedia ↗](https://en.wikipedia.org/wiki/Code_39)                                           |
| `'Code39Extended'` | Code 39 (Extended) | Variable length: ASCII                                           | -                                                                                                         |
| `'Code93'`         | Code 93            | Variable length: `A-Z`, `0-9`, `-`, `.`, `$`, `/`, `+`, `%`, ` ` | [Code 93 on Wikipedia ↗](https://en.wikipedia.org/wiki/Code_93)                                           |
| `'Code93Extended'` | Code 93 (Extended) | Variable length: ASCII                                           | -                                                                                                         |
| `'Code128'`        | Code 128           | Variable length: ASCII, Latin-1 (ISO-8859-1)                     | [Code 128 on Wikipedia ↗](https://en.wikipedia.org/wiki/Code_128)                                         |
| `'Code128A'`       | Code 128A          | Variable length: ASCII characters 00 to 95                       | -                                                                                                         |
| `'Code128B'`       | Code 128B          | Variable length: ASCII characters 32 to 127                      | -                                                                                                         |
| `'Code128C'`       | Code 128C          | Variable length: `00` - `99` (pairs of digits)                   | -                                                                                                         |
| `'GS1-128'`        | GS1-128            | Variable length: ASCII, Latin-1 (ISO-8859-1)                     | [GS1-128 on Wikipedia ↗](https://en.wikipedia.org/wiki/GS1-128)                                           |
| `'MSImod10'`       | MSI (Mod 10)       | Variable length: `0-9`                                           | [MSI Barcode on Wikipedia ↗](https://en.wikipedia.org/wiki/MSI_Barcode)                                   |
| `'MSImod11'`       | MSI (Mod 11)       | Variable length: `0-9`                                           | -                                                                                                         |
| `'MSImod1010'`     | MSI (Mod 1010)     | Variable length: `0-9`                                           | -                                                                                                         |
| `'MSImod1110'`     | MSI (Mod 1110)     | Variable length: `0-9`                                           | -                                                                                                         |
| `'POSTNET'`        | POSTNET            | 5, 9 or 11 digits                                                | [POSTNET on Wikipedia ↗](https://en.wikipedia.org/wiki/POSTNET)                                           |

The following example demonstrates each Barcode type in action:

{% meta height:500 %}
{% embed_file barcode/types/func/app.tsx preview %}
{% embed_file barcode/types/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Barcodes]({% slug api_barcodes %})
