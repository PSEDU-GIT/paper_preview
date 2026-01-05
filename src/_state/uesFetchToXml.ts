import axios from "axios";
import pako from "pako";

/**
 * b64 -> blob
 * @param b64Data
 */
const onDecoder = (b64Data: string) => {
  try {
    const data = atob(b64Data);
    const charData = data.split("").map((datum) => datum.charCodeAt(0));

    const bin = new Uint8Array(charData);
    return pako.inflate(bin, { raw: true });
  } catch (error) {
    console.error("b64 data decoder error", error);
    return new Uint8Array();
  }
};

/**
 * src -> (fetch) -> XML data
 * @param path src
 */
export const usePathToXml = async (path: string) => {
  try {
    const response = await axios.get<string>(path);

    let html = response.data;

    const regex = /<img[^>]+srcdata="([^">]+)"[^>]*>/gi;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(response.data)) !== null) {
      const fullTag = match[0];
      const encoded = match[1];

      const decoded = onDecoder(encoded);
      const resultSrc = URL.createObjectURL(
        new Blob([decoded.buffer], { type: "image/png" }),
      );

      const widthMatch = fullTag.match(/width="([^"]+)"/);
      const heightMatch = fullTag.match(/height="([^"]+)"/);
      const widthAttr = widthMatch ? ` width="${widthMatch[1]}"` : "";
      const heightAttr = heightMatch ? ` height="${heightMatch[1]}"` : "";

      const newTag = `<img src="${resultSrc}" alt="image"${widthAttr}${heightAttr}>`;
      html = html.replace(fullTag, newTag);
    }

    return html;
  } catch (error) {
    console.error(error);

    return "";
  }
};
