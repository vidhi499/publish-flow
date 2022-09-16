export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// import AntDesign from "react-native-vector-icons/dist/AntDesign";
import iconFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
import antDesignIconFont from "react-native-vector-icons/Fonts/AntDesign.ttf";
import entypoIconFont from "react-native-vector-icons/Fonts/Entypo.ttf";
import evilIconsIconFont from "react-native-vector-icons/Fonts/EvilIcons.ttf";
import fontistoIconFont from "react-native-vector-icons/Fonts/Fontisto.ttf";
import foundationIconFont from "react-native-vector-icons/Fonts/Foundation.ttf";
import ionIconsconFont from "react-native-vector-icons/Fonts/Ionicons.ttf";
import materialIconsIconFont from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
import materialCommunityIconsIconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
import octoIconFont from "react-native-vector-icons/Fonts/Octicons.ttf";
import zocialIconFont from "react-native-vector-icons/Fonts/Zocial.ttf";
import simpleLineIconFont from "react-native-vector-icons/Fonts/SimpleLineIcons.ttf";

const iconFontStyles =
  "@font-face {src: url(" + iconFont + ");font-family: FontAwesome;}";
const antIconFontStyles =
  "@font-face {src: url(" + antDesignIconFont + ");font-family: AntDesign;}";
const entypoIconFontStyles =
  "@font-face {src: url(" + entypoIconFont + ");font-family: Entypo;}";
const evilIconFontStyles =
  "@font-face {src: url(" + evilIconsIconFont + ");font-family: EvilIcons;}";
const fontistoIconFontStyles =
  "@font-face {src: url(" + fontistoIconFont + ");font-family: Fontisto;}";
const foundationIconFontStyles =
  "@font-face {src: url(" + foundationIconFont + ");font-family: Foundation;}";
const ionIconFontStyles =
  "@font-face {src: url(" + ionIconsconFont + ");font-family: Ionicons;}";
const materialIconFontStyles =
  "@font-face {src: url(" +
  materialIconsIconFont +
  ");font-family: MaterialIcons;}";
const materialCommunityIconFontStyles =
  "@font-face {src: url(" +
  materialCommunityIconsIconFont +
  ");font-family: MaterialCommunityIcons;}";
const octiconFontStyles =
  "@font-face {src: url(" + octoIconFont + ");font-family: OctiIcons;}";
const zocialIconFontStyles =
  "@font-face {src: url(" + zocialIconFont + ");font-family: Zocial;}";
const simpleLineFontStyles =
  "@font-face {src: url(" +
  simpleLineIconFont +
  ");font-family: SimpleLineIcons;}";

// eslint-disable-next-line no-restricted-globals
var iframe = frameElement;
// @ts-ignore
var ifrDoc = iframe.contentDocument;
console.log(iframe, ifrDoc);
var style = ifrDoc.createElement("style");
style.type = "text/css";

style.appendChild(document.createTextNode(iconFontStyles));
style.appendChild(document.createTextNode(antIconFontStyles));
style.appendChild(document.createTextNode(entypoIconFontStyles));
style.appendChild(document.createTextNode(evilIconFontStyles));
style.appendChild(document.createTextNode(fontistoIconFontStyles));
style.appendChild(document.createTextNode(foundationIconFontStyles));
style.appendChild(document.createTextNode(ionIconFontStyles));
style.appendChild(document.createTextNode(materialCommunityIconFontStyles));
style.appendChild(document.createTextNode(materialIconFontStyles));
style.appendChild(document.createTextNode(octiconFontStyles));
style.appendChild(document.createTextNode(zocialIconFontStyles));
style.appendChild(document.createTextNode(simpleLineFontStyles));

// eslint-disable-next-line no-restricted-globals
ifrDoc.body.appendChild(style);
