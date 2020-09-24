import React from 'react';
import File from './File';

export default ({ color = '#5856D6' }) => (
  <File>
    <path
      fill={color}
      fillRule="evenodd"
      d="M8.35116 22.0289h2.26804v.42l-1.59844 1.8217h1.67944v.4725H8.24316v-.42l1.5444-1.8211h-1.4364v-.4731zM11.2998 24.7433h.6156V22.029h-.6156v2.7143zm0-3.1816h.6156v-.5669h-.6156v.5669zM14.8852 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.081-.2176-.1458-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.063-.0887.108-.1902.135-.304.027-.1143.0402-.2304.0402-.3494zm-2.1492-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.1638.0752.2994.179.4074.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.1512.0793-.3294.1184-.5346.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM12.0001 10.2465h-.6c-.1656 0-.3-.1388-.3-.31088 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091s-.1344.31088-.3.31088zM12.6001 10.8686h-.6c-.1656 0-.3-.1388-.3-.3109s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3109-.3.3109zM12.0001 11.4907h-.6c-.1656 0-.3-.1389-.3-.3109 0-.1721.1344-.311.3-.311h.6c.1656 0 .3.1389.3.311 0 .172-.1344.3109-.3.3109zM12.6001 12.1133h-.6c-.1656 0-.3-.1394-.3-.3109 0-.1721.1344-.3115.3-.3115h.6c.1656 0 .3.1394.3.3115 0 .1715-.1344.3109-.3.3109zM12.0001 12.7354h-.6c-.1656 0-.3-.1388-.3-.3109s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3109-.3.3109zM12.6001 13.3575h-.6c-.1656 0-.3-.1389-.3-.311 0-.172.1344-.3109.3-.3109h.6c.1656 0 .3.1389.3.3109 0 .1721-.1344.311-.3.311zM12.0001 17.7131c-.1656 0-.3-.1388-.3-.3109v-1.5558h.6v1.5558c0 .1721-.1344.3109-.3.3109zm0-3.1109c.1656 0 .3.1388.3.3109v.3109h-.6v-.3109c0-.1721.1344-.3109.3-.3109zm0-.6219c-.4962 0-.9.4177-.9.9328v2.4891c0 .5145.4038.9327.9.9327.4962 0 .9-.4182.9-.9327v-2.4891c0-.5151-.4038-.9328-.9-.9328zM12.6001 9.62448h-.6c-.1656 0-.3-.13942-.3-.31092 0-.17208.1344-.3115.3-.3115h.6c.1656 0 .3.13942.3.3115 0 .1715-.1344.31092-.3.31092zM12.0001 13.9801h-.6c-.1656 0-.3-.1394-.3-.3115s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3115-.3.3115zM12.0001 5.26884h-.6c-.1656 0-.3-.13942-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .1715-.1344.31092-.3.31092zM12.6001 5.89091h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.0001 6.51298h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.6001 7.13562h-.6c-.1656 0-.3-.13941-.3-.3115 0-.1715.1344-.31091.3-.31091h.6c.1656 0 .3.13941.3.31091 0 .17209-.1344.3115-.3.3115zM12.0001 7.75769h-.6c-.1656 0-.3-.13941-.3-.31091 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .1715-.1344.31091-.3.31091zM12.6001 8.37976h-.6c-.1656 0-.3-.13883-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .17209-.1344.31092-.3.31092zM12.6001 4.64678h-.6c-.1656 0-.3-.13942-.3-.3115 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.3115-.3.3115zM12.0001 1.53528h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.310918.3-.310918h.6c.1656 0 .3.138838.3.310918 0 .17208-.1344.31092-.3.31092zM12.6001 2.15734h-.6c-.1656 0-.3-.13883-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .17209-.1344.31092-.3.31092zM12.0001 2.77999h-.6c-.1656 0-.3-.13941-.3-.31091 0-.17209.1344-.3115.3-.3115h.6c.1656 0 .3.13941.3.3115 0 .1715-.1344.31091-.3.31091zM12.6001 3.40206h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.0001 4.02412h-.6c-.1656 0-.3-.13883-.3-.31091 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.31091-.3.31091zM12.0001 9.00183h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.31092-.3.31092z"
      clipRule="evenodd"
    />
  </File>
);
